<template>
    <div class="flexBetween">
        <b>ftui组件库</b>
        <!-- <input type="text" placeholder="搜索文档"/> -->
        <div></div>
        <div>           
            <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </div>       
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'PageHeader',
    data(){
        return{
            options:[
            {
                label:'中文',
                value:'china'
            }
            // ,{
            //     label:'English',
            //     value:'english'
            // }
            ],
            value:'中文'
        }
    },
    props:{
        
    }
})
</script>