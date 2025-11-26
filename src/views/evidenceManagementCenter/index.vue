<script setup lang="ts">
import { useRouter } from "vue-router";

import { useCaseStoreHook } from "@/store/modules/case";
import TrashIcon from "./assets/trash.svg?component";

defineOptions({
  name: "EvidenceManagementCenter"
});

const router = useRouter();

const onCreateCaseHandler = () => {
  useCaseStoreHook().SET_ACTIVED_CASE("123");
  router.push({
    name: "Dashboard"
  });
};
</script>

<template>
  <div class="flex justify-center">
    <div class="max-w-[1200px] w-full">
      <!-- header -->
      <div class="flex justify-between items-center mb-[24px]">
        <div class="flex flex-col">
          <span class="text-[20px] font-bold leading-[40px]">
            案件管理中心
          </span>
          <span class="text-[14px] text-[pink] line-clamp-2">
            选择案件进入工作台，或创建新案件。案件的数据相互独立。
          </span>
        </div>

        <CyButton primary> +新建案件 </CyButton>
      </div>

      <!-- content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
        <div
          class="flex-c bg-[#fff] rounded-[8px] p-[16px]"
          @click="onCreateCaseHandler"
        >
          +新建案件
        </div>
        <div
          v-for="item in 10"
          :key="item"
          class="bg-[#fff] rounded-[8px] p-[16px]"
        >
          <div class="flex justify-between items-center mb-[12px]">
            <div class="w-[28px] h-[28px] bg-[pink] rounded-[4px]" />

            <div class="bg-[orange] p-[4px] leading-[20px] rounded-[4px]">
              123456
            </div>
          </div>

          <div class="mb-[12px]">
            <div class="font-bold leading-[22px] line-clamp-1">
              测试测算出测试测算出
            </div>
            <div
              class="text-[pink] text-[14px] leading-[22px] line-clamp-2 mb-[8px]"
            >
              描述：这是一个测试案件的描述信息描述：这是一个测试案件的描述信息
            </div>

            <div class="text-[14px]">
              <div><span>文件类型：</span><span>123</span></div>
              <div>
                <span>创建时间：</span>
                <span>2025.10.24 15:33</span>
              </div>
            </div>
          </div>

          <div
            class="h-[60px] border-t border-[pink] flex items-center justify-between"
          >
            <div class="flex items-center">
              <div class="w-[20px] h-[20px] rounded-full bg-[pink] mr-[20px]" />
              <div class="text-[14px]">张三</div>
            </div>

            <div class="flex items-center">
              <TrashIcon
                class="w-[16px] h-[16px] cursor-pointer mr-[12px] text-[gray] hover:text-primary"
              />
              <TrashIcon
                class="w-[16px] h-[16px] cursor-pointer text-[gray] hover:text-danger"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
