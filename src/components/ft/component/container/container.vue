<template>
    <section :class="classes" :style="bodyStyle">
        <slot></slot>
    </section>
</template>
<script>
//盒子模型容器
import config from '../../config/config'
const cssPrefix = `${config.stylePrefix}-container`;
export default {
    name:`${config.componentPrefix}Container`,
    props:{
        minHeight:{
            type:String,
            default:'unset'
        },
        flexDirection:{
            type:String,
            default:'row'
        },
        width:{
            type:String,
            default:'unset'
        },
        height:{
            type:String,
            default:'unset'
        }
    },
    computed:{
        classes(){
            return cssPrefix;
        },
        bodyStyle(){
            return {minHeight:this.minHeight,flexDirection:this.flexDirection,width:this.width,height:this.height}
        }
    }
}
</script>
<style lang="less" scoped>
@import url("../../style/container/container");
</style>