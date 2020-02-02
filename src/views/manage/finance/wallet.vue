<!--
 * @Author: your name
 * @Date: 2019-12-19 15:36:13
 * @LastEditTime : 2020-01-15 11:49:27
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\views\manage\finance\wallet.vue
 -->
<template>
    <div class="wallet">
       <!-- 面包屑导航部分 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>当前位置:  </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>财务管理</el-breadcrumb-item>
            <el-breadcrumb-item><span class="t-text">钱包</span></el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 提现输入框部分 -->
        <div class="ww-input">
            <div class="wallet-code">
                <div class="wc-addr">
                    <span class="list-title">充值地址</span>
                </div>
                <div class="wc-pic">
                    <div class="textCode">
                        <p>METWallet</p>
                        <b>钱包地址：</b>
                    </div>
                    <div class="picCode">
                        <div id="qrcode" ref="qrcode"></div>
                        <!-- <img class="img1" src="../../../assets/home/Bitmap.png" alt="正在加载……"> -->
                        <div class="codeLink">
                            <span style="float:left;">{{walletAddr}}</span>
                            <ft-copy :mes="walletAddr" @success="success"></ft-copy>
                        </div> 
                    </div> 
                </div>
            </div>
            <div class="ww-text">
               <span class="list-title">提现</span>
            </div>
            <el-form ref="depositForm" :model="depositForm" label-width="110px">
                <el-form-item label="钱包地址：" >
                        <el-input v-model="depositForm.address" placeholder="请输入METWallet地址"></el-input>
                </el-form-item>
                <el-form-item label="提现数量：" prop="depositNum">
                        <el-input v-model="depositForm.depositNum" placeholder="请输入需要提现的MET数量" type="number">
                            <i slot="suffix" style="color:black">MET</i>
                        </el-input>
                </el-form-item>

                <div class="text">当前可提现额度：<b style="color:red">{{depositForm.usable}}&nbsp;MET</b></div>

                <el-form-item style="letter-spacing:4px;" label="手续费：">
                        <el-input v-model="procedure">
                            <i slot="suffix" style="color:black; letter-spacing:0px">MET</i>
                        </el-input>
                </el-form-item>

                <div class="text">当前手续费为：<b style="color:red">{{depositForm.fees*100}}%</b></div>

                <el-form-item label-width="26px" class="ww-submit">
                    <el-button @click="submitWallet">提交</el-button>
                </el-form-item>
            </el-form>                   
         </div>

         <!-- 提现记录列表 -->
        <div class="wallet-list">
            <div class="wallet-header">
                <span class="list-title">提现记录</span>
            </div>
            <el-table stripe :data="walletData" style="width: 100%" :header-cell-style="{background:'#E5E9F2'}">
                <el-table-column align="center" type="index" :index="indexMethod" label="序号" width="85"></el-table-column>
                <el-table-column align="center" prop="order" label="订单编号" width="260"></el-table-column>
                <el-table-column align="center" prop="create_time" label="创建时间" width="250"></el-table-column>
                <el-table-column align="center" prop="amount"  label="金额" width="360">
                    <template slot-scope="scope">
                        <b><b style="color:red;">{{scope.row.amount}}</b>&nbsp;MET</b>
                    </template>
                </el-table-column>    
                <el-table-column align="center" prop="form"  label="类型">
                    <template slot-scope="scope">
                        <b v-if="scope.row.form === 1" >充值</b>
                        <b v-else>提现</b>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="status"  label="状态" >
                    <template slot-scope="scope">
                            <b v-if="scope.row.status === 0" style="color:#6792F9;">未支付</b>
                            <b v-else-if="scope.row.status === 1" style="color:red;">支付成功</b>
                            <b v-else style="color:#E5E9F2">支付失败</b>
                    </template>
                </el-table-column>   
            </el-table>

             <!-- 分页组件 -->
            <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="current"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            >
            </el-pagination>
        </div>
        <!-- 提交钱包支付密码对话框 -->
        <el-dialog title="支付密码" class="payDialog" :visible.sync="dialogwalletVisible" width="390px">
            <el-form :model="payData" ref="payData">
                <el-form-item prop="payPassword">
                   <el-input v-model="payData.payPassword" autocomplete="off" placeholder="请输入支付密码" type="password"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelPay">取 消</el-button>
                <el-button type="primary" @click="dialogWalletSubmit">确 认</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import QRCode from 'qrcodejs2'
