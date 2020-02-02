<!--
 * @Author: your name
 * @Date: 2019-12-17 20:33:56
 * @LastEditTime : 2019-12-30 19:52:52
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\views\manage\generalize\releaseList.vue
 -->

<template>
<!-- 面包屑导航部分 -->
    <div class="releaseList">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>当前位置:  </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>推广发布</el-breadcrumb-item>
            <el-breadcrumb-item><span class="t-text">发布列表</span></el-breadcrumb-item>
        </el-breadcrumb>

<!-- 马上发布按钮 -->
    <div class="releaseList-search">
        <div class="as-left">
            <img src="../../../assets/home/task.png" alt="">
        </div>
        <div class="as-right">
            <div class="top">
                <p>想让更多人看到你的文章，发布任务提升曝光率吧</p>
            </div>
            <el-button type="primary" @click="$router.push('releaseTask')">马上发布</el-button>
        </div>
    </div>

 <!-- 任务列表 -->
        <div class="releaseList-list">
            <div class="releaseList-header">
                <span>任务列表</span>
            </div>
           
            <el-table align="center" stripe :data="taskList" style="width: 100%" :header-cell-style="{background:'#E5E9F2'}">
                <el-table-column align="center" type="index" :index="indexMethod" label="序号" width="85"></el-table-column>
                <el-table-column align="center" prop="order_id" label="订单编号" width="180"></el-table-column>
                <el-table-column align="center" prop="create_time"  label="创建时间" width="260"></el-table-column>    
                <el-table-column align="center" prop="title"  label="文章标题" width="260"></el-table-column>
                <el-table-column align="center" label="有效期" width="260">
                    <template slot-scope="scope">
                       {{scope.row.start_time | dateFilter }} - {{scope.row.end_time | dateFilter }}
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="reward" label="总奖励" width="180">
                    <template slot-scope="scope">
                        <b><b style="color:red; font-size:12px;">{{scope.row.reward}}</b>&nbsp;MET</b>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="have_reward"  label="已领取" width="160">
                     <template slot-scope="scope">
                         <b><b style="color:red;">{{scope.row.have_reward}}</b>&nbsp;MET</b>
                    </template>
                </el-table-column>
                <el-table-column align="center"  label="状态" width="140" > 
                    <template slot-scope="scope">
                         <!-- {{ scope.row.status === 1 ? "进行中" : "已终止" }} --> 
                            <b v-if="scope.row.status === 1" style="color:#6792F9;">进行中</b>
                            <b v-else-if="scope.row.status === 2" style="color:red;">终止</b>
                            <b v-else style="color:#E5E9F2">已完成</b>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="every_reward"  label="奖励比例" width="180">
                     <template slot-scope="scope">
                        <b><b style="color:red;">{{scope.row.every_reward}}</b>&nbsp;MET/次</b>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="操作" >
                    <template slot-scope="scope">
                        <a  
                        @click.prevent="stopTaskMessage(scope.row.id)"
                        size="small"
                        >
                         <b v-if="scope.row.status === 1" style="color:#6792F9;">终止任务</b>
                         <b v-else-if="scope.row.status === 2" style="color:red;">已终止</b>
                         <b v-else style="color:#E5E9F2">终止任务</b>
                        </a>
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
       taskList: [],
      }
    },

   methods: {
    //    序号排列
        indexMethod(index) {
             return (this.current - 1) * this.pageSize + index + 1;
        },
    // 获取推广发布任务列表数据
        getTaskList(){
             const params = {size:this.pageSize, page:this.current}
             this.getTasks(params).then(res=>{
                // console.log(res)
                this.taskList = res.list;
                this.total = res.count;
             })    
        },
        // 改变每页显示的条数
         handleSizeChange(val) {
                this.pageSize = val;
                this.current = 1;
                this.getTaskList();
            },
        // 改变当前页    
        handleCurrentChange(val) {
                this.current = val;
                this.getTaskList();
            },

        // 终止任务消息弹出框  
        async stopTaskMessage(taskId){
           await this.$confirm('终止任务后将不可再恢复或重新激活该任务，是否确认终止本任务，终止后将退回剩余MET到余额中。',
            '确认操作', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            center: true
            });
            this.stopTasks(taskId);  
        }, 
        // 终止任务     
        stopTasks(id){
            const params = {task_id: id};
            taskMapper.abortTasks(params).then(res=>{
                //  console.log(res);
                const {code, msg} = res;
                if(code === 200){
                   this.getTaskList();
                   this.$message.success(msg);
                }
            }, err=>{
                const {code, msg} = err;
                this.$message.error(msg);
            })
        }
       
    },
    created(){
        this.getTaskList();
    }

}
</script>


<style lang="less" scoped>
@import url("../../../style/index");
    .releaseList{
        background: #ffffff;
        padding: 40px 30px;
        .t-text{
            color:#6792F9;
        }
        .releaseList-search{
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
                margin-top: 70px;
                margin-left: 66px;
                .top{
                    p{
                        font-size:16px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(51,51,51,1);
                        }
                    }
                .el-button{
                    margin-left:130px;
                    margin-top: 20px;
                    background-color: #2D68F6;
                    width: 108px;
                    height: 38px;
                    text-align: center;
                }
                 }
        }
        .releaseList-list{
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
        }
}
</style>

<style lang="less">
@import url('../../../style/pagination.less');
@import url('../../../style/breadcrumb.less');
.el-message-box__title{
    font-size: 22px;
    font-weight: 600;
   }   
</style>