<template>
  <div v-clipboard:copy="content" v-clipboard:success="onCopy" :class="classes">
    <slot><img src="../../assets/copy.png" /></slot>   
  </div>
</template>
<script>
import config from '../../config/config'
const cssPrefix = `${config.stylePrefix}-copy`; 
export default {
  name:`${config.componentPrefix}Copy`,
  data() {
    return {};
  },
  props: {
    mes: {
      type: String,
      default: ""
    }
  },
  computed: {
    content() {
      return this.mes;
    },
    classes(){
        return cssPrefix;
    }
  },
  methods: {
    /**
     * 复制成功后的事件
     */
    onCopy() {
        this.$emit('success');  
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../style/copy.less");
</style>