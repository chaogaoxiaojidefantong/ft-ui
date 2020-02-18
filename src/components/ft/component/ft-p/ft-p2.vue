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
    name:'FtP2',
    computed:{
        classes(){
            return config.cssPrefix+'p2'
        }
    }
}
</script>
<style lang="less" scoped>
.ft-p2{
    font-size: 22px;
    margin-top: 30px;
}
</style>