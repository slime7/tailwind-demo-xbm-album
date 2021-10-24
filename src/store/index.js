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
      {
        cover: '/mock/album1/07.png',
        desc: '',
        items: [
          {
            url: '/mock/album1/07.png',
            desc: '',
          },
          {
            url: '/mock/album1/08.png',
            desc: '',
          },
          {
            url: '/mock/album1/09.png',
            desc: '',
          },
        ],
      },
      {
        cover: '/mock/album1/10.png',
        desc: '',
        items: [
          {
            url: '/mock/album1/10.png',
            desc: '',
          },
          {
            url: '/mock/album1/11.png',
            desc: '',
          },
          {
            url: '/mock/album1/12.png',
            desc: '',
          },
        ],
      },
      {
        cover: '/mock/album1/13.png',
        desc: '',
        items: [
          {
            url: '/mock/album1/13.png',
            desc: '',
          },
          {
            url: '/mock/album1/14.png',
            desc: '',
          },
          {
            url: '/mock/album1/15.png',
            desc: '',
          },
          {
            url: '/mock/album1/16.png',
            desc: '',
          },
        ],
      },
    ],
  },

  getters: {
    currentAlbum: (state) => state.albums[state.xmbListIndex].items,
  },

  mutations: {
    setXmbIndex(state, { listIndex = undefined, itemIndex = undefined }) {
      if (typeof listIndex !== 'undefined' && listIndex !== state.xmbListIndex) {
        state.xmbItemIndex = 0;
        state.xmbListIndex = listIndex;
      }
      if (typeof itemIndex !== 'undefined' && itemIndex !== state.xmbItemIndex) {
        state.xmbItemIndex = itemIndex;
      }
    },
    increaseXmbIndex(state, { delta, type = 'list' }) {
      const stateName = `xmb${firstUpperCase(type)}Index`;
      let targetIndex = state[stateName] + delta;
      if (type === 'list' && targetIndex > state.albums.length) {
        targetIndex = state.albums.length;
      }
      if (type === 'item' && state.xmbListIndex !== state.albums.length) {
        const currentAlbum = state.albums[state.xmbListIndex].items;
        if (targetIndex > currentAlbum.length - 1) {
          targetIndex = currentAlbum.length - 1;
        }
      } else if (type === 'item' && state.xmbListIndex === state.albums.length && targetIndex > 1) {
        targetIndex = 1;
      }
      if (targetIndex < 0) {
        targetIndex = 0;
      }
      if (state[stateName] !== targetIndex) {
        if (type === 'list') {
          state.xmbItemIndex = 0;
        }
        state[stateName] = targetIndex;
      }
    },
  },

  actions: {},
});
