<template>
    <div :class="classes">
      <article :class="titleClasses">
        {{title}}
      </article>
      <el-input v-model="password" :placeholder="placeholder" type="password" class="inputPassword mt28"></el-input>
      <div class="flexCenter mt24 mb24">
        <ft-button backgroundColor='white' color='#475669' class="mr24" @click="cancel" padding='12px 24px 12px 24px'>取消</ft-button>
        <ft-button @click="submit" padding='12px 24px 12px 24px'>确认</ft-button>
      </div> 
    </div>
</template>
<script>
import config from '../../config/config'
const cssPrefix = `${config.stylePrefix}-line2`; 
export default {
     name: `${config.componentPrefix}Line2`,
     data(){
       return{
            password:''
       }
     },
     computed:{
      classes() {
      return [cssPrefix,'flexColumnAlign'];
      },
      titleClasses(){
        return [cssPrefix+'-title','mt24','fw700'];
      }
     },
     props:{
       title:{//标题
           type:String,
           default:'',
           required:true
       },
       placeholder:{
         type:String,
          default:''
       }
     },
     methods:{
        cancel(){
          this.password=''
          this.$emit('cancel')
        },
        submit(){
          this.$emit('submit',this.password);
        }
     }
}
</script>
<style lang="less" scoped>
@import url("../../style/form/line2.less");
</style>