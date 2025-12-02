<script setup lang="ts">
import { useNav } from "@/layout/hooks/useNav";
import LaySidebarTopCollapse from "../../lay-sidebar/components/SidebarTopCollapse.vue";

import LogoutCircleRLine from "~icons/ri/logout-circle-r-line";
import Setting from "~icons/ri/settings-3-line";
import { useUserStoreHook } from "@/store/modules/user";

const {
  layout,
  device,
  logout,
  onPanel,
  pureApp,
  username,
  userAvatar,
  avatarsStyle,
  toggleSideBar
} = useNav();
</script>

<template>
  <div class="navbar bg-white shadow-xs shadow-[rgba(0,21,41,0.08)] pr-6">
    <LaySidebarTopCollapse
      v-if="device === 'mobile'"
      class="hamburger-container"
      :is-active="pureApp.sidebar.opened"
      @toggleClick="toggleSideBar"
    />

    <div v-if="layout === 'vertical'" class="vertical-header-right">
      <!-- 退出登录 -->
      <div class="flex items-center cursor-pointer group h-[60px] justify-end">
        <div class="w-[30px] h-[30px] flex-none">
          <img
            src="@/assets/common/avatar.png"
            class="w-[30px] h-[30px]"
            alt=""
          />
        </div>

        <div class="text-[14px] leading-[38px] mx-2">
          {{ useUserStoreHook().username || "-" }}
        </div>

        <div
          class="hidden group-hover:block absolute top-[60px] right-[30px] pt-1 z-999"
        >
          <div
            class="bg-white px-[30px] py-2.5 rounded-sm shadow-[0px_16px_38px_8px_#2B2E3214]"
          >
            <div class="text-[14px]">
              <div class="hover:text-primary" @click="logout">退出登录</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  overflow: hidden;

  .hamburger-container {
    float: left;
    height: 100%;
    line-height: 60px;
    cursor: pointer;
  }

  .vertical-header-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-width: 280px;
    height: 60px;
    color: #000000d9;

    .el-dropdown-link {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 60px;
      padding: 10px;
      color: #000000d9;
      cursor: pointer;

      p {
        font-size: 14px;
      }

      img {
        width: 22px;
        height: 22px;
        border-radius: 50%;
      }
    }
  }

  .breadcrumb-container {
    float: left;
    margin-left: 16px;
  }
}

.logout {
  width: 120px;

  ::v-deep(.el-dropdown-menu__item) {
    display: inline-flex;
    flex-wrap: wrap;
    min-width: 100%;
  }
}
</style>
