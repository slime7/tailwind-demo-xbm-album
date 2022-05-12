import { defineStore, acceptHMRUpdate } from 'pinia';
import { firstUpperCase } from '@/utils';

const useGlobalStore = defineStore('globalStore', {
  state: () => ({
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
  }),

  getters: {
    currentAlbum: (state) => state.albums[state.xmbListIndex].items,
  },

  actions: {
    setXmbIndex({ listIndex = undefined, itemIndex = undefined }) {
      if (typeof listIndex !== 'undefined' && listIndex !== this.xmbListIndex) {
        this.xmbItemIndex = 0;
        this.xmbListIndex = listIndex;
      }
      if (typeof itemIndex !== 'undefined' && itemIndex !== this.xmbItemIndex) {
        this.xmbItemIndex = itemIndex;
      }
    },
    increaseXmbIndex({ delta, type = 'list' }) {
      const stateName = `xmb${firstUpperCase(type)}Index`;
      let targetIndex = this[stateName] + delta;
      if (type === 'list' && targetIndex > this.albums.length) {
        targetIndex = this.albums.length;
      }
      if (type === 'item' && this.xmbListIndex !== this.albums.length) {
        const currentAlbum = this.albums[this.xmbListIndex].items;
        if (targetIndex > currentAlbum.length - 1) {
          targetIndex = currentAlbum.length - 1;
        }
      } else if (type === 'item' && this.xmbListIndex === this.albums.length && targetIndex > 1) {
        targetIndex = 1;
      }
      if (targetIndex < 0) {
        targetIndex = 0;
      }
      if (this[stateName] !== targetIndex) {
        if (type === 'list') {
          this.xmbItemIndex = 0;
        }
        this[stateName] = targetIndex;
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot));
}

export default useGlobalStore;
