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
    name:`${config.componentPrefix}P2`,
    computed:{
        classes(){
            return cssPrefix
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../style/custom');
@cls: ~"@{css-prefix}p2";
.@{cls}{
    font-size: 22px;
    margin-top: 30px;
}
</style>