<script lang="ts" setup>
import axios from "@/helpers/axios";

const globalStore = UseGlobalStore();

onMounted(() => {
  axios.get("/").then((res) => {
    console.log(`result `, res);
  });
});
</script>

<template>
  <div>{{ globalStore.count }}</div>
</template>
