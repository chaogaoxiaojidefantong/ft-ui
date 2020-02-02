<!--
 * @Author: your name
 * @Date: 2019-12-21 10:03:29
 * @LastEditTime : 2020-01-08 18:00:21
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\views\manage\releas\releaseTask.vue
 -->
<template>
    <div class="releaseTask">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>当前位置:  </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>推广发布</el-breadcrumb-item>
            <el-breadcrumb-item><span class="t-text">发布列表</span></el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 输入文本框部分 -->
        <div class="reTask-input">
            <div class="releaseText">
                <span class="list-title">发布任务</span>   
            </div>

            <div class="releaseMessage">
               <el-form ref="releaseTaskData" :rules="releaseRules" :model="releaseTaskData" label-width="100px">
                    <el-form-item prop="article_id" label="任务稿件" class="taskManu">
                        <el-input v-model="releaseTaskData.article_id"></el-input>
                    </el-form-item>
                    <el-button class="taskManuscript" @click="chooseArtical">选择稿件</el-button>
                    <div class="text">目前只支持在摩引擎发布快讯的稿件</div>{{releaseTaskData.fabu_site}}
                
                    <el-form-item prop="validTime" class="dc-time" label="有效期" style="letter-spacing:4px;">
                        <el-date-picker unlink-panels v-model="releaseTaskData.validTime" type="daterange" range-separator="-"  start-placeholder="开始日期"
                            end-placeholder="结束日期"  value-format="yyyy-MM-dd HH:mm:ss"> </el-date-picker>
                    </el-form-item>
                

                    <el-form-item prop="reward" style="letter-spacing:4px;" label="总奖励">
                            <el-input v-model="releaseTaskData.reward" placeholder="请输入总奖励MET数量">
                                <i slot="suffix" style="color:black; letter-spacing:0px; font-style:normal;">MET</i>
                            </el-input>
                    </el-form-item>
                    <div class="text">当前余额为：1888 MET</div>

                    <el-form-item prop="every_reward" label="单次奖励">
                            <el-input v-model="releaseTaskData.every_reward" placeholder="请输入单次奖励MET数量">
                                <i slot="suffix" style="color:black; letter-spacing:0px; font-style:normal;">MET</i>
                            </el-input>
                    </el-form-item>
                    <div class="text">总奖励必须为单次奖励的倍数</div>

                    <el-form-item prop="num_top" label="奖励次数">
                            <el-input v-model="releaseTaskData.num_top" placeholder="请输入上限次数">
                                <i slot="suffix" style="color:black; letter-spacing:0px; font-style:normal;">次</i>
                            </el-input>
                    </el-form-item>
                    <div class="text">每个用户可获得上限本任务奖励上限次数，0为无限制</div>

                    <el-form-item label="精准投放" prop="put">
                        <el-radio-group v-model="releaseTaskData.put" >
                            <el-radio label="1">非精准投放</el-radio>
                            <el-radio label="2">精准投放</el-radio>
                            <span class="consumeMet">每次需消耗 20 MET</span> 
                        </el-radio-group>
                    </el-form-item>
                    <!-- <template slot-scope="scope">
                      <ft-cascader   @getArr="getArea"></ft-cascader>
                    </template> -->
                    <ft-cascader v-show="releaseTaskData.put === '2'" @getArr="getArea"></ft-cascader>
                    <!-- {{releaseTaskData.province}}{{releaseTaskData.city}}{{releaseTaskData.area}} -->
                    <!-- 分割线 -->
                    <el-divider></el-divider>

                    <el-form-item class="reTask-submit" label-width="23px">
                        <el-button @click="resetForm('releaseTaskData')">取消</el-button>
                        <el-button @click="showPayPasswordDialog('releaseTaskData')">发布</el-button>
                    </el-form-item>
              </el-form>     
            </div>
                              
         </div>

    <!-- 发布稿件选择对话框 -->
       <el-dialog class="selectManu" width="45%" title="稿件选择" :visible.sync="dialogManuVisible" center>
            <el-table stripe :data="articalData" :header-cell-style="{background:'#E5E9F2'}">
                <el-table-column align="center" type="index" label="序号" width="86px"></el-table-column>
                <el-table-column align="center" prop="title" label="文章标题" width="209px"></el-table-column>
                <el-table-column align="center" prop="type" label="类型" width="140px"></el-table-column>
                <el-table-column align="center" prop="order_time"  label="发布时间" width="140px"></el-table-column>    
                <el-table-column align="center" label="操作" width="141px">
                     <template slot-scope="scope">
                         <el-button type="text" size="small" @click="affirmArtical(scope.row.id ,scope.row.article_id, scope.row.fabu_site)">选择</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
                 <el-button type="primary" @click="dialogManuVisible = false">取 消</el-button>
            </span>
        </el-dialog> 

    <!-- 点击发布按钮显示支付密码弹窗-->
         <el-dialog
            class="payPassword"
            title="支付密码"
            :visible.sync="PayPasswordDialogVisible"
            width="500px"
            center>
            <el-form ref="payDatas" :model="payData" :rules="payRules" label-width="0px">
                <el-form-item prop="payPassword">
                    <el-input v-model="payData.payPassword" placeholder="请输入支付密码" type="password"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="PayPasswordDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirmPassword">确 定</el-button>
            </span>
         </el-dialog>

    </div>
