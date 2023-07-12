<template>
  <li
    :class="
      meatInfo.name == sidebarInfo.title
        ? ` bg-yellow-500 from-orange-500  to-yellow-500 bg-gradient-to-r text-white`
        : 'hover:bg-gray-300 dark:hover:bg-gray-700 '
    "
    class="flex items-center gap-2 py-1 px-3 rounded-md transition-all duration-200"
    @click="goto(sidebarInfo)"
  >
    <Icon :name="sidebarInfo.icon" />
    <span class="text-sm">{{ sidebarInfo.title }}</span>
  </li>
</template>
<script setup lang="ts">
import { Color } from "~/types/LayoutTypes";

type Props = {
  sidebarInfo: Color.sidebar;
};
defineProps<Props>();
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
