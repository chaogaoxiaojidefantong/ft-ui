<template>
    <div :class="classes" :style="bodyStyle">
    </div>
</template>
<script>
const cssPrefix = "ft-divider";
export default {
    name:'FtDivider',
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
@import url("../../style/ft-divider.less");
</style>