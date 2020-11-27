<template>
  <div class="cascader">
    <ft-p1>FtCascader 中国地区级联</ft-p1>
    <ft-p5>此组件用来提供给中国地区选择</ft-p5>
    <ft-p2>基础用法</ft-p2>
    <ft-card4>
      <ft-card3 slot="pattern" backgroundColor="white">
        <ft-cascader class="mt10"></ft-cascader>
        <ft-cascader multiple class="mt10" @getArr="getArr" @clearCascaderData="clear"></ft-cascader>
      </ft-card3>
      <div slot="code" class="flexColumnAlign">
        <ft-card3 backgroundColor="white" width='95%' >
            <ft-p4 v-for="(n,index) in conArr[1]" :key="index">{{n}}</ft-p4>
        </ft-card3>
        <ft-card3>
          <ft-p3 v-for="(n,index) in conArr[0]" :key="index">{{n}}</ft-p3>
        </ft-card3>
      </div>
    </ft-card4>
    <ft-p2>FtCascader Attributes</ft-p2>
    <el-table
      :data="tableDataArr[0]"
      class="mt20"
      style="width: 100%">
      <el-table-column
        prop="parameter"
        label="参数"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="说明">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型">
      </el-table-column>
      <el-table-column
        prop="option"
        label="可选值">
      </el-table-column>
      <el-table-column
        prop="default"
        label="默认值"
        width="180">
      </el-table-column>
    </el-table>
    <ft-p2>Cascader Events</ft-p2>
    <el-table
      :data="tableDataArr[1]"
      class="mt20"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="事件名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="说明">
      </el-table-column>
      <el-table-column
        prop="callback"
        label="回调参数">
      </el-table-column>
    </el-table>
    <img  src="http://localhost:8081/File/read?session=component&page=cascader"/>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { FtCascader } from "ftui";
import fileMapper from "../../../mapper/FileMapper";

interface getArrIe { 
  area: string;
  area_code: number;
  city: string;
  cityCode: number;
  province: string;
  province_code: number;
}
export default Vue.extend({
  data() {
    return {
      conArr: [],
      tableDataArr:[
      ]
    };
  },
  computed: {},
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let param = { session: "component", page: "cascader" };
      fileMapper.getFile(param).then((result: any) => {
        this.conArr = this.filterCodeArr(result);
      });
      fileMapper.getJson(param).then((result:any)=>{
        this.tableDataArr=result;
      })
    },
    getArr(){

    },
    clear(){
      
    }
  }
});
</script>
<style lang="less" scoped>
@import url("../../../style/index");
.cascader {
    width: calc(~"77vw - 220px");
}
</style>