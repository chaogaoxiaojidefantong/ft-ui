<template>
  <div class="index">
    <ft-header height='120px' conWidth='77vw' border>
      <div v-bind:is="currentComponent"></div>   
    </ft-header>
    <div class="index--content">
      <ft-container4 >
        <article>
          <p class="title-p">开发指南</p>
          <ft-p6 @click="pushPage('installIndex')" class="hover-pointer">安装</ft-p6>
          <ft-p6 @click="pushPage('installStart')" class="hover-pointer">快速上手</ft-p6>
        </article>
        <article>
          <p class="title-p" >组件</p>
        </article>
        <article>
          <ft-p6 class="hover-pointer" @click="pushPage('componentCascader')">cascader 地区级联</ft-p6>
          <ft-p6 class="hover-pointer" @click="pushPage('componentContainer3')">container3 容器</ft-p6>
          <ft-p6 class="hover-pointer" @click="pushPage('componentLine')">line 行样式</ft-p6>        
        </article>
      </ft-container4>
      <section class="index--content--right ">
          <!-- <ft-render :level='2'>hehe</ft-render> -->
          <router-view></router-view>
      </section>    
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import PageHeader from "../public/PageHeader.vue";
import { commonUtil } from '../../components/ft';
import FtRender from '../../components/ft-render.vue'
export default Vue.extend({
  data() {
    return {
      currentComponent: ''
    };
  },
  components:{FtRender},
  mounted(){
      this.currentComponent=PageHeader
  },
  computed:{
    inputCon(){
     return commonUtil.getQueryString('name');
    }
  }
});
</script>
<style lang="less" scoped>
@import url('../../style/index');
.index {
    width: 88vw;
  &--content {
    display: flex;
    height: calc(~"100vh - 120px");
    &--right{
      width: calc(~"88vw - 220px");
      height: calc(~"100vh - 120px");
      overflow-y:scroll;
    }
  }
}
</style>
