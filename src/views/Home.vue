<template>
  <div class="xmb h-full">
    <div class="xmb-horizon-bar flex flex-nowrap">
      <div class="xmb-list-wrapper bg-gray-200 p-2" v-for="n in 20" :key="n">
        <div class="xmb-list bg-green-200"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped lang="scss">
.xmb {
  padding: 0 80px;

  .xmb-list {
    width: 160px;
    height: 90px;
  }
}
</style>
