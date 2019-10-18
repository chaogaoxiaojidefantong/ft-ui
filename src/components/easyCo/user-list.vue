<template>
  <div class="user-list">
    <template v-for="user in users">
      <Card :key="user.userId" class="usercard">
        <Avatar :src="user.imgUrl" />
        <p class="p">用户名:{{ user.userName }}</p>
        <p class="p">邮箱:{{ user.userEmail }}</p>
        <p class="p">电话:{{ user.userPhone }}</p>
      </Card>
    </template>
  </div>
</template>
<script>
export default {
  name: "UserList",
  props: ["userList"],
  data() {
    return {
      users: this.userList
    };
  }
};
</script>
<style lang="less">
.user-list {
  .usercard {
    margin: 10px 0px 10px 0px;
    .p {
      font-size: 15px;
      margin: 10px 0px 10px 0px;
    }
  }
}
</style>
