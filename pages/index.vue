<template>
  <div class="h-full w-full p-5 overflow-y-scroll">
    <!-- 卡片渲染 -->
    <!-- <div> -->
    <draggable
      @change="log"
      :list="testData"
      class="grid grid-cols-4 gap-5 w-full cursor-pointer"
    >
      <TransitionGroup name="list">
        <WhiteCard :colors="item" v-for="item in testData" :key="item.id" />
      </TransitionGroup>
    </draggable>
    <!-- </div> -->
  </div>
</template>
<script setup lang="ts">
import testData from "~/assets/testData";

definePageMeta({
  layout: "default",
  name: "全部色卡",
});
const log = (e) => {
  console.log(e);
};
</script>
