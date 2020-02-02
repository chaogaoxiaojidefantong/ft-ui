<template>
  <div :class="classes">
    <ft-container3 height="45px">
      <template slot:bg>
        <iframe :src="src" :style="styles" scrolling="no" slot="bg" v-if="captchaShow"></iframe>
      </template> 
      <div @click="refreshCaptcha" slot="content"  :style="styles"></div>
    </ft-container3>
  </div>
</template>
<script>
/**
 * 此验证码用于get请求刷新验证码的情况
 *  <ft-capcha ></ft-capcha>
 */
const cssPrefix = "ft-captcha";
import { FtContainer3 } from "../ft-container";
export default {
  name: "FtCaptcha",
  components: { FtContainer3 },
  props: {
    src: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "130px"
    },
    height: {
      type: String,
      default: "45px"
    }
  },
  data(){
      return{
          captchaShow:true
      }
  },
  computed: {
    styles() {
      return { width: this.width, height: this.height };
    },
    classes() {
      return cssPrefix;
    }
  },
  methods: {
    refreshCaptcha() {
      this.captchaShow = false;
      this.$nextTick(() => {
        this.captchaShow = true;
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../style/ft-captcha/ft-captcha.less");
</style>