</template>

<script>    
import taskMapper from '../../../mapper/taskMapper';
export default {
    data(){
        return{
           releaseTaskData:{
               order_id:'',
               article_id:'',
               validTime:'',
               fabu_site: '',
               reward:'',
               every_reward:'',
               num_top:'',
               put:'',//投放
               province: "",
               city: "",
               area: "",
           },
           value:'' ,
        //    发布稿件对话框部分
           dialogManuVisible:false,
        //    支付密码对话框
           PayPasswordDialogVisible:false,
        //    支付密码数据
           payData:{
               payPassword:'',
           },
           gridData:'',
           //稿件对话框数据
           articalData: [],
          

        //    表单验证规则
           releaseRules: {
               article_id: [
                    { required: true, message: '请选择任务稿件', trigger: 'change' },
                ],
                validTime: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                reward: [
                    { required: true, message: '请输入总奖励MET数量', trigger: 'change' }
                ],
                every_reward: [
                    { required: true, message: '请输单次奖励MET数量', trigger: 'change' }
                ],
                num_top: [
                    { required: true, message: '请输入上限次数', trigger: 'change' }
                ]
          },
          payRules:{
              payPassword:[
                  {required: true, message: '请输入密码', trigger: 'change' }
              ]
          } 
        }
    },
    methods: {
       getArea(arr) {
            this.releaseTaskData.province = arr[1];
            this.releaseTaskData.city = arr[2];
            this.releaseTaskData.area = arr[3];
       }, 

    // 获取可选稿件列表
    getArticalList(){
        const params = {};
        taskMapper.getTaskArtical(params).then(res=>{
            console.log(res);
            const {code, data:{list:{items,total}}} = res;
            if(code === 200){
                this.articalData = items;
            }
        },err=>{
             
            console.log(err);
        })
       },   

    //选择稿件
    chooseArtical(){
          this.getArticalList();
          this.dialogManuVisible = true;
       },

    // 确认选择稿件
    affirmArtical(id,artId, fbauSite){
        this.releaseTaskData.order_id = id;
        this.releaseTaskData.article_id = artId;
        this.releaseTaskData.fabu_site = fbauSite;
        // 关闭选择稿件对话框
        this.dialogManuVisible = false;
    },

    

    // 点击发布按钮弹出支付密码对话框
    showPayPasswordDialog(formName){
        //   this.PayPasswordDialogVisible = true;
        // this.$refs[formName].validate( valid => {
        //      
        //     if(!valid){
        //         this.$message("请填写发布任务表单数据");
        //         return false;
        //     } 
        //       this.PayPasswordDialogVisible = true;
        //  })
         this.PayPasswordDialogVisible = true;
       },
    //点击支付密码显示发布成功提示框
    confirmPassword(){
        // delete releaseTaskData.validTime;
        // delete releaseTaskData.put;
        // console.log(releaseTaskData);
        // const params = {...releaseTaskData, start_time:this.start_time, end_time:this.end_time, payPass:this.payData.payPassword};
        const params = {
            order_id: this.releaseTaskData.order_id,
            article_id: this.releaseTaskData.article_id,
            fabu_site: this.releaseTaskData.fabu_site,
            reward: this.releaseTaskData.reward,
            every_reward: this.releaseTaskData.every_reward,
            num_top: this.releaseTaskData.num_top,
            province: this.releaseTaskData.province,
            city: this.releaseTaskData.city,
            area: this.releaseTaskData.area,
            start_time: this.start_time,
            end_time: this.end_time, 
            payPass: this.payData.payPassword
        }
        taskMapper.putTasks(params).then(res=>{
             
            console.log(res);
            const {code, msg} = res;
            if(code === 200){
                this.PayPasswordDialogVisible = false;
                this.$refs.releaseTaskData.resetFields();
                this.$refs.payDatas.resetFields();
                this.$alert('稿件发布成功。', '提示', {
                confirmButtonText: '好的',
                center: true,
              });
            }else{
                this.$message.error(msg);
                this.$refs.payDatas.resetFields();
            }
        },err=>{
             
        })

     
       },

    // 重置表单
    resetForm(formName){
        this.$refs[formName].resetFields();
     }   
    },
    computed:{
        start_time() {
            return this.releaseTaskData.validTime[0];
          },
        end_time() {
            return this.releaseTaskData.validTime[1];
        },
    },
    created(){
    //    this.getArticalList();
    }
}

