<template>
  <div class="h-full w-full p-5 ">
    <div class="grid grid-cols-4 gap-5 w-full cursor-pointer">
      <WhiteCard :colors="item" v-for="item in testData" :key="item.id" />
    </div>

    <!-- flex items-center justify-center flex-col gap-5 -->
    <!-- <h1>还没有色卡呢,快添加一张色卡吧</h1>
    <button class="border-1 py-2 px-5 rounded-md flex items-center">
      <Icon name="iconamoon:sign-plus" size="24px"/>
      添加色卡</button> -->
  </div>
</template>
<script setup lang="ts">
import testData from "~/assets/testData";

definePageMeta({
  layout: "default",
  name: "全部分类",
});
</script>
