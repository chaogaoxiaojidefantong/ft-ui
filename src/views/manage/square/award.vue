<!--
 * @Author: your name
 * @Date: 2019-12-17 20:34:31
 * @LastEditTime : 2020-01-13 11:57:19
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \engine_vuenew\src\views\manage\generalize\rebate.vue
 -->
<template>
  <!-- 面包屑导航部分 -->
  <div class="rebate">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>当前位置: </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>我要推广</el-breadcrumb-item>
      <el-breadcrumb-item
        ><span class="t-text">发稿返利</span></el-breadcrumb-item
      >
    </el-breadcrumb>

    <!-- 图片和搜索明细 -->
    <div class="rebate-search">
      <div class="as-left">
        <img src="../../../assets/home/feedback.png" alt="" />
      </div>
      <div class="as-rightSearch">
        <el-form ref="form" :model="form" label-width="111px">
          <el-form-item label="" style="width:463px;">
            <el-input
              placeholder="请输入关键词搜索"
              prefix-icon="el-icon-search"
              v-model="form.inputVal"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="240px">
            <el-button type="primary" @click="search">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!-- 任务列表 -->
    <div class="rebate-list">
      <div class="rebate-header">
        <span>发稿返利</span>
        <div class="rebate-header-right">
          <span>奖励总计：</span>
          <span><b style="color:red">{{rebatesTotal }}</b>&nbsp;MET</span>
        </div>
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
          :index="indexMethod"
          label="序号"
          width="85"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="create_time"
          label="完成时间"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="title"
          label="文章标题"
          width="300px"
        ></el-table-column>
        <el-table-column align="center" prop="have_reward" label="奖励">
           <template slot-scope="scope">
               <b style="color:red">{{scope.row.have_reward}}</b>&nbsp;MET
           </template>   
        </el-table-column>
        <el-table-column align="center" prop="username" label="剩余次数" >
            <template slot-scope="scope">
               <b>{{scope.row.sort}} / {{scope.row.num_top}}</b>
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
import taskMapper from "../../../mapper/taskMapper"
export default {
  data() {
    return {
      
      tableData: [],
      current: 1,
      pageSize: 10,
      total: 0,
      rebatesTotal:0,
      form: {
        inputVal:''
        }
    };
  },
  created() {
    let param = { size: this.pageSize, page: this.current }
    this.getTable(param);
  },
  methods: {
    getTable(param) {
      taskMapper.getReward(param).then(
        res => {
            console.log(res);
            const {code, data:{list:{total, list, count}}} = res;
          if (code == 200) {
            this.tableData = list;
            this.total = count;
            this.rebatesTotal = total;
            
          } else {
            this.$message.error("请求失败");
          }
        },
        err => {
          this.$message.error("服务器错误");
        }
      );
    },
    // 改变每页显示的条数
    handleSizeChange(val) {
      let param = { size: val, page: this.current,key:this.form.inputVal}
      this.getTable(param);
    },
    // 改变当前页
    handleCurrentChange(val) {
      let param = { size: this.pageSize, page: val,key:this.form.inputVal }
      this.getTable(param);
    },
    //序号
    indexMethod(index) {
      return (this.current - 1) * this.pageSize + index + 1;
    },
    search(){
      let param ={key:this.form.inputVal,size: this.pageSize, page: this.current}
      this.getTable(param);
       
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../../style/index");
.rebate {
  background: #ffffff;
  padding: 40px 30px;
  .t-text {
    color: #6792f9;
  }
  .rebate-search {
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
  }
  .rebate-list {
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
    .rebate-header-right {
      float: right;
    }
  }
}
</style>

<style lang="less">
.as-rightSearch {
  margin-top: 96px;
  .el-input__inner {
    border-radius: 4px;
    border: 1px solid rgba(192, 204, 218, 1);
    height: 36px;
    width: 352px;
  }
  .el-button {
    background-color: #2d68f6;
    width: 108px;
    height: 38px;
    text-align: center;
  }
}
</style>
