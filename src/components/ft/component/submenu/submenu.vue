<template>
    <div class="ft-submenu">
        <slot></slot>
    </div>
</template>
<script>
import config from '../../config/config'
export default {
    name: `${config.componentPrefix}Submenu`,
}
</script>
<style lang="less" scoped>
@import url("../../style/submenu/submenu");
</style>