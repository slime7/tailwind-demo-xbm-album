import Vue from 'vue';
import Vuex from 'vuex';
import { firstUpperCase } from '@/utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listCount: 20,
    xmbListIndex: 0,
    xmbItemIndex: 0,
    albums: [
      {
        cover: '/mock/album1/01.png',
        desc: '',
        items: [
          {
            url: '/mock/album1/01.png',
            desc: '',
          },
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
        ],
      },
    ],
  },

  mutations: {
    setXmbIndex(state, { listIndex = undefined, itemIndex = undefined }) {
      if (typeof listIndex !== 'undefined') {
        state.xmbListIndex = listIndex;
      }
      if (typeof itemIndex !== 'undefined') {
        state.xmbItemIndex = itemIndex;
      }
    },
    increaseXmbIndex(state, { delta, type = 'list' }) {
      const stateName = `xmb${firstUpperCase(type)}Index`;
      state[stateName] += delta;
      if (state[stateName] > state.listCount - 1) {
        // state[stateName] = state.listCount - 1;
      }
      if (state[stateName] < 0) {
        state[stateName] = 0;
      }
    },
  },

  actions: {
  },
});
