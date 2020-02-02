<!--
 * @Author: your name
 * @Date: 2019-12-17 20:33:56
 * @LastEditTime : 2019-12-30 20:59:59
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\views\manage\generalize\popularize.vue
 -->

<template>
<!-- 面包屑导航部分 -->
    <div class="popularize">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>当前位置:  </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>推广发布</el-breadcrumb-item>
            <el-breadcrumb-item><span class="t-text">奖励明细</span></el-breadcrumb-item>
        </el-breadcrumb>
<!-- 推广明细链接 -->

 <!-- 任务列表 -->
        <div class="popularize-list">
            <div class="popularize-header">
                <span>奖励明细</span>
            </div>
           
            <el-table stripe :data="rewardList" style="width: 100%" :header-cell-style="{background:'#E5E9F2'}">
                <el-table-column align="center" type="index" :index="indexMethod" label="序号" width="85"></el-table-column>
                <el-table-column align="center" label="完成时间" width="300">
                    <template slot-scope="scope">
                       {{scope.row.end_time | timeFilter}}
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="title" label="文章标题" width="346"></el-table-column>
                <el-table-column align="center" prop="username"  label="用户" width="260"></el-table-column>    
                <el-table-column align="center" prop="reward"  label="奖励" width="261">
                     <template slot-scope="scope">
                          <!-- <span>{{scope.row.reward}}<span style="color:red; font-size:12px;">MET</span></b> -->
                          <b>{{scope.row.reward}}<b style="color:red">&nbsp;MET</b></b>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="次数">
                    <template slot-scope="scope">
                         {{scope.row.sort}}/{{scope.row.num_top}}
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
import taskMapper from '../../../mapper/taskMapper';

export default {
    data() {
      return {
        //    分页数据
       current: 1,
       pageSize: 10,
       total: 0,  
       rewardList:[],
      }
    },
    filters:{
        
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
                this.getRewardList();
            },
        // 改变当前页    
        handleCurrentChange(val) {
                this.current = val;
                this.getRewardList();
            },

        // 获取奖励明细列表数据
        getRewardList(){
             const params = {size:this.pageSize, page:this.current}
              taskMapper.getReward(params).then(res=>{
                // console.log(res)
                const {code, data:{list:{count}}, data:{list:{list}}} = res;
                this.rewardList = list;
                this.total = count;
             })    
        },
    },
    created(){
        this.getRewardList();
    }

}
</script>
<style lang="less" scoped>
@import url("../../../style/index");
    .popularize{
        background: #ffffff;
        padding: 40px 30px;
        .popularize-search{
            // width:100%;
            display: flex;
            justify-content:center;
            padding-right: 20px;
            margin-top: 36px;
            padding: 50px;
            height: 240px;
            width:100%;
            // background-color: #6792F9;
            .as-left{
                margin-top:43px;
                img{
                    width: 244px;
                    height: 160px;
                }
            }
            /deep/.as-right{
                margin-top: 60px;
                margin-left: 96px;
                .top{
                    p{
                        font-size:16px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(51,51,51,1);
                        }
                    }
                .el-button{
                    margin-left:90px;
                    margin-top: 20px;
                }
                 }
        }
        .popularize-list{
            span{
                display: block;
                // width:80px;
                height:21px;
                font-size:20px;
                font-family:PingFangSC-Medium,PingFang SC;
                font-weight:500;
                color:rgba(51,51,51,1);
                line-height:21px;
                margin-bottom: 24px;
                float: left;
            }
            padding: 40px;
            // 分页样式
            .pagination {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                .paginationOne {
                    width: 2vw;
                    margin-right: 10px;
                    }
                }
            .popularize-header-right{
                float: right;
            }
        }
}
</style>

<style lang="less">
@import url('../../../style/pagination.less');
@import url('../../../style/breadcrumb.less');
</style>