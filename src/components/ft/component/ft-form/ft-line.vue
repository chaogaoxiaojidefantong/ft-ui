<template>
  <div :class="classes">
     <div :class="leftClasses" :style="leftStyle">   
         <b v-for="item in leftWord" :key="item">
             {{item}}
        </b>   
     </div>
     <b class="maohao" v-if="maohaoRes">:</b> 
    <div :class="rightClasses">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
const cssPrefix = "ft-line";
export default {
  name: "FtLine",
  props:{
      leftCon:{
          type:String,
          default:''
      },
      leftWidth:{
          type:String,
          default:'70px'
      },
      leftHeight:{
          type:String,
          default:'18px'
      },
      maohao:{
          type:Boolean,
          default:true
      }
  },
  methods:{
      //拆分字符串为数组
      splitWord(str){
          return str.split('');
      }
  },
  computed: {
    classes() {
      return cssPrefix;
    },
    leftClasses(){
        return cssPrefix+'-left'
    },
    rightClasses(){
         return cssPrefix+'-right'
    },
    //拆分为字符串后的数组
    leftWord(){
       return this.splitWord(this.leftCon);
    },
    leftStyle(){
        return {width:this.leftWidth,height:this.leftHeight}
    },
    maohaoRes(){
        return this.maohao;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../style/ft-form/ft-line.less");
</style>