<!--
 * @Author: your name
 * @Date: 2019-12-17 20:33:56
 * @LastEditTime: 2019-12-20 18:49:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\views\manage\generalize\popularize.vue
 -->
<!--
 * @Author: your name
 * @Date: 2019-12-17 16:54:00
 * @LastEditTime: 2019-12-17 19:14:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\views\manage\generalize\popularize.vue
 -->
<template>
  <!-- 面包屑导航部分 -->
  <div class="popularize">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>当前位置:</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>我要推广</el-breadcrumb-item>
      <el-breadcrumb-item>
        <span class="t-text">推广明细</span>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 推广明细链接 -->
    <div class="popularize-search">
      <div class="as-left">
        <img src="../../../assets/home/popularize.png" alt />
      </div>
      <div class="as-right">
        <div class="top ">
          <p class="mb20">您的推广链接：</p>
          <span>
            <!-- <a href="https://www.moyinqing.com/aff=djsio903">{{promoteLink}}</a> -->
            <b class="mg-b-blue">{{ promoteLink }}</b>
          </span>
        </div>
        <p class="copyBig ">
          <ft-copy
            :mes="promoteLink"
            @success="success"
            class="ml10 pr40 pl40 copy"
          >
          </ft-copy>
          <span class="copyfont">复制</span>
        </p>
        <!-- <b class="mg-b-blue">{{ user.inviteCode }}</b> -->
      </div>
    </div>

    <!-- 任务列表 -->
    <div class="popularize-list">
      <div class="popularize-header">
        <span>推广明细</span>
      </div>

      <el-table
        stripe
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{ background: '#E5E9F2' }"
      >
        <el-table-column
          align="center"
          type="index"
          label="序号"
          width="85"
          :index="indexMethod"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="create_time"
          label="注册时间"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="username"
          label="用户"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="会员等级"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="count"
          label="发稿次数"
        ></el-table-column>
        <el-table-column align="center" prop="amount" label="发稿总花费">
          <template slot-scope="scope">
            <b
              ><b style="color:red;">{{ scope.row.amount }}</b
              >&nbsp;MET</b
            >
          </template>
        </el-table-column>
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
import generalizeMapper from "../../../mapper/generalizeMapper";
export default {
  data() {
    return {
      tableData: [],
      current: 1,
      pageSize: 10,
      total: 0,
      promoteLink: "http://47.106.172.81:7796//#/regist?invite_code=" //推广链接
    };
  },
  created() {
    this.getTable();
  },
  methods: {
    getTable() {
      let param = { size: this.pageSize, page: this.current };
      generalizeMapper.getExtensionDetail(param).then(
        res => {
          if (res.code == 200) {
            this.tableData = res.data.list.items;
            this.total = res.data.list.total;
            this.promoteLink = this.promoteLink + res.invite_code;
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
    success() {
      this.$message({
        message: "复制成功",
        type: "success"
      });
    }
  }
};
</script>

<style></style>
<style lang="less" scoped>
@import url("../../../style/index");
.popularize {
  background: #ffffff;
  padding: 40px 30px;
  .t-text {
    color: #6792f9;
  }
  .popularize-search {
    // width:100%;
    display: flex;
    justify-content: center;
    padding-right: 20px;
    margin-top: 36px;
    padding: 50px;
    height: 240px;
    width: 100%;
    // background-color: #6792F9;
    .as-left {
      margin-top: 43px;
      img {
        width: 244px;
        height: 160px;
      }
    }
    /deep/.as-right {
      margin-top: 60px;
      margin-left: 96px;
      .top {
        p {
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
        }
      }
      .el-button {
        margin-left: 80px;
        margin-top: 20px;
        background-color: #2d68f6;
        width: 108px;
        height: 38px;
      }
    }
  }
  .popularize-list {
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
    .popularize-header-right {
      float: right;
    }
  }
}
.copyBig {
  position: relative;
  .copy {
    width: 104px;
    height: 30px;
    background: rgba(45, 104, 246, 1);
    border-radius: 3px;
    padding: 5px 20px;
    color: #ffffff;
    margin-top: 20px;
  }
  .copyfont {
    color: #ffffff;
    position: absolute;
    top: 5px;
    left: 45px;
  }
}
</style>
