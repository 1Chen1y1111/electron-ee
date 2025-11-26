import RouterIcon from "@/assets/router/router_icon_ajgl.svg?component";

const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  redirect: "/dashboard/index",
  component: Layout,
  meta: {
    icon: RouterIcon,
    title: "案件概览",
    rank: 1
  },
  children: [
    {
      path: "/dashboard/index",
      name: "Dashboard",
      component: () => import("@/views/dashboard/index.vue"),
      meta: {
        icon: RouterIcon,
        title: "案件概览"
      }
    }
  ]
} as RouteConfigsTable;
