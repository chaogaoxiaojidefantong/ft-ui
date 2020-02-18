<template>
    <div class="pl20 mt20 start">
        <ft-p1>快速上手</ft-p1>
        <ft-p2 >引入ft</ft-p2>
        <ft-p4>完整引入</ft-p4>
        <ft-p5>在 main.js 中写入以下内容：</ft-p5>
        <ft-card3 class="mt20">       
            <ft-p3 v-for="(n,index) in conArr[0]" :key="index">
                {{n}}
            </ft-p3>
        </ft-card3>
        <ft-p4>按需引入</ft-p4>
        <ft-p5>在 main.js 中写入以下内容：</ft-p5>
        <ft-card3 class="mt20">
            <ft-p3 v-for="(n,index) in conArr[1]" :key="index">
                {{n}}
            </ft-p3>
        </ft-card3>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import fileMapper from '../../../mapper/FileMapper'
export default Vue.extend({
    mounted(){
        this.getData();
    },
     data(){
        return{
            conArr:[]//代码数组
        }
    },
    methods:{
        getData(){
            let param={session:'install',page:'start'}
            fileMapper.getFile(param).then((res:any)=>{
               this.conArr= this.filterCodeArr(res);
            })
        }
    },
    computed:{
       
    }
})
</script>
<style lang="less" scoped>
.start{
    width: calc(~"77vw - 220px");
}
@import url('../../../style/index');
</style>