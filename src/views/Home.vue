<template>
  <div class="xmb h-full relative">
    <ul
        class="xmb-vertical-bar absolute transition-all"
        :style="xmbItemY"
    >
      <li
          class="xmb-item-wrapper p-2"
          v-for="(item, index) in album"
          :key="index"
      >
        <div
            class="xmb-item rounded-xl overflow-hidden cursor-pointer transform-gpu scale-90"
            :class="{ 'ring-2 ring-blue-900 ring-offset-2 scale-100': index - 1 === xmbItemIndex }"
            @click="changeItemIndex(index)"
        >
          <img class="object-contain" :src="item.url" v-if="item.url"/>
        </div>
      </li>
    </ul>

    <ul
        class="xmb-horizon-bar whitespace-nowrap min-w-max transition-transform"
        :style="xmbListX"
    >
      <li
          class="xmb-list-wrapper p-2 inline-block align-top"
          v-for="n in listCount"
          :key="n"
      >
        <div
            class="xmb-list-preview bg-green-200 rounded-xl overflow-hidden cursor-pointer"
            @click="changeListIndex(n - 1)"
        >
          <img class="object-contain" v-if="n === 1" :src="albums[n - 1].cover"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',

  computed: {
    listCount() {
      return this.$store.state.listCount;
    },
    xmbListIndex() {
      return this.$store.state.xmbListIndex;
    },
    xmbItemIndex() {
      return this.$store.state.xmbItemIndex;
    },
    xmbListX() {
      const width = 240;
      const gap = 16;
      return {
        transform: `translateX(-${this.xmbListIndex * (width + gap)}px)`,
      };
    },
    xmbItemY() {
      const height = 135;
      const gap = 16;
      return {
        transform: `translateY(-${(this.xmbItemIndex) * (height + gap)}px)`,
      };
    },
    albums() {
      return this.$store.state.albums;
    },
    album() {
      if (this.xmbListIndex !== 0) {
        return [];
      }
      const albumCopy = [...this.albums[this.xmbListIndex].items];
      albumCopy.splice(this.xmbItemIndex, 0, {});
      return albumCopy;
    },
  },

  methods: {
    changeListIndex(index) {
      this.$store.commit('setXmbIndex', { listIndex: index });
    },
    changeItemIndex(index) {
      const placeholderIndex = this.album.findIndex((i) => !i.url);
      this.$store.commit('setXmbIndex', { itemIndex: index >= placeholderIndex ? index - 1 : index });
    },
  },
};
</script>

<style scoped lang="scss">
.xmb {
  --xmb-item-width: 240px;
  --xmb-item-height: 135px;
  padding: calc(var(--xmb-item-height) * 1.5) 0 0 calc(var(--xmb-item-width) * 1.5);

  .xmb-horizon-bar {
    transform: translateX(0);
  }

  .xmb-vertical-bar {
    transform: translateY(0);
  }

  .xmb-list-preview {
    width: var(--xmb-item-width);
    height: var(--xmb-item-height);
  }

  .xmb-item {
    width: var(--xmb-item-width);
    height: var(--xmb-item-height);
  }
}
</style>
