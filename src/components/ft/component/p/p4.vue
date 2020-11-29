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
const cssPrefix = `${config.stylePrefix}-p4`; 
export default {
    name:`${config.componentPrefix}P4`,
    computed:{
        classes(){
            return cssPrefix
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../style/custom');
@cls: ~"@{css-prefix}p4";
.@{cls}{
    font-size: 18px;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 10px;
    
}
</style>