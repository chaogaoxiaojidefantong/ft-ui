<!--
 * @Author: your name
 * @Date: 2019-12-19 15:34:48
 * @LastEditTime : 2020-01-14 09:03:26
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\views\manage\finance\recharge.vue
 -->
<template>
    <div class="recharge">
        <!-- 面包屑导航部分 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>当前位置:  </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>财务管理</el-breadcrumb-item>
            <el-breadcrumb-item><span class="t-text">我要充值</span></el-breadcrumb-item>
        </el-breadcrumb>
        
        
        <div class="recharge-contents">
            <!-- 媒体类型 -->
            <div class="titleText">
                 <span class="list-title">我要充值</span>
            </div>
            <el-form label-width="110px" ref="rechargeForm">
                <el-form-item label="支付方式：">
                    <el-radio v-model="payType" label="1"><img src="../../../assets/home/zfbpay.png" alt="加载中……"></el-radio>
                    <el-radio v-model="payType" label="2"><img src="../../../assets/home/wxpay.png" alt="加载中……"></el-radio>
                </el-form-item>
                <el-form-item label="选择金额：">
                    <el-radio v-model="chooseMoney" label="1">500</el-radio>
                    <el-radio v-model="chooseMoney" label="2">1000</el-radio>
                    <el-radio v-model="chooseMoney" label="3">5000</el-radio>
                    <el-radio v-model="chooseMoney" label="4">10000</el-radio>
                    <el-radio v-model="chooseMoney" label="5">20000</el-radio>
                </el-form-item>
                <el-form-item label="充值金额：">
                    <el-input v-model="rechargeCount" placeholder="请输入充值金额" class="rc-recharge" type="number" @change="changeMoney"></el-input>
                </el-form-item>
                 <el-form-item label="余额：">
                    <b style="color:red">{{balance}}&nbsp;MET</b>
                 </el-form-item>
                 <el-form-item label-width="22px">
                    <el-button type="primary" @click="confirmRechargeBtn">确认充值</el-button>
                </el-form-item>
            </el-form>    
            <!-- 充值输入框 -->
            <el-divider class="cut-off"></el-divider>
        </div>

       <!-- 充值记录列表 -->
        <div class="recharge-list">
            <div class="recharge-header">
                <span class="list-title">充值记录</span>
            </div>
            <el-table :default-sort = "{prop: 'zip', order: 'descending'}" stripe :data="rechargeCordList"  style="width: 100%" :header-cell-style="{background:'#E5E9F2'}">
                <el-table-column align="center" type="index" :index="indexMethod" label="序号" width="85"></el-table-column>
                <el-table-column align="center" prop="order" label="订单编号" width="260"></el-table-column>
                <el-table-column align="center" prop="create_time" label="创建时间" width="350"></el-table-column>
                <el-table-column align="center" prop="type"  label="支付平台" width="300"></el-table-column>    
                <el-table-column align="center" prop="amount"  label="充值金额" width="300">
                     <template slot-scope="scope">
                        <b style="color:red; font-size:12px;">{{scope.row.amount}}</b>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="status"  label="订单状态" >
                     <template slot-scope="scope">
                            <b v-if="scope.row.status === 0" style="color:#6792F9;">待支付</b>
                            <b v-else-if="scope.row.status === 1" style="color:#E5E9F2;">支付完成</b>
                            <b v-else style="color:red">支付失败</b>
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
    </div>
</template>
<script>
import financeMapper from '../../../mapper/financeMapper';
import {getToken} from '../../../libs/util'
import userUtil from '../../../libs/userUtil'
export default {
     data() {
      return {
        current: 1,
        pageSize: 10,
        total: 0, 
        rechargeCordList:[],//充值数据列表
        balance:'',//余额
        payType: '1', //支付类型
        chooseMoney: '1',  //选择金额单选框

        rechargeCount:'',//选择金额
        WXdata:{},
       
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
            this.getRechaRecord();
        },
        // 改变当前页    
        handleCurrentChange(val) {
             this.current = val;
             this.getRechaRecord();
            }, 

        changeMoney(){
            this.chooseMoney = '';
        },    
            
        // 获取充值记录列表
        getRechaRecord(){
            const params = {size:this.pageSize, page:this.current};      
             financeMapper.getPayRecord(params).then(res=>{
                //    
                const {code, data:{amount}, data:{recharge:{count}},
                data:{recharge:{list}}} = res;
                if(code === 200){
                    this.rechargeCordList = list;
                    this.balance = amount; //余额
                    this.total = count;  
                }
               
            },err=>{
                 
                console.log(err);
            })
        },  

        // 确认充值
        confirmRechargeBtn() {
            if(this.payType === ''){
                this.$message.error("请选择支付类型");
                return false;
            }
            if(this.rechargeCount === ''){
                this.$message.error("请输入充值金额");
                return false;
            }
            if(this.rechargeCount < 1){
                this.$message.error("请输入大于1的充值金额");
                return false;
            }
           const params = {type:this.payStyle, amount:this.rechargeCount, levelCredentials:true};
            financeMapper.payment(params).then(res=>{
                console.log(res);
                if(this.payType === '1'){
                document.querySelector('body').innerHTML = res;
                document.forms['alipay_submit'].submit();
                }else{    
                    //let data=JSON.stringify({url:res.code_url,orderNo:res.out_trade_no});
                    userUtil.setWeixinData(res);
                    setTimeout(()=>{
                        this.$router.push({name:'WeixinPay'})
                    },500);         
                 }
                })   
            },
    },
    watch:{
        chooseMoney(newVal, oldVal){
            const baseMoney = 500
            if(newVal === '1'){
              this.rechargeCount = baseMoney*1;
            }
            if(newVal === '2'){
              this.rechargeCount = baseMoney*2; 
            }
            if(newVal === '3'){
              this.rechargeCount = baseMoney*10;  
            }
            if(newVal === '4'){
              this.rechargeCount = baseMoney*20;  
            }
            if(newVal === '5'){
              this.rechargeCount = baseMoney*40;  
            }   
          }
    },
    computed: {
        payStyle(){
            if(this.payType === '1'){
                return 'alipay';
            }
            if(this.payType === '2'){
                return 'wechat'
            }
        }
    },
    created(){
        this.getRechaRecord();
        let time=(new Date()).valueOf();
    }
}
</script>

<style lang="less" scoped>
@import url("../../../style/index");
    .recharge{
         background: #ffffff;
         .titleText{
             padding:22px;
         }
        .recharge-contents{
            padding:36px;
        }
        .recharge-list{
            .recharge-header{
                margin-bottom: 20px;
            }
            padding: 60px;
            padding-top: 0px;
    }
}
</style>

<style lang="less">
@import url('../../../style/pagination.less');
@import url('../../../style/breadcrumb.less');
.recharge{
    .el-form-item__content{
        .el-radio__label{
            img{
                width: 55px;
                height: 20px;
            }
        }
    }
    .rc-recharge.el-input{
        width: 299px;
        .el-input__inner{
            height: 36px;
        }
    }
    .el-button{
        background-color: #2D68F6;
        border-radius: 6px;
        width: 104px;
        height: 38px;
    }

}
</style>