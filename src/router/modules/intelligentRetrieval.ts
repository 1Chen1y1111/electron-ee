import RouterIcon from "@/assets/router/router_icon_znjs.svg?component";

const Layout = () => import("@/layout/index.vue");

export default {
  path: "/intelligentRetrieval",
  redirect: "/intelligentRetrieval/index",
  component: Layout,
  meta: {
    icon: RouterIcon,
    title: "智能检索",
    rank: 3
  },
  children: [
    {
      path: "/intelligentRetrieval/index",
      name: "IntelligentRetrieval",
      component: () => import("@/views/intelligentRetrieval/index.vue"),
      meta: {
        icon: RouterIcon,
        title: "智能检索"
      }
    }
  ]
} as RouteConfigsTable;
