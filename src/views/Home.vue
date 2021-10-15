<template>
  <div class="xmb h-full">
    <div class="xmb-horizon-bar whitespace-nowrap">
      <div class="xmb-list-wrapper bg-gray-200 p-2 inline-block align-top" v-for="n in 20" :key="n">
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
