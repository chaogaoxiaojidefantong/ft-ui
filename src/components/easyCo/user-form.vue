<template>
  <Form :model="formLeft" label-position="left" :label-width="100" class="fo">
    <FormItem label="头像">
      <Avatar :src="formLeft.imgUrl" size="large" />
    </FormItem>
    <FormItem label="上传">
      <Upload
        :action="uploadUrl"
        :data="sendData"
        :show-upload-list="show"
        :on-success="successButton"
      >
        <Button icon="ios-cloud-upload-outline">修改头像</Button>
      </Upload>
    </FormItem>
    <FormItem label="用户名">
      <Input v-model="formLeft.userName"></Input>
    </FormItem>
    <FormItem label="用户密码">
      <Input v-model="formLeft.userPwd" type="password"></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="updateButton">确认修改</Button>
    </FormItem>
  </Form>
</template>
<script>
//用户表单的组件
import { setTimeout } from "timers";
export default {
  name: "UserForm",
  props: ["userInfo", "uploadData", "actionUrl"], //userInfo为用户信息，uploadData为上传到后端的数据
  data() {
    return {
      formLeft: this.userInfo,
      sendData: this.uploadData,
      show: false,
      uploadUrl: this.actionUrl
    };
  },
  methods: {
    updateButton() {
      this.$emit("updateButton", this.formLeft); //点击修改按钮后触发的时间
    },
    successButton(response, file) {
      this.$emit("uploadsuccess", response); //上传成功后的时间
      this.formLeft.imgUrl = response.data;
    }
  }
};
</script>
