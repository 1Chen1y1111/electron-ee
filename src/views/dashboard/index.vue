<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

defineOptions({
  name: "Dashboard"
});

const router = useRouter();
const routerName = computed(() => {
  return router.currentRoute.value.meta.title;
});
</script>

<template>
  <div class="flex flex-col">
    <!-- title -->
    <div class="text-[20px] font-bold mb-[8px]">{{ routerName }}</div>
  </div>
</template>
