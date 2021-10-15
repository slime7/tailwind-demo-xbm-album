import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listCount: 20,
    xmbIndex: 0,
    albums: [
      {
        cover: '/mock/album1/01.png',
        desc: '',
        items: [
          {
            url: '/mock/album1/02.png',
            desc: '',
          },
          {
            url: '/mock/album1/03.png',
            desc: '',
          },
          {
            url: '/mock/album1/04.png',
            desc: '',
          },
          {
            url: '/mock/album1/05.png',
            desc: '',
          },
          {
            url: '/mock/album1/06.png',
            desc: '',
          },
          {
            url: '/mock/album1/07.png',
            desc: '',
          },
        ],
      },
    ],
  },

  mutations: {
    setXmbIndex(state, index) {
      state.xmbIndex = index;
    },
    increaseXmbIndex(state, delta = 1) {
      state.xmbIndex += delta;
      if (state.xmbIndex > state.listCount) {
        state.xmbIndex = state.listCount;
      }
      if (state.xmbIndex < 0) {
        state.xmbIndex = 0;
      }
    },
  },

  actions: {
  },
});
