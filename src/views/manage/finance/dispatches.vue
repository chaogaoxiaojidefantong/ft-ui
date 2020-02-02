<!--
 * @Author: your name
 * @Date: 2019-12-19 15:33:19
 * @LastEditTime : 2020-01-16 09:47:27
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\views\manage\finance\dispatches.vue
 -->
<template>
    <div class="dispatches">
        <!-- 面包屑导航部分 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>当前位置:  </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>财务管理</el-breadcrumb-item>
            <el-breadcrumb-item><span class="t-text">发稿明细</span></el-breadcrumb-item>
        </el-breadcrumb>

        
        <div class="dispatch-contents">
           
              <!-- 查询输入框 -->
            <div class="dc-search">
                 <el-form :inline="true" :model="searchArticalData" class="demo-form-inline">
                    <el-form-item label="媒体类型：" class="media-type" >
                         <div class="orderOne">
                            <el-radio-group v-model="mediaRadio" fill="#ffffff" @change="getDispathList">
                                <el-radio-button label="">全部</el-radio-button>
                                <el-radio-button label="1">主流媒体</el-radio-button>
                                <el-radio-button label="2">自媒体</el-radio-button>
                                <el-radio-button label="3">区块链媒体</el-radio-button>
                                <el-radio-button label="4">快讯</el-radio-button>
                            </el-radio-group>
                        </div>
                    </el-form-item>
                    <br>
                    <el-form-item label="订单号：">
                        <el-input v-model="searchArticalData.order_no" placeholder="请输入订单号"></el-input>
                    </el-form-item>   
                    <el-form-item label="时间：" class="dc-time">
                        <el-date-picker unlink-panels v-model="searchArticalData.date" type="daterange" range-separator="-"  start-placeholder="开始日期"
                            end-placeholder="结束日期" value-format="yyyy-MM-dd"> </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="getDispathList" class="search-button">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-divider class="cut-off"></el-divider>
        </div>

       <!-- 发稿明细列表 -->
        <div class="dispatches-list">
            <div class="dispatches-header">
                <span class="list-title">发稿明细</span>
            </div>
            <el-table :default-sort = "{prop: 'zip', order: 'descending'}" stripe :data="dispatchList" style="width: 100%" :header-cell-style="{background:'#E5E9F2'}">
                <el-table-column align="center" type="index" :index="indexMethod" label="序号" width="85"></el-table-column>
                <el-table-column align="center" prop="order_no" label="订单编号" width="220"></el-table-column>
                <el-table-column align="center" prop="create_time" label="创建时间" width="180"></el-table-column>
                <el-table-column align="center" prop="order_id"  label="稿件订单号" width="220"></el-table-column>    
                <el-table-column align="center" prop="media_name"  label="发稿类型" ></el-table-column>
                <el-table-column align="center" prop="title"  label="文章标题" ></el-table-column>
                <el-table-column align="center" prop="money"  label="费用"  sortable>
                    <template slot-scope="scope">
                         <span v-if="scope.row.classes === 1"><span style="color:#85DFCD">{{scope.row.money}}&nbsp;</span>MET</span>
                         <span v-else><span style="color:red">{{scope.row.money}}&nbsp;</span>MET</span>
                    </template>    
                </el-table-column>
                <el-table-column align="center" prop="classes"  label="类型">
                     <template slot-scope="scope">
                            <span v-if="scope.row.classes === 1">发稿</span>
                            <span v-else-if="scope.row.classes === 2" style="color:red;">撤销</span>
                            <span v-else-if="scope.row.classes === 3" style="color:#FFCD6E;">退回</span>
                            <span v-else-if="scope.row.classes === 4" style="color:red;">返利</span>
                            <span v-else-if="scope.row.classes === 5" style="color:red;">结算</span>
                            <span v-else-if="scope.row.classes === 2" style="color:red;">推广</span>
                            <span v-else style="color:#E5E9F2">充值</span>
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
const mediaOptions = ['传统媒体', '自媒体', '区块链媒体', '快讯'];
const mediasChoose = [1,2,3,4];
import financeMapper from '../../../mapper/financeMapper';
export default {
     data() {
      return {
      //分页数据
       current: 1,
       pageSize: 10,
       total: 0,   
       dispatchList: [],
       mediaRadio:'',
       searchArticalData: {  
          order_no: '',
          date: ''
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
            this.getDispathList();
            },
        // 改变当前页    
        handleCurrentChange(val) {
            this.current = val;
            this.getDispathList();
            },


        // 获取发稿明细列表
        getDispathList(){
            const params = {
                size: this.pageSize, 
                page: this.current, 
                inDate: this.searchArticalData.date,
                keyWord:this.searchArticalData.order_no, 
                mediaType:this.mediaRadio,
                };
            financeMapper.getDispatch(params).then(res=>{
                
                console.log(res);
                const{code, data:{count}, data:{list}} = res;
                if(code === 200){
                     this.total = count;
                     this.dispatchList = list;
                }
            },err=>{
                 
                console.log(err);
            })
        },
    },
    computed:{
        mediaTypes(){
          return this.searchArticalData.checkedMedia.join();
        },
      
    },
    watch:{
      
    },
    created(){
        this.getDispathList();
    }
}
</script>


<style lang="less" scoped>
@import url("../../../style/index");
    .dispatches{
        background: #ffffff;
        .dispatch-contents{
            padding:36px;
            .dc-search{
                padding: 20px;
                .dc-time{
                    padding-left:35px;
                }  
            }
            .cut-off{
                margin-top: 0px;
                margin-bottom: 0px;
            }

        }
        .dispatches-header{
            margin-bottom: 25px;
        }
        .dispatches-list{
            padding: 55px;
            padding-top: 0px;
    }
}
</style>

<style lang="less">
@import url('../../../style/pagination.less');
@import url('../../../style/breadcrumb.less');
.dispatch-contents{
     .search-button.el-button{
            width:100px;
            background-color: #2D68F6;
            height: 28px;
            line-height: 4px;
            margin-left: 15px;
            text-align: center;
            letter-spacing: 10px;
            }
    .dc-search{
        .el-input .el-input__inner{
        width: 160px;
        height: 28px;
        font-size: 5px;
        }
        .orderOne {
        display: flex;
        justify-content: flex-start;
        align-items: center;
       
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
            padding: 13px 10px;
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

      
    } 
    .dc-time .el-form-item__content{
        //  line-height: 43px;
        .el-date-editor{
            width: 290px;
            height: 28px;
           .el-input__icon{
               line-height: 20px;
               margin-left: 3px;
           }
        }
    } 
}
</style>