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
    name:'FtP3',
    computed:{
        classes(){
            return config.cssPrefix+'p3'
        }
    }
}
</script>
<style lang="less" scoped>
.ft-p3{
    font-size: 15px;
    font-weight: 400;
    margin-top: 7px;
    margin-bottom: 7px;
    color: #756bb1;
}
</style>