<template>
  <div class="calc1">
    <ft-p1>FtLine2 密码框</ft-p1>
    <ft-p5>主要配合弹窗进行使用</ft-p5>
    <ft-p2>基础用法</ft-p2>
    <ft-card4>
      <ft-card3 slot="pattern" backgroundColor="white">
        <ft-line2 title="密码框" placeholder="请输入密码" @submit="submit"></ft-line2>
        <ft-line2 title="支付密码" placeholder="请输入支付密码" @cancel="cancel" @submit="submit"></ft-line2>
      </ft-card3>
      <div slot="code" class="flexColumnAlign">
        <ft-card3 backgroundColor="white" width="95%">
          <ft-p4>常用来配合弹窗使用,让用户输入密码框的场景,弹窗可以借鉴ele的Dialog,title为必填属性,点击cancel可清空输入内容</ft-p4>
        </ft-card3>
        <ft-card3>
          <ft-p3 v-for="(n,index) in conArr[0]" :key="index">{{n}}</ft-p3>
        </ft-card3>
      </div>
    </ft-card4>
    <ft-p2>FtLine2 Attributes</ft-p2>
    <el-table :data="tableDataArr[0]" class="mt20" style="width: 100%">
      <el-table-column prop="parameter" label="参数" width="180"></el-table-column>
      <el-table-column prop="description" label="说明"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="option" label="可选值"></el-table-column>
      <el-table-column prop="default" label="默认值" width="180"></el-table-column>
    </el-table>
    <ft-p2>FtLine2 Events</ft-p2>
    <el-table :data="tableDataArr[1]" class="mt20" style="width: 100%">
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
      conArr: [],
      tableDataArr: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    cancel() {
      debugger;
    },
    submit(pwd: string) {
      debugger;
    },
    getData() {
      let param = { session: "component", page: "line2" };
      fileMapper.getFile(param).then(res => {
        this.conArr = this.filterCodeArr(res);
      });
      fileMapper.getJson(param).then((result: any) => {
        this.tableDataArr = result;
      });
    }
  }
});
</script>
<style lang="less" scoped>
</style>