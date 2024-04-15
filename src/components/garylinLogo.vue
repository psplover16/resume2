<script setup>
import { ref, watch, onMounted, reactive } from "vue";
// import axios from "axios";
import { axiosPost } from "../utils/axios";
const logoStatus = ref("true");
const garyLin = ref("");
const garyLinAni1 = ref(false);
const garyLinOpacity = ref(1);

const url = "https://vh91wp.deta.dev";
// const urlParams = "warning";
const senddata = reactive({
  email: "psplover16@yahoo.com.tw",
  nickname: "",
  password: "",
});
const resData = ref();

function changeGarylinWord(toword, time) {
  // time 幾秒完成
  var towordLength = toword.length; //指定變成的文字
  // garyLin.value.replace("/*\u2000/","a")
  setTimeout(() => {
    if (garyLin.value.length == towordLength) {
      decreaseOpacity(1.5, 0.5);
      return;
    } else {
      garyLin.value += toword.split("")[garyLin.value.length];
      changeGarylinWord(toword, time);
    }
  }, (time * 1000) / towordLength);

  // 每幾秒取代一次
}

function decreaseOpacity(delayTimeTOfade, time) {
  garyLinAni1.value = true;
  setTimeout(() => {
    garyLinAni1.value = false;
    var interval1 = setInterval(() => {
      if (garyLinOpacity.value < 0.1) {
        garyLinOpacity.value = 0;
        clearInterval(interval1);
      } else {
        garyLinOpacity.value -= 0.1 * time;
      }
    }, (time * 1000) / 10);
  }, delayTimeTOfade * 1000);
}

onMounted(() => {
  console.log("mounted");

  // axiosPost(`${url}/api/register`, senddata,function(res){console.log(res)})
  //   // .post(`http://${url}/api`, { params: { status: urlParams } })
  //   .post(`${url}/api/register`, senddata)
  //   .then((res) => {
  //     //獲取伺服器的回傳資料
  //     resData.value = res.data;
  //     console.log(res);
  //   })
  //   .catch((error) => {
  //     console.log(error, "失敗");
  //   });
});

watch(garyLinOpacity, (val, oldVal) => {
  if (val <= 0) {
    logoStatus.value = false;
  }
});

changeGarylinWord("Gary's Design", 1);
</script>

<template>
  <div
    class="
      fixed
      w-full
      h-full
      flex
      justify-center
      items-center
      duration-500
      z-40
      top-0
    "
    :style="[{ background: `rgba(0,0,0,${garyLinOpacity - 0.5})` }]"
    v-if="logoStatus"
  >
    <div
      class="
        text-4xl
        w-[235px]
        lg:text-9xl lg:w-[825px]
        md:text-8xl md:w-[620px]
        sm:text-6xl sm:w-[390px]
        origin-center
      "
      :class="[{ 'animate-bounce': garyLinAni1 }]"
      :style="{ transform: `scale(${garyLinOpacity * 1})` }"
    >
      <span class="inline-block duration-1000">
        <!--    :class="[
          garyLinOpacity == 1 ? 'opacity-100 scale-1' : 'opacity-0 scale-150',
        ]" -->
        {{ garyLin }}</span
      >
    </div>
  </div>
</template>

<style scoped>
</style>