import financeMapper from '../../../mapper/financeMapper';
export default {
    components: {QRCode},
    data(){
        return{
             //分页数据
             current: 1,
             pageSize: 10,
             total: 0, 
            //  提现记录数据
             walletData: [],
             depositForm:{//钱包提现文本数据
                address:'',//地址
                usable:'',//额度
                fees:'',//返回当前手续费
                depositNum:'',  //提现数量
             },
             walletAddr:'',//钱包地址
             // 支付密码对话框
             dialogwalletVisible:false,
             payData:{
                 payPassword:'',
             },
            
            }
      },
 methods: {
         //    序号排列
        indexMethod(index) {
             return (this.current - 1) * this.pageSize + index + 1;
        },
        // 改变每页显示的条数
         handleSizeChange(val) {
            this.pageSize = val;
            this.current = 1;
            this.getWalletList();
            },
        // 改变当前页    
        handleCurrentChange(val) {
            this.current = val;
            this.getWalletList();
            },

        //生成二维码
        qrcodeScan() {
            // let that = this;
        let qrcode = new QRCode('qrcode', this.option)
        console.log(qrcode)
     },    

        //获取提现记录列表
        getWalletList(){
            const params = {size:this.pageSize, page:this.current}
            financeMapper.getWallet(params).then(res=>{
                console.log(res);
                const{code, data:{address,usable,fees,list:{count,list}}} = res;
                if(code === 200){
                    this.walletData = list;
                    this.total = count;
                    // 手续费
                    this.depositForm.fees = fees;
                    // 当前可用额度
                    this.depositForm.usable = usable;
                    this.depositForm.address = address;
                    this.walletAddr = address;
                    
                   

                }else{
                    this.$message.error('请求失败');
                }
            },err=>{
                 this.$message.error('服务器错误');
            })
        },
        
        // 提交钱包按钮显示输入密码对话框
        submitWallet(){
            let param = this.depositForm.depositNum.trim();
            if(param === ''){
                this.$message.error("请输入提现数量");
                return false;
            }else if(parseFloat(param).toString() == "NaN"){
                this.$message.error("请输入数字类型");
                return false;
            }else if(param < 0){
                this.$message.error("请输入正数");
                return false;
            }
            else{
                 this.dialogwalletVisible = true;
            }
            
        },

        //点击取消重置支付密码
        cancelPay(){
            this.$refs.payData.resetFields();
            this.dialogwalletVisible = false;
        },

        // 输入支付密码
        dialogWalletSubmit(){
                const params = {
                address: this.depositForm.address, 
                value: this.depositForm.depositNum,
                payPass: this.payData.payPassword     
                };
                financeMapper.depositWallet(params).then(res=>{
                    // console.log(res);
                    const{code, msg} = res;
                    if(code === 200){
                        this.$message.success(msg);
                    }else{
                        this.$message.error(msg);
                    }
                    this.$refs.payData.resetFields();
                    this.$refs.depositForm.resetFields();
                    this.dialogwalletVisible = false;
                    this.getWalletList()
                },err=>{
                     this.$message.error("服务器错误");   
                })
                
           
        },
        // 复制地址
        success() {
            this.$message({
            message: "复制成功",
            type: "success"
        });
        },
    },
    computed:{
        //自定义手续费  必须
         procedure(){
             if(this.depositForm.depositNum == 0){
                 return '';
             }else{
                 return this.depositForm.depositNum*0.002;
             }
            
         },

         option(){
             let obj = {};
             obj.width = 200;
             obj.height = 200;
             obj.text = "0xFdd5e66e4c57dC4f3a2E76dfA28DE9c8Ffd0963b";
             obj.correctLevel = QRCode.CorrectLevel.L;
             return obj;
         }
    },
    created(){
        this.getWalletList();
    },
    mounted(){
        this.qrcodeScan();
    }
}
</script>
    

<style lang="less" scoped>
@import url("../../../style/index");
.wallet{
     background: #ffffff;

   .wallet-header{
       margin-bottom: 25px;
   }

   
    .wallet-code{
        padding-left: 20px;
        margin-bottom: 20px;
        .wc-addr{
            margin-bottom: 25px;
        }
        .wc-pic{
            .textCode{
                float: left;
            }
            .picCode{
                .img1{
                    width:160px;
                    height: 160px;
                    margin-left: 22px;
                }
                .codeLink{
                     margin-left: 95px;
                     margin-top: 4px;
                     img{
                         width: 14px;
                         height: 14px;
                         margin-left: 10px;
                     }
                }
            }
        }
    }
   
    .ww-input{
        padding: 56px;
        .ww-text{
            padding-left: 22px;
            margin-bottom: 22px;
        }
        .text{
            padding-left: 112px;
            margin-bottom: 24px;
            color:#C5CFDB;
            font-size: 12px;
            width: 100%;
        }

    }

    // 钱包列表部分
    .wallet-list{
            padding: 76px;
            padding-top: 0px;
    }
// 密码对话框部分
    .payDialog{
        text-align:center;
        font-size:24px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(31,45,61,1);
    }
}
</style>

<style lang="less">
@import url('../../../style/pagination.less');
@import url('../../../style/breadcrumb.less');
.ww-input{
    .el-form-item__label{
        line-height: 36px;
    }
    .el-input{
        width: 299px;
         line-height: 36px;
        .el-input__inner{
             height: 36px;
            
        }  
      }
    .ww-submit{
        .el-button{
            color: #fff;
            background-color: #2D68F6;
            width: 104px;
            height: 38px;
            text-align: center;
            
        }
    }   
}
.payDialog{
    .el-dialog__header{
        height: 50px;
    }
    .el-dialog__body{
        height: 90px;
    }
    .el-dialog__footer{
       
        .dialog-footer{
            display: flex;
            justify-content: center;
            .el-button:nth-child(2){
                background-color: #2D68F6;
                margin-left: 24px;
            }
        }
    }
}
</style>