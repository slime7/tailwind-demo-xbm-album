<template>
  <XMB>
    <ul
      class="xmb-horizon-bar whitespace-nowrap min-w-max transition-transform"
      :style="xmbListX"
    >
      <li
        class="xmb-list-wrapper p-2 inline-block align-top relative"
        v-for="(album, index) in albums"
        :key="index"
      >
        <ul
          class="xmb-vertical-bar absolute left-0 top-0 transition-all"
          :style="xmbItemY"
          v-show="index === xmbListIndex"
        >
          <XMBItem
            v-for="(item, index) in album.items"
            :key="index"
            :item="item"
            @changeItemIndex="changeItemIndex(index)"
            :active="index === xmbItemIndex"
          />
        </ul>

        <div
          class="xmb-list-preview bg-emerald-200 rounded-xl overflow-hidden cursor-pointer relative z-10"
          @click="changeListIndex(index)"
        >
          <img class="object-contain" :src="album.cover" />
        </div>
      </li>

      <li class="xmb-list-wrapper p-2 inline-block align-top relative">
        <ul
          class="xmb-vertical-bar absolute left-0 top-0 transition-all"
          :style="xmbItemY"
          v-show="listCount === xmbListIndex"
        >
          <XMBItem
            type="text"
            :item="{ content: 111 }"
            @changeItemIndex="changeItemIndex(0)"
            :active="0 === xmbItemIndex"
          />

          <XMBItem
            type="text"
            :item="{ content: 222 }"
            @changeItemIndex="changeItemIndex(1)"
            :active="1 === xmbItemIndex"
          />
        </ul>

        <div
          class="xmb-list-preview bg-emerald-200 rounded-xl overflow-hidden cursor-pointer relative z-10"
          @click="changeListIndex(listCount)"
        >
          <div class="text-3xl text-center mt-8">关于</div>
        </div>
      </li>
    </ul>
  </XMB>
</template>

<script>
import XMB from '@/components/XMB.vue';
import XMBItem from '@/components/XMBItem.vue';

export default {
  name: 'Home',

  components: {
    XMB,
    XMBItem,
  },

  computed: {
    listCount() {
      return this.$store.state.albums.length;
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
  },

  methods: {
    changeListIndex(index) {
      this.$store.commit('setXmbIndex', { listIndex: index });
    },
    changeItemIndex(index) {
      this.$store.commit('setXmbIndex', { itemIndex: index });
    },
  },
};
</script>

<style lang="scss">
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

  .xmb-item-wrapper {
    &.active {
      margin-top: calc(var(--xmb-item-height) + 16px);
    }
  }

  .xmb-item {
    width: var(--xmb-item-width);
    height: var(--xmb-item-height);
  }
}
</style>
