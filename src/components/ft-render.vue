<script>
import {FtButton} from './ft/index'
export default {
    name:"FtRender",
    // components:{FtButton},
    render(createElement){
    return createElement(
      'h' + this.level,   // 标签名称
      //FtButton,
      {
            style: {
            color: 'red',
            fontSize: '14px'
            },
      },
      this.$slots.default // 子节点数组
    )
    },
    props: {
    level: {
      type: Number,
      required: true
    }
  },
   // 普通的 HTML attribute
  
  
}
</script>
<style lang="less" scoped>

</style>