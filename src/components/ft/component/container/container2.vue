<template>
  <div :class="classes" :style="bodyStyle">
    <slot></slot>
  </div>
</template>
<script>
//此组件用于水平居中容器
import config from '../../config/config'
const cssPrefix = `${config.stylePrefix}-container2`;
export default {
  name: `${config.componentPrefix}Container2`,
  props: {
    justifyContent: {
      type: String,
      default: "center"
    }
  },
  computed: {
    classes() {
      return cssPrefix;
    },
    bodyStyle() {
      return { justifyContent: this.justifyContent };
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../style/container/container2");
</style>