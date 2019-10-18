<template>
  <div class="regist">
    <Card style="width:350px" class="card">
      <p slot="title">
        注册信息
      </p>
      <ul>
        <regist-form @regist="regist"></regist-form>
      </ul>
    </Card>
  </div>
</template>
<script>
import { registGo } from "@/api/api.js";
import RegistForm from "_c/regist-form";
import { mapActions } from "vuex";
export default {
  components: { RegistForm },
  methods: {
    regist(name) {
      registGo(name).then(
        res => {
          if ((res.data.status = 200)) {
            this.$Message.success("注册成功");
            this.$router.push({ name: "login" });
            return;
          }
          this.$Message.error("注册失败");
        },
        err => {
          this.$Message.error("网络错误");
        }
      );
    }
  }
};
</script>
<style lang="less">
.regist {
  background-image: url("../../assets/11.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: relative;
  .card {
    width: 250px;
    display: inline-block;
    margin: 200px 10px 0px 900px;
  }
}
</style>
