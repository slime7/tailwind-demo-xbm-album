<template>
  <div id="app" class="w-screen h-screen overflow-hidden" ref="app">
    <main class="container mx-auto h-full min-w-full" @wheel="mainScrollThrottled">
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
      this.$store.commit('increaseXmbIndex', { delta: (+down - +up) });
    }, 150),
  },
};
</script>
