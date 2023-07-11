<!-- 默认布局风格为 apple 风格 -->
<template>
  <div class="w-screen h-screen app-layout select-none dark:bg-slate-950">
    <!-- 侧边栏 -->
    <SidebarApple />
    <!-- 页面 -->
    <div class="w-full">
      <ToolBarApple />
      <slot></slot>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.app-layout {
  display: flex;
}
</style>
