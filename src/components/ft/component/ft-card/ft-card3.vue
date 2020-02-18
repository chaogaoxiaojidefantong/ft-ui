<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
import config from '../../config/config'
export default {
    name:'FtCard3',
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
            return config.cssPrefix+'card3'
        },
        styles(){
            return {width:this.width,backgroundColor:this.backgroundColor}
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../style/ft-card/ft-card3');
</style>
