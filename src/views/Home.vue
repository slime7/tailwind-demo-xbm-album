<template>
  <div class="xmb h-full">
    <div
        class="xmb-horizon-bar whitespace-nowrap min-w-max transition-transform"
        :style="xmbListX"
    >
      <div
          class="xmb-list-wrapper p-2 inline-block align-top"
          v-for="n in listCount"
          :key="n"
      >
        <div
            class="xmb-list bg-green-200 rounded overflow-hidden cursor-pointer"
            :class="{ 'ring-2 ring-blue-900 ring-offset-2': n - 1 === xmbIndex }"
            @click="changeIndex(n - 1)"
        >
          <img class="object-contain" v-if="n === 1" :src="albums[0].cover"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  computed: {
    listCount() {
      return this.$store.state.listCount;
    },
    xmbIndex() {
      return this.$store.state.xmbIndex;
    },
    xmbListX() {
      return {
        transform: `translateX(-${this.xmbIndex * 176}px)`,
      };
    },
    albums() {
      return this.$store.state.albums;
    },
  },

  methods: {
    changeIndex(index) {
      this.$store.commit('setXmbIndex', index);
    },
  },
};
</script>

<style scoped lang="scss">
.xmb {
  padding: 135px 0 0 240px;

  .xmb-horizon-bar {
    transform: translateX(0);
  }

  .xmb-list {
    width: 160px;
    height: 90px;
  }
}
</style>
