<template>
  <div class="login">
    <Card class="card">
      <p slot="title">
        欢迎登录
      </p>
      <a slot="extra" @click="registPage">
        <Icon type="ios-loop-strong"></Icon>
        注册
      </a>
      <Divider type="vertical" slot="extra" />
      <a slot="extra" @click="changeForm" v-if="!loginUserCode">
        <Icon type="ios-loop-strong"></Icon>
        验证码登录
      </a>
      <a slot="extra" v-if="loginUserCode" @click="changeForm">
        <Icon type="ios-loop-strong"></Icon>
        密码登录
      </a>
      <Divider type="vertical" slot="extra" />
      <a slot="extra" @click="findPwd">
        <Icon type="ios-loop-strong"></Icon>
        找回密码
      </a>
      <Form
        ref="formInline"
        :model="formInline"
        :rules="ruleInline"
        v-if="!loginUserCode"
      >
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="email">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input
            type="password"
            v-model="formInline.password"
            placeholder="password"
          >
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="loginTo">登录</Button>
        </FormItem>
      </Form>
      <Form
        ref="formInline"
        :model="formInline"
        :rules="ruleInline"
        v-if="loginUserCode"
      >
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="email">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input
            type="password"
            v-model="formInline.password"
            placeholder="验证码"
          >
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="emailCheckGo" class="formButton"
            >发送验证码</Button
          >
          <Button type="primary" @click="loginCode">登录</Button>
        </FormItem>
      </Form>
      <!--<login-form @loginTo="loginTo" @emailCheckGo="emailCheckGo"></login-form> -->
    </Card>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { emailCheck } from "@/api/api.js";
export default {
  name: "login",
  methods: {
    ...mapActions(["login", "loginByCode"]),
    loginTo() {
      let user = {
        userEmail: this.formInline.user,
        userPwd: this.formInline.password
      };
      this.login(user).then(
        user => {
          //前端传回用户数据，为了判断是管理员还是普通用户
          this.goPage(user);
        },
        err => {
          this.$Message.error("密码错误");
        }
      );
    },
    emailCheckGo() {
      //发送邮箱验证码
      if (!this.formInline.user) {
        this.$Message.error("请先输入邮箱");
      }
      let user = { userEmail: this.formInline.user };
      emailCheck(user).then(
        res => {
          this.$Message.success("验证码发送成功");
        },
        err => {
          this.$Message.error("网络错误");
        }
      );
    },
    changeForm() {
      this.loginUserCode = !this.loginUserCode;
    },
    loginCode() {
      let data = {
        userEmail: this.formInline.user,
        verifyCode: this.formInline.password
      };
      this.loginByCode(data).then(
        res => {
          this.goPage(res);
        },
        err => {
          this.$Message.error("发生错误：" + err);
        }
      );
    },
    //跳转到找回密码的页面
    findPwd() {
      this.$router.push({ name: "findpwd" });
    },
    registPage() {
      this.$router.push({ name: "regist" });
    },

    goPage(res) {
      this.$Message.success("登录成功"); //res参数是诺言返回的参数
      if (res.userStatus == 1) {
        this.$router.push({ name: "adminMain" });
      } else if (res.userStatus == 2) {
        this.$router.push({ name: "clientMain" });
      }
    }
  },
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        password: [
          { required: true, trigger: "blur" },
          {
            type: "string",
            min: 3,
            message: "The password length cannot be less than 3 bits",
            trigger: "blur"
          }
        ]
      },
      //通过验证码登录
      loginUserCode: false
    };
  }
};
</script>
<style lang="less">
.login {
  background-image: url("../../assets/11.png");
  //background-size: cover;
  //background-position: center;
  width: 100%;
  height: 100%;
  //position: relative;
  .card {
    width: 350px;
    display: inline-block;
    margin: 200px 10px 0px 900px;
  }
  .formButton {
    margin: 0px 10px 0px 10px;
  }
}
</style>
