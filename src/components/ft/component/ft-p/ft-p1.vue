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
export default {
    name:'FtP1',
    computed:{
        classes(){
            return config.cssPrefix+'p1'
        }
    }
}
</script>
<style lang="less" scoped>
.ft-p1{
    font-size: 30px;
}
</style>