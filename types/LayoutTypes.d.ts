import { type RouteLocationRaw } from "#vue-router";
declare namespace Color {
  interface sidebar {
    icon: string;
    to?: string;
    id: string | number;
    title: string;
  }

  interface sidebarList {
    label: string;
    id: string | number;
    sidebars: sidebar[];
  }
  // 数据库对应的一条颜色数据
  interface Value {
    id: string | number;
    hex?: string;
    rgb?: string;
    hsl?: string;
    name?: string;
  }
  interface Colors {
    id: string | number;
    name: string;
    colors: Value[];
  }

  type RGB = string | number[] | string[];
}
