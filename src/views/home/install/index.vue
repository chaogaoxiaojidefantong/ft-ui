<template>
    <div class="index pl20 mt20">
        <ft-p1>安装</ft-p1> 
        <ft-p2 >npm安装</ft-p2>
        <ft-p5>代码开源,本组件库只想为前端解放双手,后续还会加react的组件库,有兴趣共同开发者则联系扣扣759646095</ft-p5>
        <ft-card3 class="mt10">
            <ft-p3>npm i ftui -S</ft-p3>
            <!-- <ft-p3 v-for="n in 50" :key="n">npm i ftui -S</ft-p3> -->
        </ft-card3> 
        
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return{
            
        }
    },
    methods:{
      
    },
    mounted(){
        
    }
})
</script>
<style lang="less" scoped>
@import url('../../../style/index');
.index{
   width: calc(~"77vw - 220px"); 
    box-sizing: border-box;
}
.container
{
  width:550px;
  border:5px solid red;
}
.item
{
  width:100px;
  height:100px;
  float:left;
  background-color:silver;
  margin:5px;
}
</style>