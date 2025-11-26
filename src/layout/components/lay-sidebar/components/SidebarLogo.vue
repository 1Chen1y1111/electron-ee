<script setup lang="ts">
import { getTopMenu } from "@/router/utils";
import { getConfig } from "@/config";

defineProps({
  collapse: Boolean
});

const CustomConfig = getConfig().CustomConfig;
</script>

<template>
  <div class="h-14 m-2.5 flex items-center" :class="{ collapses: collapse }">
    <router-link v-if="collapse" key="collapse" :to="getTopMenu()?.path ?? '/'">
      <img :src="CustomConfig.Logo" class="h-14" alt="logo" />
    </router-link>
    <router-link v-else key="expand" :to="getTopMenu()?.path ?? '/'">
      <img :src="CustomConfig.LogoBlackText" class="h-14" alt="logo" />
    </router-link>
  </div>
</template>

<style lang="scss" scoped></style>
