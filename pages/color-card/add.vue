<template>
  <div class="p-5 grid grid-cols-3 w-full gap-5">
    <div>
      <WhiteCard
        :colors="{
          id: 121,
          colors: [
            {
              hex: 'ffffff',
            },
          ],
          name: 'dsad',
        }"
      />
    </div>
    <div class="w-full h-full color rounded-md"></div>
    <div class="flex flex-col gap-5 rounded-md">
      <div class="w-full h-10 line-bg rounded-md"></div>
      <h2>R</h2>
      <URange v-model="rgb.r" class="h-10 text-red-500" :min="0" :max="255"></URange>
      <h2>G</h2>
      <URange v-model="rgb.g" :min="0" :max="255"></URange>
      <h2>B</h2>
      <URange v-model="rgb.b" :min="0" :max="255"></URange>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  name: "新增色卡",
});
const rgb = reactive({
  r: 0,
  g: 0,
  b: 0,
});

const color = computed(() => {
  return `rgb(${rgb.r},${rgb.g},${rgb.b})`;
});
</script>
<style lang="scss" scoped>
.color {
  background: v-bind(color);
}

.line-bg {
  background: linear-gradient(
    to right,
    red 0%,
    #ff0 17%,
    lime 33%,
    cyan 50%,
    blue 66%,
    #f0f 83%,
    red 100%
  );
}
</style>
