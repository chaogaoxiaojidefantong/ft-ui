<template>
    <div :class="classes" :style="styles">
        <div :class="conClasses" :style="conStyles">
            <slot></slot>
        </div>      
    </div>
</template>
<script>
/**
 * 用来处理左fixd 
 */
import config from '../../config/config'
const cssPrefix = `${config.stylePrefix}-container4`; 
export default {
    name:`${config.componentPrefix}Container4`,
    props:{
        width:{
            type:String,
            default:'220px'
        },
        height:{
            type:String,
            default:'900px'
        }
    },
    computed:{
        classes(){
           return cssPrefix
        },
        conClasses(){
            return `${cssPrefix}----con`
        },
        styles(){
            return {width:this.width,height:this.height}
        },
        conStyles(){
            return {width:this.width,height:this.height}
        }
    },

}
</script>
<style lang="less" scoped>
@import url('../../style/container/container4');
</style>