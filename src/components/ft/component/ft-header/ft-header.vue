<template>
    <div class='ft-header' :style="styles">
        <div class="ft-header--content" :style="conStyles">
            <slot>
            </slot>
        </div>    
    </div>
</template>
<script>
import ftMixin from '../../mixins/mixin'
export default {
    name:'FtHeader', 
    mixins:[ftMixin], 
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
@import url('../../style/ft-header/ft-header');
</style>
