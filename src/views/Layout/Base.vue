<template>
  <div id="app" class="w-screen h-screen overflow-y-hidden overflow-x-auto" ref="app">
    <main class="container mx-auto h-full min-w-full" @wheel="mainScrollThrottled">
      <div class="flex justify-center space-x-4">
        <router-link text :to="{ name: 'Home' }" exact>Home</router-link>
        <router-link text :to="{ name: 'About' }" exact>About</router-link>
      </div>

      <router-view />
    </main>
  </div>
</template>

<script>
import { throttle } from '@/utils';

export default {
  name: 'Base',

  methods: {
    mainScrollThrottled: throttle(function mainScroll(ev) {
      ev.preventDefault();
      const down = ev.deltaY > 0;
      const up = ev.deltaY < 0;
      const appDom = this.$refs.app;
      appDom.scroll({
        left: appDom.scrollLeft + (100 * +down) - (100 * +up),
        behavior: 'smooth',
      });
    }, 100),
  },
};
</script>
