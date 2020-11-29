<template>
  <div :class="classes" :style="bodyStyle">
    <div :class="imgClasses">
       <slot name="content-img"></slot>
    </div>
    <div :style="fontStyle">
      <slot name="content-b"></slot>
    </div>
  </div>
</template>
<script>
//图片默认大小56px,想改得在组件外设置
import config from '../../config/config'
const cssPrefix = `${config.stylePrefix}-card`;
export default {
  name: `${config.componentPrefix}Card`,
  props: {
    width: {
      type: String,
      default: "unset"
    },
    height:{
      type: String,
      default: "unset"
    },
    flexDirection: {
      type: String,
      default: "row"
    },
    color: {
      type: String,
      default: "#333333FF" 
    },
    fontSize: {
      type: String,
      default: "36px"
    },
    backgroundColor: {
      type: String,
      default: "#FFFFFFFF"
    }
  },
  computed: {
    classes() {
      return `${config.stylePrefix}-card`;
    },
    imgClasses(){
      return cssPrefix+'-img'
    },
    bodyStyle() {
      return {
        flexDirection: this.flexDirection,
        backgroundColor: this.backgroundColor,
        width:this.width,
        height:this.height
      };
    },
    fontStyle() {
      return { color: this.color, fontSize: this.fontSize };
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../style/card.less");
</style>