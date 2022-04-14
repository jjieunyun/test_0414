<template>
  <div class="pageComponent">
    <h3>{{getTitle}}</h3>
    <p>{{getMemo}}</p>
  </div>
</template>

<script>
export default {
  name: 'pageComponent',
  computed : {
    getTitle() {
      return this.$store.state.board[this.$route.params.id-1].title
    },
    getMemo() {
      return this.$store.state.board[this.$route.params.id-1].memo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
