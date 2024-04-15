<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="
      fixed
      z-50
      w-full
      h-full
      bg-[rgba(0,0,0,.5)]
      flex
      justify-center
      items-center
      top-0
    "
    v-if="true"
  >
    <img src="../assets/img/loading.svg" class="animate-spin w-1/12" />
  </div>
</template>

<style scoped>
</style>
