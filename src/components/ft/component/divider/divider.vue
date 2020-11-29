<template>
    <div :class="classes" :style="bodyStyle">
    </div>
</template>
<script>
import config from '../../config/config'
const cssPrefix = `${config.stylePrefix}-divider`; 
export default {
    name:`${config.componentPrefix}Divider`,
    props:{
        width:{
            type:String,
            default:'1px'
        },
        height:{
            type:String,
            default:'80px'
        }
    },
    computed:{
        classes(){
            return cssPrefix;
        },
        bodyStyle(){
            return{width:this.width,height:this.height}
        }
    }
}
</script>
<style lang="less" scoped>
@import url("../../style/divider.less");
</style>