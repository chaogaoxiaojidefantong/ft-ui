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
export default {
    name:'FtP4',
    computed:{
        classes(){
            return config.cssPrefix+'p4'
        }
    }
}
</script>
<style lang="less" scoped>
.ft-p4{
    font-size: 18px;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 10px;
    
}
</style>