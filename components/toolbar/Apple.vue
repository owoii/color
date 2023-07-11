<template>
  <div class="h-12 bg-gray-100 flex justify-between items-center px-5">
    <!-- 左侧工具 -->
    <div class="flex items-center gap-1">
      <UButton color="gray" variant="ghost">
        <Icon name="iconamoon:arrow-left-2" size="24" />
      </UButton>
      <h1 class="text-md">{{ metaInfo.name }}</h1>
    </div>
    <!-- 右侧工具 -->
    <div class="flex items-center gap-1">
      <UTooltip text="新增色卡">
        <UButton color="gray" variant="ghost">
          <Icon name="iconamoon:sign-plus" size="24" />
        </UButton>
      </UTooltip>

      <UInput
        icon="i-heroicons-magnifying-glass-20-solid"
        size="sm"
        color="gray"
        trailing
      />
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const metaInfo = computed(() => {
  return route.meta;
});
</script>
