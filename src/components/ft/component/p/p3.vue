<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
/**
 * 标题第二大字体
 */
import config from '../../config/config'
const cssPrefix = `${config.stylePrefix}-p2`; 
export default {
    name:`${config.componentPrefix}P3`,
    computed:{
        classes(){
            return cssPrefix
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../style/custom');
@cls: ~"@{css-prefix}p3";
.@{cls}{
    font-size: 15px;
    font-weight: 400;
    margin-top: 7px;
    margin-bottom: 7px;
    color: #756bb1;
}
</style>