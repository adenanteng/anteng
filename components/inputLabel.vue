<script setup lang="ts">
defineProps({
  value: String,
});
</script>

<template>
  <label class="block font-medium text-sm text-gray-700 dark:text-white ml-5 mb-1">
    <span v-if="value">{{ value }}</span>
    <span v-else><slot /></span>
  </label>
</template>