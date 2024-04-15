<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
     <!-- mt-20 -->
  <div class="w-2/3 text-center ml-auto mr-auto">
    <div class="inline-block"><RouterLink to="/">首頁</RouterLink></div>
    <div class="inline-block"><RouterLink to="/abousMe">自傳</RouterLink></div>
    <div class="inline-block"><RouterLink to="/web">網頁</RouterLink></div>
    <div class="inline-block"><RouterLink to="/game">遊戲</RouterLink></div>
  </div>
</template>

<style scoped>
</style>
