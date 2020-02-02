<template>
  <div class="order">
     <!-- 面包屑导航部分 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>当前位置:  </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>媒体管理</el-breadcrumb-item>
            <el-breadcrumb-item><span class="t-text">订单管理</span></el-breadcrumb-item>
        </el-breadcrumb>
    <div class="orderOne">
      <p class="orderTwo">媒体类型：</p>
      <el-radio-group v-model="mediaRadio" fill="#ffffff" @change="getOrderList">
        <el-radio-button label="">全部</el-radio-button>
        <el-radio-button label="1">主流媒体</el-radio-button>
        <el-radio-button label="2">自媒体</el-radio-button>
        <el-radio-button label="3">区块链媒体</el-radio-button>
        <el-radio-button label="4">快讯</el-radio-button>
      </el-radio-group>
    </div>
    <div class="orderOne">
      <p class="orderTwo">执行时间：</p>
      <el-radio-group v-model="dataRadio" fill="#ffffff" @change="getOrderList">
        <el-radio-button label="">全部</el-radio-button>
        <el-radio-button label="0">今日</el-radio-button>
        <el-radio-button label="1">昨日</el-radio-button>
        <el-radio-button label="2">本周</el-radio-button>
        <el-radio-button label="3">本月</el-radio-button>
        <el-radio-button label="4">半年</el-radio-button>
        <el-radio-button label="5">今年</el-radio-button>
      </el-radio-group>
    </div>
    <div
      class="orderOne"
      style="border-bottom: 1px solid rgba(224,230,237,1); padding-bottom:20px"
    >
      <p class="orderTwo">订单状态：</p>
     <el-radio-group v-model="statusRadio" fill="#ffffff" @change="getOrderList">
        <el-radio-button label="">全部</el-radio-button>
        <el-radio-button label="0">已处理</el-radio-button>
        <el-radio-button label="1">发布中</el-radio-button>
        <el-radio-button label="2">已发布</el-radio-button>
        <el-radio-button label="3">已退稿</el-radio-button>
        <el-radio-button label="4">已取消</el-radio-button>
      </el-radio-group>
    </div>
    <div class="orderThree orderManage" style="margin-top:20px;margin-bottom:20px">
      <div class="orderThree">
        <p class="orderFour">
          排
          <span style="margin-right:32px"></span>序:
        </p>
        <p class="orderFive">默认</p>
        <el-input placeholder="关键字/订单号" v-model="keyWord"></el-input>
        <el-button type="primary" @click="getOrderList">搜索</el-button>
            <el-date-picker 
            unlink-panels 
            v-model="searchDate" 
            type="daterange" 
            range-separator="-"  
            start-placeholder="开始日期"
            end-placeholder="结束日期" 
            value-format="yyyy-MM-dd"> 
            </el-date-picker>
        <el-button type="primary" @click="getOrderList">筛选</el-button>
      </div>
      <div class="orderSix" @click="excelOutOrderList" style="cursor:pointer;">导出列表</div>
    </div>
    <div class="tableOrder">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{ background: '#E5E9F2' }"
      >
        <el-table-column align="center" prop="order_no" label="订单编号" width="220px">
        </el-table-column>
        <el-table-column align="center" prop="title" label="文章标题" width="150px" :show-overflow-tooltip='true'>
        </el-table-column>
        <el-table-column align="center" prop="media_type" label="类型" width="90px">
            <template slot-scope="scope">
                <span v-if="scope.row.media_type === 1">主流媒体</span>
                <span v-else-if="scope.row.media_type === 2">自媒体</span>
                <span v-else-if="scope.row.media_type === 3">区块链</span>
                <span v-else>快讯</span>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="fabu_site" label="发布网址/回链">
        </el-table-column>
        <el-table-column align="center" prop="media_name" label="媒体名称">
        </el-table-column>
        <el-table-column align="center" prop="order_money" label="价格">
             <template slot-scope="scope">
                <span style="color:red">{{scope.row.order_money}}&nbsp;MET</span>
              </template>
        </el-table-column>
        <el-table-column align="center" prop="order_state" label="状态" width="80px">
          <template slot-scope="scope">
            <span v-if="scope.row.order_state === 0" style="color:#6792F9;">已处理</span>
            <span v-else-if="scope.row.order_state === 1" style="color:#FFDA92;">发布中</span>
            <span v-else-if="scope.row.order_state === 2" style="color:#2D68F6;">已发布</span>
            <span v-else-if="scope.row.order_state === 3" style="color:#FF0000;">已退稿</span>
            <span v-else-if="scope.row.order_state === 4" style="color:#D4DAE4;">已取消</span>
            <span v-else style="color:#E5E9F2">定时发布</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="order_time" label="提交时间" width="150px">
          <template slot-scope="scope">
            {{ scope.row.order_time | timeFilter }}
          </template>
        </el-table-column>
        <el-table-column align="center" prop="release_time" label="发布时间" width="150px">
           <template slot-scope="scope">
             <span v-if="scope.row.release_time === 0"></span>
             <span v-else>{{ scope.row.release_time | timeFilter }}</span> 
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="90px">
          <template slot-scope="scope">
            <el-button
              @click="showDetailsDialog(scope.row.id)"
              type="text"
              size="small"
            >
              订单详情
            </el-button>
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
  <!-- 订单详情对话框 -->
     <div class="orderDialog">
        <el-dialog
        title="订单详情"
        :visible.sync="centerDialogVisible"
        width="1300px"
        center>
          <!-- 步骤条 -->
          <el-steps :space="200" :active="activeStep" finish-status="success" process-status="" align-center>
            <el-step title="编辑稿件"></el-step>
            <el-step title="选择渠道"></el-step>
            <el-step title="已处理"></el-step>
            <el-step title="发布中"></el-step>
            <el-step v-if="orderStatus === 2" title="完成"></el-step>
            <el-step v-if="orderStatus === 3" title="驳回"></el-step>
            <el-step v-if="orderStatus === 4" title="取消"></el-step>
            <el-step v-if="orderStatus === 5" title="定时发布"></el-step>
          </el-steps>       
         <!-- 订单详情列表 -->
           <div class="order-list">
            <div class="order-header">
                <span class="list-title">订单信息</span>
            </div>
            <el-table :data="orderDetails"  style="width: 100%" :header-cell-style="{background:'#E5E9F2'}">
                <el-table-column align="center" prop="order_no" label="订单编号" width="290px"></el-table-column>
                <el-table-column align="center" prop="order_time" label="提交时间" ></el-table-column>
                <el-table-column align="center" prop="title"  label="文章标题" width=""></el-table-column>    
                <el-table-column align="center" prop="media_type"  label="类型" width="">
                     <template slot-scope="scope">
                          <span v-if="scope.row.media_type === 1">主流媒体</span>
                          <span v-else-if="scope.row.media_type === 2">自媒体</span>
                          <span v-else-if="scope.row.media_type === 3">区块链</span>
                          <span v-else>快讯</span>
                     </template>
                </el-table-column>
                <el-table-column align="center" prop="order_money"  label="费用" width=""></el-table-column> 
                <el-table-column align="center" prop="release_time"  label="发布时间" width=""></el-table-column> 
                <el-table-column align="center" prop="media_name"  label="媒体名称" width=""></el-table-column>   
                <el-table-column align="center" prop="order_state" label="状态">
                    <template slot-scope="scope">
                      <span v-if="scope.row.order_state === 0" style="color:#6792F9;">已处理</span>
                      <span v-else-if="scope.row.order_state === 1" style="color:#FFDA92;">发布中</span>
                      <span v-else-if="scope.row.order_state === 2" style="color:#2D68F6;">已发布</span>
                      <span v-else-if="scope.row.order_state === 3" style="color:#FF0000;">已退稿</span>
                      <span v-else-if="scope.row.order_state === 4" style="color:#D4DAE4;">已取消</span>
                      <span v-else style="color:#E5E9F2">定时发布</span>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="fabu_site" label="回链" width=""></el-table-column> 
            </el-table>
           </div>

          <span slot="footer" class="dialog-footer">
            <el-button @click="publishAgain">再次发布</el-button>
             &nbsp;
            <el-button v-show="orderStatus === 0" type="primary" @click="repealManu">撤稿</el-button>
          </span>
        </el-dialog>
      </div>
      <!-- 支付密码对话框 -->
      <div class="payDialog">
          <el-dialog
            title="支付密码"
            :visible.sync="payDialogVisible"
            width="390px"
            center>
            <el-form :model="payData">
                <el-form-item>
                  <el-input v-model="payData.payPassword" type="password" placeholder="请输入支付密码"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="cancelPay">取 消</el-button>
              <el-button type="primary" @click="submitRepeal">确 认</el-button>
            </span>
          </el-dialog>
      </div>

        

  </div>
