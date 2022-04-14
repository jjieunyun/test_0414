<template>
  <div class="write">
    <h1>글을 작성하는 공간입니다</h1>
    <label for="">title : </label>
    <input type="text" v-model="title"> <br><br>
    <textarea placeholder="내용을 입력해주세요" name="" id="" cols="40" rows="10"  v-model="memo"></textarea> <br>
    <button @click="addMemo">완료</button>
  </div>
</template>

<script>
export default {
  name : 'WriteView',
  data() {
    return {
      title : '',
      memo : ''
    }
  },
  methods : {
    addMemo() {
      let Memobox = {
        title : this.title,
        memo : this.memo
      }
      this.$store.commit('addMemo',Memobox);
      this.$router.push('/');
    }
  }
}
</script>
