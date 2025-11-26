import RouterIcon from "@/assets/router/router_icon_zjwj.svg?component";

const Layout = () => import("@/layout/index.vue");

export default {
  path: "/evidenceDocuments",
  redirect: "/evidenceDocuments/index",
  component: Layout,
  meta: {
    icon: RouterIcon,
    title: "证据文件",
    rank: 2
  },
  children: [
    {
      path: "/evidenceDocuments/index",
      name: "EvidenceDocuments",
      component: () => import("@/views/evidenceDocuments/index.vue"),
      meta: {
        icon: RouterIcon,
        title: "证据文件"
      }
    }
  ]
} as RouteConfigsTable;
