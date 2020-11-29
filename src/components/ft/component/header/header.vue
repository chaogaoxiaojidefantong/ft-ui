<template>
    <div :class="classes" :style="styles">
        <div :class="classesCon" :style="conStyles">
            <slot>
            </slot>
        </div>    
    </div>
</template>
<script>
import config from '../../config/config'
const cssPrefix = `${config.stylePrefix}-header`; 
export default { 
    name:`${config.componentPrefix}Header`,
    props:{
        height:{
            type:String,
            default:'unset',
          
        },   
        conWidth:{//内容的宽度
            type:String,
            default:'unset',
         
        },
        backgroundColor:{
            type:String,
            default:'unset'
        },
        border:{
            type:Boolean,
            default:false
        }
       
    },
    computed:{
        classes() {
        return cssPrefix;
        },
        classesCon(){
            return `${cssPrefix}--content`
        },
        styles(){         
            return {height:this.height}
        },
        conStyles(){
            let data={width:this.conWidth,backgroundColor:this.backgroundColor}
            if(this.border){
                let borderBottom="1px solid rgba(229,229,229,1)";
                data={...data,...{borderBottom:borderBottom}}
            }
            return data
        }
    },
}
</script>
<style lang="less" scoped>
@import url('../../style/header/header');
</style>