</script>
<style lang="less" scoped>
@import url("../../../style/index");
.releaseTask{
       .reTask-input{
           background: #ffffff; 
           padding: 76px;
           height: 100%;
        .text{
            margin-top: 20px;
            padding-left: 100px;
            margin-bottom: 24px;
            color:#C5CFDB;
        }
        .releaseMessage{
            padding-top: 40px;
            .consumeMet{
                font-size:12px;
                color:#99A9BF;
            }
        }
     }
    }
</style>

<style lang="less">
@import url('../../../style/pagination.less');
@import url('../../../style/breadcrumb.less');
.reTask-input{
    
    .el-form-item.taskManu{
        float: left;
        margin-right: 25px;
    }
    .el-form-item{
        height: 25px;
        margin-bottom: 30px;
    }
    .el-form-item__label{
        line-height: 36px;
    }
    .el-input{
        width: 935px;
          line-height: 36px;
        .el-input__inner{
          height: 36px;
           
        } 
      }
     .dc-time .el-form-item__content{
            .el-date-editor{
                height: 36px;
                width: 250px;
                .el-input__icon{
                    line-height: 30px;
                    margin-left: 10px;
                }
            }
        }   
    .el-radio-group{
        margin-top: 10px;
        .el-radio:nth-child(1){
            display: block;
            margin-bottom: 12px;
      }   
    }
    .el-cascader{
        padding-left: 74px;
        margin-top: 17px;
        .el-input{
           width: 330px;
        } 
    }
    .el-divider--horizontal{
        width: 1015px;
        margin-top: 50px; 
    }
    .el-form-item.reTask-submit{
        .el-button{
            width:88px;
        }
        .el-button:nth-child(1){
            background-color: #fff;
             color: black;
        }
        .el-button:nth-child(2){
            background-color: #2D68F6;
            color: #fff;
            margin-left:20px;
        }
    }   
}
// 稿件对话框
 .selectManu.el-dialog__wrapper{
     .el-dialog__title{
         font-size: 24px;
         font-family:PingFangSC-Medium,PingFang SC;
         font-weight:500;
         color:rgba(31,45,61,1);
     }
     .el-dialog__footer{
        .el-button{
         width:96px;
         height:36px;
         background-color: #2D68F6;
     }
     }
    
     .el-dialog__body{
         padding-left: 184px;
     }
 }

 .el-message-box__wrapper{
     .el-message-box__title{
        //  padding-bottom: 36px;
         span{
            font-size:24px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(31,45,61,1);
         }
     }
     .el-message-box__message{
            font-family:MicrosoftYaHei;
            color:rgba(71,86,105,1);
            padding-bottom: 30px;
     }
     .el-button{
         background-color: #2D68F6;
         width: 74px;
         height: 36px;
         text-align: center;
     }
 }

//  支付密码对话框.
.payPassword{
   .el-dialog.el-dialog--center{
       width: 860px;
   }
   .el-dialog--center .el-dialog__body {
    padding: 35px 50px 20px;
   }
}
</style>