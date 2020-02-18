<template>
  <div class="calc1">
    <ft-p1>FtCopy 复制功能</ft-p1>
    <ft-p5>用于充当复制按钮的功能</ft-p5>
    <ft-p2>基础用法</ft-p2>
    <ft-card4>
      <ft-card3 slot="pattern" backgroundColor="white">
        <div>
          <b>{{content1}}</b>
          <ft-copy :mes="content1"></ft-copy>
        </div>
        <div>
          <b>{{content2}}</b>
          <ft-copy :mes="content2" @success="success">复制链接</ft-copy>
        </div>
      </ft-card3>
      <div slot="code" class="flexColumnAlign">
        <ft-card3 backgroundColor="white" width="95%">
          <ft-p4>mes为要复制的内容</ft-p4>
        </ft-card3>
        <ft-card3>
          <ft-p3 v-for="(n,index) in conArr[0]" :key="index">{{n}}</ft-p3>
        </ft-card3>
      </div>
    </ft-card4>
    <ft-p2>FtCopy Attributes</ft-p2>
    <el-table :data="tableDataArr[0]" class="mt20" style="width: 100%">
      <el-table-column prop="parameter" label="参数" width="180"></el-table-column>
      <el-table-column prop="description" label="说明"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="option" label="可选值"></el-table-column>
      <el-table-column prop="default" label="默认值" width="180"></el-table-column>
    </el-table>
    <ft-p2>FtCopy Slots</ft-p2>
    <el-table :data="tableDataArr[1]" class="mt20" style="width: 100%">
      <el-table-column prop="name" label="name" width="300"></el-table-column>
      <el-table-column prop="description" label="说明"></el-table-column>
    </el-table>
    <ft-p2>FtCopy Events</ft-p2>
    <el-table :data="tableDataArr[2]" class="mt20" style="width: 100%">
      <el-table-column prop="name" label="事件名称" width="180"></el-table-column>
      <el-table-column prop="description" label="说明"></el-table-column>
      <el-table-column prop="callback" label="回调参数"></el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import fileMapper from "../../../mapper/FileMapper";
export default Vue.extend({
  data() {
    return {
      content1: "leimushijiezuikeai",
      content2: "kuangsan",
      conArr: [],
      tableDataArr: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let param = { session: "component", page: "copy" };
      fileMapper.getFile(param).then(res => {
        this.conArr = this.filterCodeArr(res);
      });
      fileMapper.getJson(param).then((result: any) => {
        this.tableDataArr = result;
      });
    },
    success() {
      alert("复制成功");
    }
  }
});
</script>
<style lang="less" scoped>
@import url("../../../style/index");
</style>