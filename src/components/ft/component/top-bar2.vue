<template>
    <div :class="classes" :style="bodyStyle">
        <div :class="conClasses">
            <slot name="name"></slot>
            <slot name="button"></slot>
        </div>    
    </div>
</template>
<script>
//适用于pc端的头部组件
import config from '../config/config'
const cssPrefix = `${config.stylePrefix}-top-bar2`; 
export default {
    name:`${config.componentPrefix}TopBar2`,
    props:{
        height:{
            type:String,
            default:'82px'
        },
        width:{
            type:String,
            default:'100%'
        }
    },
    computed:{
        classes(){
            return cssPrefix;
        },
        conClasses(){
            return cssPrefix+'-con'
        },
        bodyStyle(){
            return {height:this.height,width:this.width}
        }
    }
/**
 * example
 *   <ft-top-bar2>
        <b slot="name">admin</b>
        <ft-button slot="button" backgroundColor='#2D68F6FF' width='68px' height='28px'>退出</ft-button>
    </ft-top-bar2>
 */
}
</script>
<style lang="less" scoped>
@import url("../style/top-bar2.less");
</style>