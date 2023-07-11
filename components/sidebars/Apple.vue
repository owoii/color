<!-- 果子风格的侧边栏 -->
<template>
  <div
    class="dark:bg-gray-800 h-full min-w-[200px] max-w-xs bg-gray-200 py-3 px-4 flex flex-col gap-5 justify-between transition-all duration-150"
  >
    <!-- 操作选项 -->
    <div class="flex flex-col gap-5">
      <h1>色彩</h1>
      <!-- 选项组 -->
      <ul
        class="flex flex-col"
        v-for="sidebarInfo in sidebarList"
        :key="sidebarInfo.id"
      >
        <!-- 选项组标题 -->
        <li class="text-sm mb-2 text-gray-400">{{ sidebarInfo.label }}</li>
        <li
          v-for="item in sidebarInfo.sidebars"
          :key="item.id"
          :class="
            meatInfo.name == item.title
              ? ` bg-yellow-500 from-orange-500 to-yellow-500 bg-gradient-to-r text-white`
              : 'hover:bg-gray-200 dark:hover:bg-gray-700'
          "
          class="flex items-center gap-2 py-1 px-3 rounded-md transition-all duration-200"
          @click="goto(item)"
        >
          <Icon :name="item.icon" />
          <span class="text-sm">{{ item.title }}</span>
        </li>
      </ul>
    </div>

    <!-- 底部操作 -->
    <div>
      <button
        class="w-full dark:hover:bg-gray-700 flex items-center gap-2 py-1 px-3 rounded-md hover:bg-gray-200 transition-all duration-250 hover:cursor-pointer"
        @click="goto('/settings')"
      >
        <Icon name="iconamoon:settings" />
        <span class="text-sm">设置</span>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import sidebarList from "@/assets/sidebarsList";
import { Color } from "~/types/LayoutTypes";

const route = useRoute();
const meatInfo = computed(() => {
  return route.meta;
});

const router = useRouter();

const goto = (item: string | Color.sidebar) => {
  // 如果是一个字符串的话,就直接进行跳转
  if (typeof item == "string") {
    router.push(item);
    return;
  }
  if (item && item.to) {
    router.push(item.to);
  }
};
</script>
