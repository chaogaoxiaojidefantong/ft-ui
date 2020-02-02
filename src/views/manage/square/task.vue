<!--
 * @Author: your name
 * @Date: 2019-12-17 14:20:54
 * @LastEditTime : 2020-01-12 16:58:36
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\views\manage\generalize\task.vue
 -->
<template>
  <!-- 面包屑导航部分 -->
  <div class="task">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>当前位置:</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>推广广场</el-breadcrumb-item>
      <el-breadcrumb-item>
        <span class="t-text">任务列表</span>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 任务列表 -->
    <div class="task-list">
      <span>任务列表</span>
      <el-table
        stripe
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{ background: '#E5E9F2' }"
      >
        <el-table-column align="center" type="index" :index="indexMethod" label="序号" width="85"></el-table-column>
        <el-table-column align="center" prop="create_time" label="创建时间" width="160"></el-table-column>
        <el-table-column align="center" prop="title" label="文章标题" width="200" :show-overflow-tooltip='true'></el-table-column>
        <el-table-column align="center" label="有效期" width="200">
          <template
            slot-scope="scope"
          >{{scope.row.start_time | dateFilter }} - {{scope.row.end_time | dateFilter }}</template>
        </el-table-column>
        <el-table-column align="center" prop="reward" label="总奖励" width="139"></el-table-column>
        <el-table-column align="center" prop="have_reward" label="已领取" width="139"></el-table-column>
        <el-table-column align="center"  label="状态" width="80">
           <template slot-scope="scope">
                         <!-- {{ scope.row.status === 1 ? "进行中" : "已终止" }} --> 
                            <b v-if="scope.row.status === 1" style="color:#6792F9;">进行中</b>
                            <b v-else-if="scope.row.status === 2" style="color:red;">终止</b>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="奖励比例" width="220">
            <template slot-scope="scope">
                         {{scope.row.every_reward}}MET /次
                    </template>
        </el-table-column>
        <el-table-column align="center"  label="推广地址" >
             <template slot-scope="scope">
                    <p v-if="scope.row.fabu_site === null ||  scope.row.fabu_site === ''">{{promote}}{{scope.row.article_id}}{{task_id}}{{scope.row.id}}{{user_id}}{{loginUserId}}</p>
                    <p v-if="scope.row.fabu_site != '' && scope.row.fabu_site != null">{{scope.row.fabu_site}}{{task_id}}{{scope.row.id}}{{user_id}}{{loginUserId}}</p>
            </template>
        </el-table-column>
      </el-table>

      <!-- 分页功能 -->
      <div justifyContent="space-between" class="mt30 pagination">
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
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import taskMapper from "../../../mapper/taskMapper";
export default {
  data() {
    return {
      tableData: [],
      current: 1,
      pageSize: 10,
      total: 0,
      promote:'http://47.106.172.81:7796/#/alertsDetail?id=',
      task_id:'&task_id=',
      user_id:'&user_id=',
      loginUserId:''
    };
  },
  created() {
    this.getTable();
  },
  methods: {
    getTable() {
      this.loginUserId = localStorage.getItem('id');
      let param = { size: this.pageSize, page: this.current };
      taskMapper.getTasks(param).then(
        res => {
          if (res.code == 200) {
            this.tableData = res.data.list.list;
            this.total = res.data.list.count ;
            
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
    }
  }
};
</script>

<style></style>
<style lang="less" scoped>
@import url("../../../style/index");
.task {
  background: #ffffff;
  padding: 40px 30px;
  .t-text {
    color: #6792f9;
  }
  .task-list {
    span {
      display: block;
      // width:80px;
      height: 21px;
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 21px;
      margin-bottom: 24px;
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
  }
}
</style>
