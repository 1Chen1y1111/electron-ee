<script setup lang="ts">
defineProps({
  collapse: Boolean
});
</script>

<template>
  <div class="mt-2 px-4">
    <div
      v-if="!collapse"
      class="flex flex-col w-full h-28 border border-[#EBEDF0] rounded-lg p-3 cursor-pointer"
    >
      <div class="text-xs text-[#5F6A7A] leading-4 mb-2">当前案件</div>
      <div class="text-sm text-[#1F2733] font-bold leading-5 mb-1 line-clamp-1">
        Web 服务器入侵痕迹分析
      </div>
      <div
        class="leading-5 text-primary text-[10px] px-1 rounded-1 bg-[#EBF5FF]"
      >
        CASE-2023-NUM
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