</template>
<script>
import orderMapper from "../../../mapper/orderMapper";
import {getToken} from '../../../libs/util'
import { fileUtil } from '../../../components/ft';
export default {
  data() {
    return {
      current: 1,
      pageSize: 10,
      total: 0, 
      tableData: [],//订单列表数据

      mediaRadio:'',//媒体类型
      dataRadio:'',//日期执行时间
      statusRadio:'',//订单状态
      // 搜索字段
      keyWord:'',
      searchDate:"",
      overTime:'',

      // 订单详情对话框数据
      orderDetailId:'',//订单详情ID
      centerDialogVisible:false,
      orderDetails:[],
      activeStep:0,
      articalId:'',
      orderStatus:'',//订单状态

      payDialogVisible:false,
       //支付密码
      payData:{},
      password:'',
      
      orderNum:'',//子订单号
    };
  },
 
  methods: {
    // 改变每页显示的条数
    handleSizeChange(val) {
        this.pageSize = val;
        this.current = 1;
        this.getOrderList();
    },
    // 改变当前页    
    handleCurrentChange(val) {
          this.current = val;
          this.getOrderList();
        }, 

    //取消密码对话框
    cancelPay(){
      this.payDialogVisible = false;
      this.payData.payPassword = '';
    },    
    
    // 导出列表
    excelOutOrderList(){
      orderMapper.outOrderList({levelCredentials:true, responseType:'blob'}).then(res=>{
         console.log(res);
         fileUtil.downLoadXls(res,'订单列表表格');
      },err=>{
      })
    },

  //点击确认按钮提交撤回订单
    submitRepeal(){
         let params = {
            payPass:this.password,
            orderNo:this.orderNum
          };
          orderMapper.revokeOrder(params).then(res=>{
            console.log(res);
            const{code, msg, error_code} = res;
            if(code === 200){
              this.$message.success(msg);
              this.getOrderList();
            }else{
                this.$alert('您的订单已经审核通过，无法执行撤稿操作', '无法撤稿', {
                center: true
              });
              this.getOrderList();
            }
            this.payData.payPassword = '';
            this.payDialogVisible = false;
          },err=>{
            this.$message('密码错误');
            this.payData.payPassword = '';
            this.payDialogVisible = false;
          })
     
    },

    //撤销稿件
    async repealManu(){
        this.centerDialogVisible = false;
       await this.$confirm('您是否确认需要进行撤稿操作?', '确认撤稿', {
          cancelButtonText: '取消',
          confirmButtonText: '确定',
          center: true
        });
        try {
           this.payDialogVisible = true;
        } catch (error) {
           
        }  
    },

    // 显示订单详情对话框
    showDetailsDialog(orderId){
      this.centerDialogVisible = true;
      this.orderDetailId = orderId;
      this.getOrderDetails();
      
    },

  //获取订单详情数据
    getOrderDetails(){
      const params = {id:this.orderDetailId};
      orderMapper.orderDetails(params).then(res=>{
        console.log(res);
        const {code, msg, data} = res;
        if(code === 200){
           this.orderDetails = [data];
           this.orderStatus = data.order_state;//订单状态
           this.articalId = data.article_id;
           this.orderNum = data.order_no;

        }else{
          this.$message.error(msg);
        }
      }, err=>{
        this.$message.error("服务器错误");
      })
    },

  //获取订单列表  
    getOrderList() {
      let param = {
        size:this.pageSize, 
        page:this.current,
        type:this.mediaRadio,//媒体类型
        status:this.statusRadio,//订单状态
        inDate:this.overTime,//搜索日期
        keyWord:this.keyWord,//关键字
      };
      orderMapper.orderList(param).then(res => {
        console.log(res);
        const {code, msg, data:{count, list}} = res;
          if (code == 200) {
            this.total = count;
            this.tableData = list;

          } else {
            this.$message.error(msg);
          }
        },
        err => {
          this.$message.error("服务器端错误");
        }
      );
    },

    //点击再次发布按钮发布并跳转
    publishAgain(){
      const params = {articleId:this.articalId};
      orderMapper.getArticle(params).then(res=>{
        console.log(res);
        const {code, data, msg} = res;
        if(code === 200){
          this.$router.push({
            path:'media',
            query:{
              medias:data,
            }
          })
        }else{
          this.$message.error(msg);
        }
      }, err=>{
        this.$message.error("服务器错误");
      })
    },

      /**
       * 
       * @param dateNow :Date类
       * @param intervalDays ：间隔天数
       * @param bolPastTime  ：Boolean,判断在参数date之前，还是之后，
       */
      getDateRange(dateNow,intervalDays,bolPastTime){
        let oneDayTime = 24 * 60 * 60 * 1000;
        let list = [];
        let lastDay;
 
        if(bolPastTime == true){
            lastDay = new Date(dateNow.getTime() - intervalDays * oneDayTime);
            list.push(this.formateDate(lastDay));
            list.push(this.formateDate(dateNow));
        }else{
            lastDay = new Date(dateNow.getTime() + intervalDays * oneDayTime);
            list.push(this.formateDate(dateNow));
            list.push(this.formateDate(lastDay));
        }
        return list;
     },
    //  格式化日期
     formateDate(time){
        let year = time.getFullYear()
        let month = time.getMonth() + 1
        let day = time.getDate()
        if (month < 10) {
          month = '0' + month
        }
        if (day < 10) {
          day = '0' + day
        }
        return year + '-' + month + '-' + day + ''
     }
   },

   watch:{
        payData: {
            // 数据变化时执行的逻辑代码
              handler(newName, oldName) {
                if(newName){
                  this.password = newName.payPassword;
                }else{
                  this.password = "";
                }
                  
              },
              // 开启深度监听
              deep: true
          },


        orderStatus(newVal, oldVal){
          if(newVal === 0){
            this.activeStep = 2;//已处理状态
          }
          if(newVal === 1){
            this.activeStep = 3;//发布中状态
          }
          if(newVal === 2){
            this.activeStep = 4;//完成状态
          }
          if(newVal === 3){
            this.activeStep = 4;//驳回
          }
          if(newVal === 4){
            this.activeStep = 4;//取消
          }
          if(newVal === 5){
            this.activeStep = 4;//定时发布
          } 
        },

        searchDate(newVal, oldVal){
            if(!newVal){
              this.overTime = null;
            }else{
              this.overTime = newVal;
            }
          },

        // 监听执行时间
        dataRadio(newVal, oldVal){
            if(newVal === ''){
              this.overTime = null;
            }
            if(newVal === '0'){// 今日
              let day2 = new Date();
              day2.setTime(day2.getTime());
              let s2 = day2.getFullYear()+"-"+ (day2.getMonth()+1) +"-"+ day2.getDate(); 
              this.overTime = [s2,s2];
            }
            if(newVal === '1'){// 昨日
              let day1 = new Date();
              day1.setTime(day1.getTime()-24*60*60*1000);
              let s1 = day1.getFullYear()+"-" + (day1.getMonth()+1) + "-" + day1.getDate();
              this.overTime = [s1,s1];
            }
            if(newVal === '2'){// 本周
              let date = new Date();
              let list = this.getDateRange(date,6,true)
              this.overTime = [list[0],list[1]];
            }
            if(newVal === '3'){// 本月
              let date = new Date();
              let list = this.getDateRange(date,30,true)
              this.overTime = [list[0],list[1]];
            }
            if(newVal === '4'){// 半年
              let date = new Date();
              let list = this.getDateRange(date,180,true)
              this.overTime = [list[0],list[1]];
            }
            if(newVal === '5'){// 半年
              let date = new Date();
              let list = this.getDateRange(date,365,true)
              this.overTime = [list[0],list[1]];
            }

          },

        },
  
   created() {
     this.$nextTick(()=>{
        this.getOrderList();
     })
  },
};
</script>
<style lang="less" scoped>
@import url("../../../style/index");
.order {
  margin: 36px;
  background: #ffffff;
  padding: 40px;
  .orderOne {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .orderTwo {
      font-size: 14px;
      color: #5e6d82;
    }
  }
  .orderThree {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .orderFour {
      width: 80px;
      font-size: 14px;
      color: #5e6d82;
    }
    .orderFive {
      width: 30px;
      color: #ff0000;
      margin-left: 10px;
      margin-right: 45px;
    }
  }
}
.orderSix {
  width: 104px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  background: rgba(255, 193, 75, 1);
  border-radius: 6px;
  color: #ffffff;
}
</style>
<style lang="less">
@import url('../../../style/pagination.less');
@import url('../../../style/breadcrumb.less');

  .order-header{
      padding-bottom: 25px;
    }
  .el-steps.el-steps--horizontal{
    padding-bottom: 52px;
    display: flex;
    justify-content: center;
    // padding-left: 95px;
    }

