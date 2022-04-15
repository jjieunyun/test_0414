import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    board : [
      { id : 1, title : "첫번째 제목", memo : "첫번째 작성된 내용입니다." , click : 0 },
      { id : 2, title : "두번째 제목", memo : "두번째 작성된 내용입니다." , click : 0 },
    ]
  },
  getters: {
  },
  mutations: {
    addMemo (state, Memobox) {
      const id = state.board.length +1;
      state.board.push({id : id, title : Memobox.title, memo: Memobox.memo, click: 0});
    },
    addClick(state,id) {
      state.board[id-1].click++; 
    }
   
  },
  actions: {
  },
  modules: {
  }
})
