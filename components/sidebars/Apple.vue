<!-- 果子风格的侧边栏 -->
<template>
  <div
    class="dark:bg-gray-800 h-full min-w-[200px] max-w-xs bg-gray-200 py-3 px-4 flex flex-col gap-5 justify-between transition-all duration-150"
  >
    <!-- 操作选项 -->
    <div class="flex flex-col gap-5">
      <h1>{{ getApplicationName() }}</h1>
      <draggable>
        <!-- 选项组 -->
        <AppleSideBarList
          v-for="list in sidebarList"
          :sidebar-info="list"
          :key="list.id"
        />
      </draggable>
    </div>

    <!-- 底部操作 -->
    <div>
      <ul>
        <AppleSideBarItem
          :sidebar-info="{
            title: `设置`,
            to: `/settings`,
            id: 1214,
            icon: `iconamoon:settings`,
          }"
        />
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import sidebarList from "@/assets/sidebarsList";

import { Color } from "~/types/LayoutTypes";
import { getApplicationName } from "~/utils/settings/ApplicationInfo";

const route = useRoute();
const meatInfo = computed(() => {
  return route.meta;
});

const goto = (item: string | Color.sidebar) => {
  // 如果是一个字符串的话,就直接进行跳转
  if (typeof item == "string") {
    navigateTo(item);
    return;
  }
  if (item && item.to) {
    // router.push(item.to);
    navigateTo(item.to);
  }
};
</script>
