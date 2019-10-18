<template>
  <div class="postmain">
    <template v-for="post in postList">
      <Card :key="post.postId" class="ca">
        <p class="j">发帖时间:{{ post.createdTime }}</p>
        <p class="j">发帖人:{{ post.user.userName }}</p>
        <a @click="goContent(post.postId)">帖子标题:{{ post.postTitle }}</a>
      </Card>
    </template>
    <template v-if="submitShow">
      <p class="pp">添加帖子</p>
      <Divider />
      <Input
        v-model="postTitle"
        placeholder="输入帖子标题"
        style="width: 150px"
      />
      <Input
        v-model="postContent"
        type="textarea"
        :rows="4"
        placeholder="输入帖子内容"
        class="in"
      />
      <Button type="primary" @click="addPost">提交</Button>
    </template>
  </div>
</template>
<script>
//帖子的组件
export default {
  name: "PostMain",
  props: ["postList", "pubPostShow"], //postList为帖子的集合，pubPostShow为是否显示添加帖子的操作
  data() {
    return {
      posts: this.postList,
      postTitle: "",
      postContent: "",
      submitShow: true
    };
  },
  mounted() {
    let c = typeof this.pubPostShow == "undefined";
    if (!c) {
      this.submitShow = this.pubPostShow; //如果用户定义评论功能可以不被显示则修改为false
    }
  },
  methods: {
    addPost() {
      if (!this.postTitle || !this.postContent) {
        this.$Message.error("请输入内容");
        return;
      }
      let data = { postTitle: this.postTitle, postContent: this.postContent };
      this.$emit("addPost", data);
    },
    goContent(postId) {
      this.$emit("goCommentPage", postId); //点击这个帖子后触发的时间
    }
  }
};
</script>
<style lang="less">
.postmain {
  margin: 10px 20px 20px 20px;
  .pp {
    font-size: 30px;
  }
  .in {
    width: 500px;
    display: block;
    margin: 20px 0px 20px 0px;
  }
  .ca {
    margin: 20px 0px 20px 0px;

    .j {
      margin: 10px 0px 10px 0px;
    }
  }
}
</style>
