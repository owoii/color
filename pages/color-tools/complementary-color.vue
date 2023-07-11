<template>
  <div class="flex flex-col p-5 w-40 gap-5">
    <div class="flex gap-10 w-40">
      <div
        class="w-40 h-40 relative rounded-lg p-2"
        :style="`background:#${color}`"
      >
        <h1
          class="absolute bottom-2 left-2 text-2xl"
          :style="`color:#${textColor}`"
        >
          {{ color }}
        </h1>
        <h2 :style="`color:#${textColor}`">{{ textColor }}</h2>
      </div>
    </div>
    <div class="w-full">
      <input class="border-2 rounded-sm w-full p-2" v-model="color" />
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  name: "互补色工具",
});
import { compColorByHex } from "@/utils/ColorUtils";

const color = ref("f00000");
const textColor = computed(() => {
  const col = compColorByHex(color.value);
  return col;
});
</script>
