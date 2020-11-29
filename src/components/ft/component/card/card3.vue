<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
import config from '../../config/config'
const cssPrefix = `${config.stylePrefix}-card3`;
export default {
    name:`${config.componentPrefix}Card3`,
    data(){
        return{

        }
    },
    props:{
        width:{
            type:String,
            default:'95%'            
        },
        backgroundColor:{
             type:String,
             default: "#fafafa"
        },
    },
    methods:{

    },
    computed:{
        classes(){
            return cssPrefix
        },
        styles(){
            return {width:this.width,backgroundColor:this.backgroundColor}
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../style/card/card3');
</style>
