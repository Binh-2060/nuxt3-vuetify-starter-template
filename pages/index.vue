<script lang="ts" setup>
const globalStore = UseGlobalStore();

// onMounted(() => {
//   axios.get("/").then((res) => {
//     console.log(`result `, res);
//   });
// });
const datenow = ref(new Date());
const OnSetDate = (value: any) => {
  datenow.value = value;
};
</script>

<template>
  <div>{{ globalStore.count }}</div>
  <DatePicker :date="datenow" @onSetDate="OnSetDate" />
</template>
