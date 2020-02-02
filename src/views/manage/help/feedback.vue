<!--
 * @Author: your name
 * @Date: 2019-12-17 21:09:34
 * @LastEditTime : 2019-12-22 14:28:12
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\views\manage\help\feedback.vue
 -->
<template>

    <div class="feedback">
<!-- 面包屑导航部分 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>当前位置:  </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>帮助中心</el-breadcrumb-item>
            <el-breadcrumb-item><span class="t-text">问题反馈</span></el-breadcrumb-item>
        </el-breadcrumb>

<!-- 提交意见反馈 -->
    <div class="feedback-submit">
        <div class="fs-top">
            <span>问题反馈</span>
        </div>
       
        <div class="fs-bottom">
            <el-form ref="feedbackData" :model="feedbackData" label-width="80px">
                <el-form-item label="问题类型"> 
                    <el-select v-model="feedbackData.region" placeholder="请选择问题类型" style="width:935px">
                        <el-option label="发稿" value="1"></el-option>
                        <el-option label="媒体渠道" value="2"></el-option>
                        <el-option label="充值" value="3"></el-option>
                        <el-option label="推广" value="4"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="内容" style="width:1016px;" class="contentItem">
                    <el-input :rows="4" type="textarea" v-model="feedbackData.desc"></el-input>
                </el-form-item>
                <el-form-item label-width="0px" style="margin-top:48px;">
                    <el-button type="primary" @click="onSubmit" style="color:'#2D68F6FF'">提交反馈</el-button>  
                </el-form-item>
            </el-form>
        </div>
    </div>

 <!-- 意见反馈列表 -->
        <div class="feedback-list">
            <div class="feedback-header">
                <span>意见反馈列表</span>
            </div>
           
            <el-table stripe :data="tableData" style="width: 100%" :header-cell-style="{background:'#E5E9F2'}">
                <el-table-column align="center" type="index" :index="indexMethod" label="序号" width="85"></el-table-column>
                <el-table-column align="center" prop="create_time" label="反馈时间" ></el-table-column>
                <el-table-column align="center" prop="type" label="反馈类型" ></el-table-column>
                <el-table-column align="center" prop="content"  label="内容" ></el-table-column>    
                <el-table-column align="center" prop="return_time"  label="回复时间" ></el-table-column>
                <el-table-column align="center" prop="return_content"  label="回复内容"></el-table-column>
              
            </el-table>

            <!-- 分页功能 -->
            <div justifyContent="space-between" class="mt30 pagination">
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
import helpmapper from "../../../mapper/helpmapper";
export default {
  data() {
    return {
      tableData: [],
      current: 1,
      pageSize: 10,
      total: 0,
      feedbackData: {
          region: '',
          desc: ''
        }
    };
  },
  created() {
    this.getTable();
  },
  methods: {
    getTable() {
      let param = { size: this.pageSize, page: this.current };
      helpmapper.getFeedback(param).then(
        res => {
          if (res.code == 200) {
            // this.successNotify(res.msg);
            this.tableData = res.data.list.list
            this.total = res.data.list.count;
          } else {
            this.$message.error(res.msg);
          }
        },
        err => {
          this.$message.error(err.msg);
        }
      );
    },
    // 改变每页显示的条数
    handleSizeChange(val) {
      this.pageSize = val;
      this.current = 1;
      this.getTable();
    },
    // 改变当前页
    handleCurrentChange(val) {
      this.current = val;
      this.getTable();
    },
    //序号
    indexMethod(index) {
      return (this.current - 1) * this.pageSize + index + 1;
    },
    onSubmit(){
        if(this.feedbackData.region == '' ){
           return this.$message('请选择类型')
        }
         if(this.feedbackData.desc == '' ){
           return this.$message('请填写内容')
        }
        let param = {type:this.feedbackData.region,content:this.feedbackData.desc};
      helpmapper.addFeedback(param).then(
        res => {
          if (res.code == 200) {
            this.successNotify(res.msg);
            
          } else {
            this.$message.error(res.msg);
          }
        },
        err => {
          this.$message.error(err.msg);
        }
      );
    }
  }
};
</script>

<style lang="less">
   .feedback-submit{
       .el-form-item{
           .el-form-item__label{
            line-height: 28px;
           }
           .el-input{
               line-height: 36px;
               height: 36px;
               width: 935px;
           }
       }
       .contentItem{
           .el-form-item__label{
               letter-spacing: 15px;
           }
           .el-form-item__content{
               .el-textarea{
                    width: 935px;
               }
           }
       }
       .el-button{
           background-color: #2D68F6;
           width: 104px;
           height: 38px;
           border-radius: 5px;
           text-align: center;
       }
   }
</style>

<style lang="less" scoped>
@import url("../../../style/index");
.feedback{
    background: #fff;
    .t-text{
        color:#6792F9;
    }
    .feedback-submit{
        padding: 76px;
        padding-bottom: 30px;
        // height: 397px;
        width:100%;
        .fs-top{
            span{
                width:80px;
                height:21px;
                font-size:20px;
                font-family:PingFangSC-Medium,PingFang SC;
                font-weight:500;
                color:rgba(51,51,51,1);
                line-height:21px;
                display: block;
        }
    }
    .fs-bottom{
        width:100%;
        margin-top: 40px;
    }    
}

.feedback-list{
    span{
        display: block;
        font-size:20px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
        // line-height:21px;
        margin-bottom: 24px;
        float: left;
    }
    padding: 76px;
    padding-top: 0px;
    // margin-top: 0px;
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
    .feedback-header-right{
        float: right;
    }
}
}
</style>