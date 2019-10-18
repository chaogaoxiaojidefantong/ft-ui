<template>
  <Form
    ref="formValidate"
    :model="formValidate"
    :rules="ruleValidate"
    :label-width="80"
  >
    <FormItem label="Name" prop="userName">
      <Input v-model="formValidate.userName" placeholder="Enter  name"></Input>
    </FormItem>
    <FormItem label="E-mail" prop="userEmail">
      <Input
        v-model="formValidate.userEmail"
        placeholder="Enter  e-mail"
      ></Input>
    </FormItem>
    <FormItem label="phone" prop="phone">
      <Input
        v-model="formValidate.userPhone"
        placeholder="Enter  phone"
      ></Input>
    </FormItem>

    <FormItem label="Password" prop="passwd">
      <Input
        type="password"
        v-model="formValidate.userPwd"
        placeholder="enter  password"
      ></Input>
    </FormItem>
    <FormItem>
      <Button
        type="primary"
        @click="handleSubmit(formValidate)"
        style="width:70px"
        id="button1"
        >Submit</Button
      >
      <Button
        @click="handleReset('formValidate')"
        style="margin-left: 20px;width:70px"
        >Reset</Button
      >
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: "RegistForm",

  data() {
    return {
      formValidate: {
        userPwd: "",
        userPhone: "",
        userName: "",
        userEmail: "",
        userStatus: 2
      },
      ruleValidate: {
        userPhone: [
          {
            required: true,
            message: "The phone cannot be empty",
            trigger: "blur"
          }
        ],
        userPwd: [
          {
            required: true,
            message: "The password cannot be empty",
            trigger: "blur"
          }
        ],
        userName: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ],
        userEmail: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      document.getElementById("button1").disabled = true;
      this.$refs["formValidate"].validate(valid => {
        if (valid) {
          this.$emit("regist", name);
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
