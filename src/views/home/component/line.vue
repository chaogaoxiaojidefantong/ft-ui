<template>
    <div class="line">
        <ft-p1>FtLine 行容器</ft-p1>
        <ft-p2>基础用法</ft-p2>
        <ft-card4>
      <ft-card3 slot="pattern" backgroundColor="white">
        <ft-line leftCon='姓名'><b >饭桶</b></ft-line>
        <ft-line leftCon='出生日期'><b >2007-4-20</b></ft-line>
        <ft-line leftCon='出生日期' :maohao='false'><b >2007-4-20</b></ft-line>
      </ft-card3>
      <div slot="code" class="flexColumnAlign">
        <ft-card3 backgroundColor="white" width="95%">
          <ft-p4>常有这种格式需求,用了后不用调左右的样式了</ft-p4>
        </ft-card3>
        <ft-card3>
             <ft-p3 v-for="(n,index) in conArr[0]" :key="index">{{n}}</ft-p3>
        </ft-card3>
      </div>
    </ft-card4>
     <ft-p2>FtLine Attributes</ft-p2>
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
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
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
        let param={session:'component',page:'line'};
        fileMapper.getFile(param).then(res=>{
          this.conArr = this.filterCodeArr(res);
        })
        fileMapper.getJson(param).then((result:any)=>{
        this.tableDataArr=result;
      })
      }
    }
})
</script>
<style lang="less" scoped>
  .line{
    width: calc(~"77vw - 220px");
  }
</style>