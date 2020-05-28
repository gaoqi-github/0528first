<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- props通信 -->
      <!-- <NewComment :newComment="newComment" /> -->
      <!-- 自定义事件通信 -->
      <!-- <NewComment ref="new" /> -->
      <!-- 自定义事件通信简写 -->
      <NewComment @newComment="newComment" />
      <List :comments="comments" :delComment="delComment" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NewComment from "./components/NewComment";
import List from "./components/List";
export default {
  components: {
    NewComment,
    List
  },
  //挂载后，为子组件对象添加自定义事件
  mounted() {
    // this.$refs.new.$on("newComment", this.newComment)
  },
  data() {
    return {
      comments: [
        { id: 1, username: "凯特琳", content: "111" },
        { id: 2, username: "拉克丝", content: "222" },
        { id: 3, username: "金克斯", content: "333" }
      ],
    };
  },
  methods: {
    newComment(obj){
      this.comments.unshift(obj)
    },
    delComment(index){
      this.comments.splice(index,1)
    }
  },
};
</script>

<style scoped>

</style>
