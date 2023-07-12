import { Color } from "@/types/LayoutTypes";

export const sidebarList: Color.sidebarList[] = [
  {
    label: "资源库",
    id: 1,
    sidebars: [
      {
        icon: "iconamoon:component",
        to: "/",
        id: 2,
        title: "全部色卡",
      },
      {
        icon: "iconamoon:category",
        to: "/",
        id: 0,
        title: "全部分类",
      },
      {
        icon: "iconamoon:clock",
        to: "/",
        id: 1,
        title: "最近使用",
      },
    ],
  },
  {
    label: "颜色工具",
    id: 1,
    sidebars: [
      {
        icon: "iconamoon:category",
        to: "/color-tools/complementary-color",
        id: 98,
        title: "互补色工具",
      },
      {
        icon: "iconamoon:category",
        to: "/",
        id: 0,
        title: "类比",
      },
      {
        icon: "iconamoon:clock",
        to: "/",
        id: 1,
        title: "单色",
      },
      {
        icon: "iconamoon:component",
        to: "/",
        id: 2,
        title: "三色",
      },
    ],
  },
  {
    label: "图片取色工具",
    id: 1,
    sidebars: [
      {
        icon: "iconamoon:category",
        to: "/",
        id: 4,
        title: "提取主题色",
      },
      {
        icon: "iconamoon:clock",
        to: "/",
        id: 9,
        title: "提取渐变色",
      },
      {
        icon: "iconamoon:component",
        to: "/",
        id: 12,
        title: "手动取色",
      },
    ],
  },
  {
    label: "功能测试",
    id: 5,
    sidebars: [
      {
        icon: "iconamoon:sign-lemniscate-duotone",
        to: "/test",
        id: 4,
        title: "新功能测试",
      },
    ],
  },
];
export default sidebarList;
