<script setup>
import { RouterLink, RouterView } from "vue-router";
import headerComp from "./components/headerComp.vue";
import garylinLogo from "./components/garylinLogo.vue";
import loading from "./components/loading.vue";
import { computed, isRef, watch } from 'vue'
import { storeToRefs } from "pinia";
import pinia from '@/stores/store'
import { useloadingStore } from "./stores/loading";

const loadingStore = useloadingStore(pinia);
const { loadingStatus } = storeToRefs(loadingStore);

console.log(isRef(loadingStatus), loadingStatus.value)
const a = computed(() => loadingStatus.value)
watch(loadingStatus, val => {
  console.log(val, 'asdasadsda')
})


</script>

<template>
  <HelloWorld msg="You did it!" class="text-gary" />
  <!-- <div class="text-[#53e14e] inline-block">213</div> -->
  <!-- <div class="wrapper w-10 text-blue-600">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  <garylinLogo />
  <headerComp />
  <loading :msg="123" v-if="a"/>

  <RouterView />
</template>

<style scoped>
</style>
