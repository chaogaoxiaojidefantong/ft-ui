<template>
    <div :class="classes" :style="styles">
        <div :class="conClasses" :style="conStyles">
            <slot></slot>
        </div>      
    </div>
</template>
<script>
import ftMixin from '../../mixins/mixin'
/**
 * 用来处理左fixd
 */
export default {
    name:'FtContainer4',
    mixins:[ftMixin],
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
           return this.cssPrefix+'container4'
        },
        conClasses(){
            return this.cssPrefix+'container4--con'
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
@import url('../../style/ft-container/ft-container4');
</style>