<template> 
<div>
    <header >
        <b ref='bb'>{{iconName}}</b>
       <!-- <Select v-model="model11" filterable>
           <Option>

           </Option>
       </Select>      -->  
       <input v-focus />{{iconName}}
       <Button @click="go"></Button>
       <Button v-if="show">{{ $t("hello") }}</Button>
    </header>
</div>
</template>
<script>
import {Button,Select,Option} from 'iview'
import {ComponentMapper} from '@/mapper-cls/index'
const {componentMapper}={componentMapper:new ComponentMapper()}

export default {
    data(){
        return{
            iconName:this.$config.iconName,
            show:true
        }
    },
    methods:{
      go(){
         
       this.show=false
           //this.$destroy
          
      }
    },

    watch:{
           iconName:function(val){

           }
    },
    created() {
       let obj={name:'sansan',age:'12'}
    },
    mounted(){       
        var obj = {};
var descriptor = {}; // 没有继承的属性
// 默认没有 enumerable，没有 configurable，没有 writable
descriptor.value = 'static';
Object.defineProperty(obj, 'key', descriptor);
       componentMapper.selectAll().then(res=>{
       })
    },
    components:{
        Button,Select,Option//iview组件
        },
        directives:{
             focus: {
                inserted: function (el) {
                el.focus()
                }
            }
        }
};
</script>
<style lang="less" scoped>

</style>
