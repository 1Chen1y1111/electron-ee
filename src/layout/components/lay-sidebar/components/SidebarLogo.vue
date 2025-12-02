<script setup lang="ts">
import { getTopMenu } from "@/router/utils";
import { getConfig } from "@/config";

defineProps({
  collapse: Boolean
});

const CustomConfig = getConfig().CustomConfig;
</script>

<template>
  <div class="my-2.5">
    <div class="h-14 flex-c" :class="{ collapses: collapse }">
      <router-link
        v-if="collapse"
        key="collapse"
        :to="getTopMenu()?.path ?? '/'"
      >
        <img :src="CustomConfig.Logo" alt="logo" />
      </router-link>
      <router-link v-else key="expand" :to="getTopMenu()?.path ?? '/'">
        <img :src="CustomConfig.LogoBlackText" alt="logo" />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  height: 56px !important;
}

.collapses {
  img {
    height: 44px !important;
  }
}
</style>
