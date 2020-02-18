<template>
    <div :class="classes" @click="click">
        <slot></slot>
    </div>
</template>
<script>
/**
 * 主页左边栏的小字体
 */
import config from '../../config/config'
export default {
    name:'FtP7',
    computed:{
        classes(){
            return config.cssPrefix+'p7'
        }
    },
    methods:{
        click(){
            this.$emit('click');
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../style/custom');
.ft-p7{
    font-size: 12px;
    font-weight: 400;
    color: #999;
    margin:16px 0px 16px 0px;
    cursor: pointer;
    .p-ellipsis();
}
</style>