<script setup lang="ts">
import { ref } from "vue";
import { FolderOpened } from "@element-plus/icons-vue";

defineOptions({
  name: "Dashboard"
});

const path = ref("");

const onSelectPath = async () => {
  const folderPath = await window.api.getFolderPath();
  if (folderPath) {
    path.value = folderPath;
  }
};
</script>

<template>
  <div class="flex flex-col gap-4 p-4">
    <div class="flex items-center gap-2">
      <span class="text-gray-600">路径：</span>
      <el-input
        v-model="path"
        placeholder="请选择或输入路径"
        readonly
        class="flex-1"
      />
      <el-button type="primary" @click="onSelectPath">
        <el-icon class="mr-1"><FolderOpened /></el-icon>
        选择路径
      </el-button>
    </div>
    <div v-if="path" class="text-sm text-gray-500">已选择: {{ path }}</div>
  </div>
</template>
