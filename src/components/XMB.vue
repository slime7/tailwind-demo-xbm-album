<template>
  <div
    class="xmb h-full relative"
    ref="xmb"
    @wheel="mainScrollThrottled"
  >
    <slot></slot>
  </div>
</template>

<script>
import { throttle } from '@/utils';

export default {
  name: 'XMB',

  methods: {
    mainScrollThrottled: throttle(function mainScroll(ev) {
      ev.preventDefault();
      const down = ev.deltaY > 0;
      const up = ev.deltaY < 0;
      this.$store.commit('increaseXmbIndex', { delta: (+down - +up) });
    }, 150),
    onArrowKey(ev) {
      const { key } = ev;
      switch (key) {
        case 'ArrowRight':
          this.$store.commit('increaseXmbIndex', { delta: 1 });
          break;
        case 'ArrowLeft':
          this.$store.commit('increaseXmbIndex', { delta: -1 });
          break;
        case 'ArrowUp':
          this.$store.commit('increaseXmbIndex', { delta: -1, type: 'item' });
          break;
        case 'ArrowDown':
          this.$store.commit('increaseXmbIndex', { delta: 1, type: 'item' });
          break;
        default:
          break;
      }
    },
  },

  mounted() {
    document.addEventListener('keyup', this.onArrowKey);
  },
};
</script>

<style lang="scss">
.xmb {
  --xmb-item-width: 240px;
  --xmb-item-height: 135px;
  padding: calc(var(--xmb-item-height) * 1.5) 0 0 calc(var(--xmb-item-width) * 1.5);
}
</style>
