<template>
  <div>
    <draggable
      :list="tabList"
      class="h-10 bg-opacity-50 backdrop-blur-sm bg-gray-100 overflow-x-scroll overflow-y-hidden dark:bg-gray-900 w-full pt-2 px-5 flex"
    >
      <TabItem v-for="item in tabList" :key="item.fullpath" :tag-info="item" />
    </draggable>
  </div>
</template>

<script lang="ts" setup>
import { useHistoryStore } from "@/stores/HistoryStore";
const store = useHistoryStore();

const tabList = computed(() => {
  return store.getHistorys;
});
</script>
