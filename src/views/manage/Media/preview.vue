<template>
    <div class="preview">
        <div>
            {{getOrderInfoData.title}}
            <div v-append="getOrderInfoData.content"></div>
            <div></div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {  commonUtil } from '../../../components/ft'
import orderMapper from '../../../mapper/orderMapper';
import CommonIe from '../../../interface/common-ie';
import OrderIe from '../../../interface/OrderIe';
export default Vue.extend({
    data(){
        return{
           getOrderInfoParam:{order:''},
            getOrderInfoData:{
                title:'',
                content:''
            },
            level:2  
        }
    },
    created(){   
        this.initData();
        
    },
    mounted(){
        let con=""
    },
    methods:{
        initData(){
            this.getOrderInfoParam.order=commonUtil.getQueryString('order')+'';
            let param=this.deepCopy(this.getOrderInfoParam)
            this.getContent(param);
        },   
        getContent(param:{order:string}){
            orderMapper.getOrderInfo(param).then((result:any)=>{
                const res=result as CommonIe.ResParamIe
                const data:OrderIe.getOrderInfoDataIe=res.data
                this.getOrderInfoData.title=data.title
                this.getOrderInfoData.content=data.content
            },(err:CommonIe.ErrParamIe)=>{
                this.$message.error(err.msg);
            })
        }
    },
})
</script>