import RouterIcon from "@/assets/router/router_icon_znyp.svg?component";

const Layout = () => import("@/layout/index.vue");

export default {
  path: "/intelligentJudgment",
  redirect: "/intelligentJudgment/index",
  component: Layout,
  meta: {
    icon: RouterIcon,
    title: "智能研判",
    rank: 4
  },
  children: [
    {
      path: "/intelligentJudgment/index",
      name: "IntelligentJudgment",
      component: () => import("@/views/intelligentJudgment/index.vue"),
      meta: {
        icon: RouterIcon,
        title: "智能研判"
      }
    }
  ]
} as RouteConfigsTable;
