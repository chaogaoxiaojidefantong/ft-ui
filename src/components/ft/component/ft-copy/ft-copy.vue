<template>
  <div v-clipboard:copy="content" v-clipboard:success="onCopy" :class="classes">
    <img src="../../assets/copy.png" />
  </div>
</template>
<script>
const cssPrefix = "ft-copy";
export default {
  name: "FtCopy",
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
@import url("../../style/ft-copy.less");
</style>