<template>
    <div :class="classes" :style="bodyStyle">
        <div :class="bgClasses">
            <slot name='bg'></slot>
        </div>
        <div :class="conClasses">
            <slot name='content'></slot>
        </div>        
    </div>
</template>
<script>
import config from '../../config/config'
const cssPrefix = `${config.stylePrefix}-container3`;
export default {
    name:`${config.componentPrefix}Container3`,
    props:{
        width:{
             type: String,
             default: "unset",
             required:true
        },
        height:{
             type: String,
             default: "unset",
             required:true
        }
    },
    computed:{
        classes(){
            return cssPrefix;
        },
        bgClasses(){
            return `${cssPrefix}--bg`
        },
        conClasses(){
            return `${cssPrefix}--content`
        },
        bodyStyle(){
            return {width:this.width,height:this.height}
        }
    }
}
</script>
<style lang="less" scoped>
@import url("../../style/container/container3");
</style>