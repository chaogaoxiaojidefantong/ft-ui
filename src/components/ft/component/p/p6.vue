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
const cssPrefix = `${config.stylePrefix}-p6`; 
export default { 
    name:`${config.componentPrefix}P6`,
    computed:{
        classes(){
            return cssPrefix
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
@cls: ~"@{css-prefix}p6";
.@{cls}{
    font-size: 18px;
    font-weight: 400;
    color: #444;
    margin:16px 0px 16px 0px;
    cursor: pointer;
    .p-ellipsis();
}
</style>