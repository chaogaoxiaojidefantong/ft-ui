<template>
  <div class="post-comment">
    <Card>
      <p class="pp">帖子</p>
      <p class="p">发帖时间:{{ post.createdTime }}</p>
      <p class="p">发帖人:{{ postName }}</p>
      <p class="p">发帖标题:{{ post.postTitle }}</p>
      <p class="p">内容:{{ post.postContent }}</p>
    </Card>
    <Divider />
    <p class="pp">评论</p>
    <template v-for="comment in commentList">
      <Card :key="comment.commentId" class="commentcard">
        <Avatar :src="comment.user.imgUrl" />
        <p class="qq">评论时间:{{ comment.createdTime }}</p>
        <p class="qq">评论人:{{ comment.user.userName }}</p>
        <p class="qq">评论内容:{{ comment.commentContent }}</p>
      </Card>
    </template>
    <Divider />
  </div>
</template>
<script>
//帖子与帖子下的评论
export default {
  name: "PostComment",
  props: ["onePost"],
  data() {
    return {
      post: this.onePost,
      commentList: this.onePost.commentList
    };
  }
};
</script>
<style lang="less">
.post-comment {
  margin: 10px 20px 20px 20px;
  .pp {
    font-size: 20px;
  }
  .p {
    font-size: 15px;
    margin: 10px 0px 10px 0px;
  }
  .in {
    width: 500px;
    display: block;
    margin: 20px 0px 20px 0px;
  }
  .commentcard {
    width: 500px;
    margin: 10px 0px 10px 0px;
    .qq {
      font-size: 13px;
    }
  }
}
</style>
