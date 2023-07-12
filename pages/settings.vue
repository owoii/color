<template>
  <div class="w-full flex flex-col">
    <ul class="flex border-b py-2 justify-center gap-1">
      <li>
        <UButton color="gray" variant="ghost" class="flex flex-col p-2">
          <Icon
            size="24"
            :name="
              $route.meta.name == '基础设置'
                ? 'iconamoon:category-fill'
                : 'iconamoon:category'
            "
          />
          基础设置
        </UButton>
      </li>
      <li>
        <UButton color="gray" variant="ghost" class="flex flex-col p-2">
          <Icon name="iconamoon:component" size="24" />
          布局设置
        </UButton>
      </li>
      <li>
        <UButton color="gray" variant="ghost" class="flex flex-col w-20">
          <Icon name="iconamoon:information-circle" size="24" />
          关于
        </UButton>
      </li>
    </ul>
    <div class="p-5 overflow-x-hidden overflow-y-scroll">
      <NuxtPage></NuxtPage>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  name: "设置",
});
</script>
