<template>
  <div :class="classes">
    <input
      :type="type"
      :value="currentVal"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :style="inputStyle"
      :class="inputClasses"
      :backgroundColor="backgroundColor"
      @input="handleInput"
    />
  </div>
</template>
<script>
import commonUtil from "../utils/commonUtil";
import config from '../config/config'
const cssPrefix = `${config.stylePrefix}-input`; 
export default {
  name:`${config.componentPrefix}Input`,
  data() {
    return {
      currentVal: this.value
    };
  },
  props: {
    type: {
      validator(value) {
        return commonUtil.oneOf(value, [
          "text",
          "textarea",
          "password",
          "email",
          "date",
          "number",
          "tel"
        ]);
      }
    },
    value: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    maxlength: {
      type: [String, Number]
    },
    height: {
      type: [String, Number],
      default: "45px"
    },
    width: {
      type: [String, Number],
      default: "295px"
    },
    borderRadius: {
      type: String,
      default: "5px"
    },
    borderWidth: {
      type: String,
      default: "0px"
    },
    backgroundColor: {
      type: String,
      default: "#f0f0f0"
    }
  },
  computed: {
    inputStyle() {
      return {
        height: this.height,
        width: this.width,
        borderRadius: this.borderRadius,
        borderWidth: this.borderWidth,
        backgroundColor: this.backgroundColor
      };
    },
    classes() {
      return cssPrefix;
    },
    inputClasses() {
      return cssPrefix + "-input";
    }
  },
  methods: {
    setCurrentValue(value) {
      this.currentValue = value;
    },
    handleInput(event) {
      let value = event.target.value;
      this.$emit("input", value);
      this.setCurrentValue(value);
    }
  },
  watch: {
    value(val) {
      this.setCurrentValue(val);
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../style/input.less");
</style>