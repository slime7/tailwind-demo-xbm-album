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
import useGlobalStore from '@/store/useGlobalStore';

const globalStore = useGlobalStore();

export default {
  name: 'XMB',

  methods: {
    mainScrollThrottled: throttle(function mainScroll(ev) {
      ev.preventDefault();
      const down = ev.deltaY > 0;
      const up = ev.deltaY < 0;
      globalStore.increaseXmbIndex({ delta: (+down - +up) });
    }, 150),
    onArrowKey(ev) {
      const { key } = ev;
      switch (key) {
        case 'ArrowRight':
          globalStore.increaseXmbIndex({ delta: 1 });
          break;
        case 'ArrowLeft':
          globalStore.increaseXmbIndex({ delta: -1 });
          break;
        case 'ArrowUp':
          globalStore.increaseXmbIndex({ delta: -1, type: 'item' });
          break;
        case 'ArrowDown':
          globalStore.increaseXmbIndex({ delta: 1, type: 'item' });
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
