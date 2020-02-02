<!--
 * @Author: your name
 * @Date: 2019-12-19 15:35:24
 * @LastEditTime : 2020-01-11 16:35:35
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\views\manage\finance\capital.vue
 -->
<template>
    <div class="capital" >
         <!-- 面包屑导航部分 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>当前位置:  </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>财务管理</el-breadcrumb-item>
            <el-breadcrumb-item><span class="t-text">资金明细</span></el-breadcrumb-item>
        </el-breadcrumb>

          
        <div class="capital-content">
               <!-- 查询输入框 -->
            <div class="capital-search">
                 <el-form :inline="true" :model="capitaldetails" class="demo-form-inline">
                    <el-form-item label="订单号：" prop="orderId">
                        <el-input v-model="capitaldetails.orderId" placeholder="请输入订单号"></el-input>
                    </el-form-item>
                    <el-form-item label="时间：" class="dc-time" prop="data">
                        <el-date-picker unlink-panels v-model="capitaldetails.data" type="daterange" range-separator="-"  start-placeholder="开始日期"
                            end-placeholder="结束日期" value-format="yyyy-MM-dd"> </el-date-picker>
                    </el-form-item>{{capitaldetails.data}}
                    <el-form-item>
                        <el-button type="primary" @click="getCapitalList" class="search-button">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>

             <!-- 资金明细列表 -->
            <div class="capital-list">
                <div class="capital-header">
                    <span class="list-title">资金明细</span>
                </div>
                <el-table stripe :data="capitalData" style="width: 100%" :header-cell-style="{background:'#E5E9F2'}">
                    <el-table-column align="center" type="index" :index="indexMethod" label="序号" width="85"></el-table-column>
                    <el-table-column align="center" prop="order_no" label="订单编号" width="360"></el-table-column>
                    <el-table-column align="center" prop="create_time" label="时间" width="380"></el-table-column>
                    <el-table-column align="center" prop="classes" label="类型" width="360">
                         <template slot-scope="scope">
                            <b v-if="scope.row.classes === 1">发文章</b>
                            <b v-else-if="scope.row.classes === 2">撤销</b>
                            <b v-else-if="scope.row.classes === 3">退回</b>
                            <b v-else-if="scope.row.classes === 4">返利</b>
                            <b v-else-if="scope.row.classes === 5">结算</b>
                            <b v-else-if="scope.row.classes === 6">推广</b>
                            <b v-else-if="scope.row.classes === 7">充值</b>
                            <b v-else-if="scope.row.classes === 8">推广奖励</b>
                            <b v-else>提现</b>
                         </template>
                    </el-table-column>    
                    <el-table-column align="center" prop="money"  label="金额">
                       <template slot-scope="scope">
                         <b v-if="scope.row.money >= 0"><b style="color:red;">{{scope.row.money}}</b>&nbsp;MET</b>
                         <b v-else><b style="color:#81DECC;">{{scope.row.money}}</b>&nbsp;MET</b>
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
    </div>
</template>

<script>
import financeMapper from '../../../mapper/financeMapper';
export default {
    data(){
        return{
        //分页数据
        current: 1,
        pageSize: 10,
        total: 0,   
        capitalData: [],
        capitaldetails: {
           orderId: '',
           data:''
        },
        timeSelect:'',
       
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
            this.getCapitalList();
            },
        // 改变当前页    
        handleCurrentChange(val) {
            this.current = val;
            this.getCapitalList();
            },
             
        // 获取资金明细列表
        getCapitalList(){
            const params = {
                size:this.pageSize, 
                page:this.current,
                keyWord: this.capitaldetails.orderId,
                inDate:this.capitaldetails.data,
                // inDate:this.chooseTime
                };
             financeMapper.getCapital(params).then(res=>{
                console.log(res);
                const{code, data:{count,list}} =  res;
                if(code === 200){
                    this.total = count;
                    this.capitalData = list;
                }
            }, err=>{
                 
            })
        }    
        
    },
    computed:{
        chooseTime(){
            // if(!this.capitaldetails.data){
            //     return '';
            // }else{
            //     return this.capitaldetails.data;
            // }
        }
    },
    created(){
        this.getCapitalList();
    }
}
</script>

<style lang="less" scoped>
 @import url("../../../style/index");
    .capital{
         background: #ffffff;
        .capital-content{
            padding: 40px;
            padding-top:75px;
            .dc-time{
                margin-left: 25px;
            }
            .capital-list{
                margin-top:45px;
                .capital-header{
                    margin-bottom: 30px;
                }
            }
        }
    }
</style>

<style lang="less">
@import url('../../../style/pagination.less');
@import url('../../../style/breadcrumb.less');
     .search-button.el-button{
            width:100px;
            background-color: #2D68F6;
            height: 28px;
            line-height: 4px;
            margin-left: 15px;
            text-align: center;
            }
      .capital-search{
          .el-form-item__label{
              line-height: 28px;
          }
          .el-form-item__content{
              line-height: 28px;
            .el-input .el-input__inner{
                width: 160px;
                height: 28px;  
            }  
          }    
      } 
    .dc-time .el-form-item__content{
        //  line-height: 33px;
        .el-date-editor{
            width: 240px;
            height: 28px;
           .el-input__icon{
               line-height: 28px;
           }
        }
    } 
    
</style>