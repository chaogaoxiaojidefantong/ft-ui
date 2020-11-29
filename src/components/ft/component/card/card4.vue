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
import FtButton from '../button'
import config from '../../config/config'
const cssPrefix = `${config.stylePrefix}-card4`;
export default {
    name:`${config.componentPrefix}Card4`,
    data(){
        return{
            show:false
        }
    },
    computed:{
        classes(){
            return cssPrefix
        },
        patternClasses(){
            return cssPrefix+'-pattern'
        },
        codeClasses(){
            return cssPrefix+'-code'
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../style/card/card4');
</style>