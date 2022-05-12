<template>
  <li
    class="xmb-item-wrapper p-2"
    :class="{ active }"
  >
    <div
      class="xmb-item rounded-xl overflow-hidden cursor-pointer transform-gpu scale-90"
      @click="changeItemIndex()"
    >
      <img v-if="type === 'picture' && item.url" class="object-contain" :src="item.url" />

      <div v-else-if="type === 'text'" v-html="item.content"></div>
    </div>
  </li>
</template>

<script setup>
defineProps({
  type: {
    default: 'picture',
    type: String,
  },
  active: {
    default: false,
    type: Boolean,
  },
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits([
  'changeItemIndex',
]);

const changeItemIndex = () => {
  emit('changeItemIndex');
};
</script>
