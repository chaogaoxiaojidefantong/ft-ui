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
const cssPrefix = `${config.stylePrefix}-p5`; 
export default {
    name:`${config.componentPrefix}P5`,
    computed:{
        classes(){
            return cssPrefix
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../style/custom');
@cls: ~"@{css-prefix}p5";
.@{cls}{
    font-size: 16px;
    font-weight: 400;
    color: #5e6d82;
    margin-top: 20px;
}
</style>