<template>
  <ul class="flex flex-col">
    <!-- 选项组标题 -->
    <li class="text-sm mb-2 text-gray-400">{{ sidebarInfo.label }}</li>
    <draggable>
      <AppleSideBarItem
        v-for="item in sidebarInfo.sidebars"
        :key="item.id"
        :sidebar-info="item"
      />
    </draggable>
  </ul>
</template>

<script lang="ts" setup>
import { Color } from "~/types/LayoutTypes";

type Props = {
  sidebarInfo: Color.sidebarList;
};

// 获取侧栏列表信息
defineProps<Props>();
</script>
