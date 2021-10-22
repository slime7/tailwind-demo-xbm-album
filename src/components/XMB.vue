<template>
  <div class="xmb h-full relative">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XMB',
};
</script>

<style lang="scss">
.xmb {
  --xmb-item-width: 240px;
  --xmb-item-height: 135px;
  padding: calc(var(--xmb-item-height) * 1.5) 0 0 calc(var(--xmb-item-width) * 1.5);
}
</style>
