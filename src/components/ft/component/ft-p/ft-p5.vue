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
    name:'FtP5',
    computed:{
        classes(){
            return config.cssPrefix+'p5'
        }
    }
}
</script>
<style lang="less" scoped>
.ft-p5{
    font-size: 16px;
    font-weight: 400;
    color: #5e6d82;
    margin-top: 20px;
}
</style>