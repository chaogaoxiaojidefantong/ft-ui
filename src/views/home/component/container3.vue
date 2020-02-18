<template>
  <div class="container3">
    <ft-p1>FtContainer3 容器</ft-p1>
    <ft-p5>此组件用来提供背景容器的作用,弥补background-image样式功能的局限性,背景不止是图片，还可以是自己自定义的东西</ft-p5>
    <ft-p2>基础用法</ft-p2>
    <ft-card4>
      <ft-card3 slot="pattern" backgroundColor="white">
        <ft-container3 width='100%' height='40px'>
            <div slot="bg" class="width300 height40 bg3"></div>
            <p slot="content">如果真爱有颜色,那一定是蓝色</p>
        </ft-container3>
      </ft-card3>
      <div slot="code" class="flexColumnAlign">
        <ft-card3 backgroundColor="white" width="95%">
          <ft-p4>width属性设置容器的宽度,height属性设置容器的高度,为必填属性</ft-p4>
        </ft-card3>
        <ft-card3>
             <ft-p3 v-for="(n,index) in conArr[0]" :key="index">{{n}}</ft-p3>
        </ft-card3>
      </div>
    </ft-card4>
    <ft-p2>FtContainer3 Attributes</ft-p2>
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
    <ft-p2>FtContainer3 Slots</ft-p2>
    <el-table
      :data="tableDataArr[1]"
      class="mt20"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="name"
        width="300">
      </el-table-column>
      <el-table-column
        prop="description"
        label="说明">
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import fileMapper from '../../../mapper/FileMapper'
export default Vue.extend({
    data(){
      return{
        conArr:[],
        tableDataArr:[]
      }
    },
    mounted(){
      this.getData();
    },
    methods:{
      getData(){
        let param={session:'component',page:'container3'};
        fileMapper.getFile(param).then(res=>{
          this.conArr = this.filterCodeArr(res);
        })
        fileMapper.getJson(param).then((result:any)=>{
        this.tableDataArr=result;
      })
      }
    }
});
</script>
<style lang="less" scoped>
@import url("../../../style/index");
.container3 {
     width: calc(~"77vw - 220px");
}
</style>