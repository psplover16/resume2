<script setup>
// slot練習用
import WelcomeItem from "./WelcomeItem.vue";

import { ref } from "vue";
const icon1 = ref("123");
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <!-- <DocumentationIcon /> -->
      {{ icon1 }}
    </template>
    <template v-slot:heading>DocumentationXZZZZZZZZZZZ</template>

    <!-- Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started. -->
  </WelcomeItem>
</template>