.orderDialog{
  .el-dialog__title{
    font-size: 24px;
    font-weight: 500;
  }
  .dialog-footer{
    .el-button{
      width: 96px;
      height: 36px;
    }
    .el-button:nth-child(2){
       background-color: #2d68f6;
    }
  }
}
.el-message-box{
  .el-message-box__title{
    font-size: 24px;
    font-weight: 500;
  }
  .el-button{
    width: 74px;
    height: 36px;
  }
  .el-button:nth-child(2){
    background-color: #2d68f6;
  }
}

.payDialog{
  .el-dialog{
    height: 200px;
    .el-dialog__body{
      padding-bottom: 0px;
    }
  }
  .el-dialog__title{
    font-size: 24px;
    font-weight: 500;
  }
  .el-dialog__footer{
    padding: 0px;
    .el-button{
      width: 74px;
      height: 36px;
    }
     .el-button:nth-child(2){
     background-color: #2d68f6;
    }
  }
}
    


.orderThree.orderManage{
.el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 30px;
  line-height: 30px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 260px;
}
.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 260px;
  margin-right: 20px;
}

.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #2d68f6;
  border: 1px solid #dcdfe6;
  color: #ffffff;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 4px 20px;
  font-size: 14px;
  border-radius: 4px;
  margin-right: 10px;
}
.el-range-editor.el-input__inner {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 3px 0px;
}
.el-date-editor--datetimerange.el-input,
.el-date-editor--datetimerange.el-input__inner {
  width: 200px;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 200px;
  margin-right: 10px;
}
.el-icon-time:before {
  content: none;
}
.el-date-editor .el-range-separator {
  padding: 0 5px;
  line-height: 21px;
  text-align: center;
  width: 80px;
  color: #303133;
}
}
.el-radio-button__inner {
  white-space: nowrap;
  background: #fff;
  border: 0 !important;
  font-weight: 500;
  border-left: 0 !important;
  border-right: 0 !important;
  color: #333333;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  position: relative;
  cursor: pointer;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 0;
}

.el-radio-button:active {
  border: none !important;
}
.el-radio-button__orig-radio:checked + .el-radio-button__inner {
  color: #409eff;
  background-color: #ffffff;
  border: none !important;
  -webkit-box-shadow: -1px 0 0 0 #409eff;
  box-shadow: -1px 0 0 0 #409eff;
  border-left: 0 !important;
}
.el-radio-button .is-active {
  border: 0px solid #ffffff !important;
}


.tableOrder {
  .el-table td,
  .el-table th {
    padding: 5px 0;
    min-width: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    text-align: center;
  }
}
</style>
