<template>
  <div
    class="h-full min-w-[200px] gap-2 rounded-md rounded-b-none transition-all duration-200 max-w-xs px-2 flex justify-between items-center"
    :class="
      meatInfo.name == prop.tagInfo.name
        ? `bg-gray-200 dark:bg-gray-700 border-transparent`
        : ` rounded-none hover:bg-gray-300 dark:hover:bg-gray-800 hover:rounded-md  hover:rounded-b-none`
    "
    @click="goto"
  >
    <UTooltip text="当前为活动标签" v-if="meatInfo.name == prop.tagInfo.name">
      <div class="h-4 w-4 bg-yellow-400 rounded-full"></div>
    </UTooltip>
    <div v-else></div>
    <span>{{ prop.tagInfo.name }}</span>
    <UTooltip text="关闭标签" @click="deleteHistory">
      <span
        class="rounded-full flex items-center justify-center transition-all duration-300 hover:text-yellow-300"
      >
        <Icon name="iconamoon:close-circle-1" size="24"></Icon>
      </span>
    </UTooltip>
  </div>
</template>

<script lang="ts" setup>
import { useHistoryStore } from "@/stores/HistoryStore";

const route = useRoute();
const router = useRouter();
export type Props = {
  tagInfo: CHistory.RouterInfo;
};

const prop = defineProps<Props>();

const meatInfo = computed(() => route.meta);
const goto = () => {
  router.push(prop.tagInfo.fullpath);
};

const store = useHistoryStore();
const deleteHistory = () => {
  store.deleteHistory(prop.tagInfo.fullpath);
};
</script>
