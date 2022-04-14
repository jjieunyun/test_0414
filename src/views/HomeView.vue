<template>
  <div class="home">
    <table>
      <tr>
        <td>번호</td>
        <td>제목</td>
         <td>조회수</td>
      </tr>
      <tr v-for="(item,index) in $store.state.board" :key="index">
        <td>{{item.id}}</td>
        <td @click="addClick(item.id)">
            {{item.title}}
        </td>
        <td>{{item.click}}</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
    }
  },
  computed : {
  },
  methods : {
    addClick(id) {
      this.$router.push(`/board/${id}`)
      this.$store.state.board[id-1].click++;
      
    }
  }
}
</script>
