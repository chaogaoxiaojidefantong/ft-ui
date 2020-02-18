<template>
    <div :class="classes">
        <div :class="patternClasses">
            <slot name="pattern"></slot>
        </div>  
        <div></div>
        <div :class="codeClasses" v-if="show">
            <slot name="code"></slot>
        </div>
         <div class="ft-card4-button hover-pointer">
                <article v-if="show" @click="show=!show">
                    <p>隐藏代码</p>
                </article>         
                <article v-else @click="show=!show">
                    <p>显示代码</p>
                </article>      
         </div>       
    </div>
</template>
<script>
import FtButton from '../ft-button'
import config from '../../config/config'
export default {
    name:"FtCard4",
    data(){
        return{
            show:false
        }
    },
    computed:{
        classes(){
            return config.cssPrefix+"card4"
        },
        patternClasses(){
            return config.cssPrefix+"card4"+'-pattern'
        },
        codeClasses(){
            return config.cssPrefix+"card4"+'-code'
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../style/ft-card/ft-card4');
</style>