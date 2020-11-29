<template>
    <div>
        <div :class="classes" :style="divStyles">
            <b :class="bClasses">
                <slot></slot>
            </b>
            <b @click="cancel" class="ml10 mr5 hover-pointer">x</b>
        </div>
    </div>
</template>
<style lang="less" scoped>
    @import url("../../style/card/card2");
</style>
<script>
//小卡片，名字加x
//  <ft-card2 @cancel="deleteChooseMediasArr(item)" v-for='item in chooseMediasArr' :key="item.id" width='30px'>
//               {{item.media_name}}
//           </ft-card2>
import config from '../../config/config'
const cssPrefix = `${config.stylePrefix}-card2`;
export default {
    name:`${config.componentPrefix}Card2`,
    methods:{
        cancel(){
           this.$emit('cancel');
        }
    },
    props:{
    width: {
      type: String,
      default: "unset"
    },
    },
    computed:{
        classes(){
            return cssPrefix;
        },
        bClasses(){
            return cssPrefix+'-b'
        },
        divStyles(){
            return {width:this.width}
        }
    }
}
</script>