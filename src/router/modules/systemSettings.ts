import RouterIcon from "@/assets/router/router_icon_xtsz.svg?component";

const Layout = () => import("@/layout/index.vue");

export default {
  path: "/systemSettings",
  redirect: "/systemSettings/index",
  component: Layout,
  meta: {
    icon: RouterIcon,
    title: "系统设置",
    rank: 5
  },
  children: [
    {
      path: "/systemSettings/index",
      name: "SystemSettings",
      component: () => import("@/views/systemSettings/index.vue"),
      meta: {
        icon: RouterIcon,
        title: "系统设置"
      }
    }
  ]
} as RouteConfigsTable;
