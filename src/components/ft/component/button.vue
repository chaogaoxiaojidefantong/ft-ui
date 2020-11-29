<template>
    <div :class="classes">     
        <button :class="[type ? cssPrefix+'--' + type : '',buttonClasses]" @click="goClick" :style="buttonStyle"><slot></slot></button>
    </div>
</template>
<script>
import config from '../config/config'
const cssPrefix = `${config.stylePrefix}-button`; 
export default {
  name:`${config.componentPrefix}Button`,
  props: {
    backgroundColor: {
      //按钮颜色
      type: String,
      default: "rgb(45, 104, 246)"
    },
    color:{
         type: String,
        default: "white"
    },
     borderRadius:{
      type: String,
      default: "5px"
    },
    borderWidth:{
       type: String,
       default: "1px"
    },
    fontSize:{
      type: String,
      default: "12px"
    },
    type:{
       type: String,
       default: ""
    },
    padding:{
      type: String,
      default: "5px 22px 5px 22px"
    }
  },
  methods: {
      goClick(){
           this.$emit("click");
      }
  },
  computed: {
      classes(){
          return cssPrefix;
      },
      buttonClasses(){
           return cssPrefix+'-bu';
      },
      buttonStyle(){
          return {padding:this.padding,backgroundColor:this.backgroundColor,color:this.color,borderRadius:this.borderRadius,borderWidth:this.borderWidth,fontSize:this.fontSize}
      }
  },
  /**
   * example
   * 
   */
}
</script>
<style lang="less" scoped>
@import url("../style/button.less");
</style>