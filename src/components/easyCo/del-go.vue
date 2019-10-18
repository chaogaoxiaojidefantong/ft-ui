<template>
  <div class="del-go">
    <div
      style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;"
    >
      <Checkbox
        :indeterminate="indeterminate"
        :value="checkAll"
        @click.prevent.native="handleCheckAll"
        >全选</Checkbox
      >
    </div>
    <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
      <template v-for="obj in objectList"
        ><Checkbox :label="obj.id" :key="obj.id" :value="objSelect">{{
          obj.name
        }}</Checkbox></template
      >
    </CheckboxGroup>
    <Button type="error" @click="delButton" class="delButton">删除</Button>
  </div>
</template>
<script>
export default {
  name: "DelGo",
  props: ["objList"],
  data() {
    return {
      indeterminate: true,
      checkAll: false,
      checkAllGroup: [],
      objectList: this.objList, //集合里的对象应该添加一个属性,名为id,值为主键的值
      objSelect: false
    };
  },
  methods: {
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;
      if (this.checkAll) {
        this.checkAllGroup = this.foodList;
        this.objSelect = true;
      } else {
        this.checkAllGroup = [];
        this.objSelect = false;
      }
    },
    checkAllGroupChange(data) {
      if (data.length === this.objectList.length) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    },
    delButton() {
      if (this.checkAllGroup.length == 0) {
        this.$Message.error("请先选择要删除的");
        return;
      }
      let data = this.checkAllGroup.toString();
      this.$emit("delButton", data); //删除按钮
    }
  }
};
</script>
<style lang="less">
.del-go {
  .delButton {
    margin-top: 20px;
  }
}
</style>
