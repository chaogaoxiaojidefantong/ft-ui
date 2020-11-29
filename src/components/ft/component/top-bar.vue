<template>
  <div :class="classes" :style="bodyStyle">
    <div :class="leftclasses" v-if="isback" @click="backPage">
      <img src="../assets/return.png">
    </div>
    <div v-if="!isback"></div>
    <div :class="middleclasses">
      <slot name="content"></slot>
    </div>
    <div :class="rightclasses">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
import config from '../config/config'
const cssPrefix = `${config.stylePrefix}-top-bar`; 
export default {
   name:`${config.componentPrefix}TopBar`,
  data() {
    return {};
  },
  props: {
    isback: {//设置是否有返回键
      type: Boolean,
      default: false
    },
    backgroundColor:{
      type:String,
      default:'white'
    }
  },
  created() {},
  computed: {
    classes() {
      return cssPrefix;
    },
    leftclasses() {
      return `${cssPrefix}-left`;
    },
    rightclasses(){
      return `${cssPrefix}-right`;
    },
    middleclasses(){
      return `${cssPrefix}-middle`;
    },
    bodyStyle(){
      return {backgroundColor:this.backgroundColor}
    }
  },
  methods: {
    backPage() {
        history.back(-1)
			}
  },
};
</script>
<style lang="less" scoped>
@import url("../style/top-bar.less");
</style>