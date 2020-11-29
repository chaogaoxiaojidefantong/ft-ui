<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
/**
 * 标题最大字体 
 */
import config from '../../config/config'
const cssPrefix = `${config.stylePrefix}-p1`; 
export default {
    name:`${config.componentPrefix}P1`,
    computed:{
        classes(){
            return cssPrefix
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../style/custom');
@cls: ~"@{css-prefix}p1";
.@{cls}{
    font-size: 30px;
}
</style>