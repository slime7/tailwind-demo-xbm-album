<template>
  <div id="app" class="w-screen h-screen overflow-hidden" ref="app">
    <main class="container mx-auto h-full min-w-full">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'Base',
};
</script>
