<template>
  <div id="app" class="w-screen h-screen overflow-y-hidden overflow-x-auto" ref="app">
    <main class="container mx-auto h-full" @wheel="onMainScroll">
      <div class="flex justify-center space-x-4">
        <router-link text :to="{ name: 'Home' }" exact>Home</router-link>
        <router-link text :to="{ name: 'About' }" exact>About</router-link>
      </div>

      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'Base',

  methods: {
    onMainScroll(ev) {
      // 需要防抖
      ev.preventDefault();
      const down = ev.deltaY > 0;
      const up = ev.deltaY < 0;
      const appDom = this.$refs.app;
      console.log({ up, down, app: this.$refs.app });
      appDom.scroll({
        left: appDom.scrollLeft + (100 * +down) - (100 * +up),
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 120vw;
  max-width: 120vw;
}
</style>
