<!-- 五色色卡 -->
<template>
  <div class="w-full flex flex-col gap-2 transition-all duration-300">
    <div
      class="flex w-full rounded-xl relative dark:border-gray-50 overflow-hidden border shadow-md flex-col transition-all"
    >
      <!-- 主色区域 -->
      <div
        class="w-full relative h-40"
        :style="`background:#${prop.colors.colors[0].hex}`"
      >
        <div
          class="opacity-0 duration-150 bg-black bg-opacity-40 rounded-md hover:opacity-50 absolute left-1 bottom-1 py-1 px-2"
        >
          <span class="text-white">#{{ prop.colors.colors[0].hex }}</span>
        </div>
      </div>

      <!-- 其它颜色区域 -->
      <div class="w-full flex h-10">
        <div
          class="w-full h-full relative"
          v-for="item in prop.colors.colors.slice(1)"
          :style="`background:#${item.hex}`"
          :key="item.id"
        >
          <div
            class="opacity-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 text-sm transition-all duration-150 hover:opacity-80"
          >
            <span class="text-white">#{{ item.hex }}</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="group dark:hover:bg-gray-700 flex items-center pl-12 rounded-lg gap-2 justify-center hover:bg-gray-100 py-1 px-4 duration-200 transition-all"
    >
      <span class="text-center text-md">{{ colors.name }}</span>
      <UTooltip
        text="复制"
        class="opacity-0 hover:text-gray-300 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
      >
        <Icon
          name="iconamoon:copy"
          size="20"
          @click="copyHex(colors.colors.map((e) => e.hex).join(','))"
        />
      </UTooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Color } from "@/types/LayoutTypes";
import Clipboard from "clipboard";
const copyHex = (hex: string) => {
  Clipboard.copy(hex);
};
type Props = {
  colors: Color.Colors;
};
const prop = defineProps<Props>();
</script>
