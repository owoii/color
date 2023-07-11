// 各种颜色转换工具
import {
  ConvertToRGBArray,
  HexConvertToRGB,
  RGBConvertToHex,
} from "./ColorBaseUtils";
import { Color } from "~/types/LayoutTypes";

// 计算互补色
export function compColor(color: string) {}

/**
 * 根据 hex 字符串计算互补色
 * @param hex
 */
export function compColorByHex(hex: string) {
  let rgb = HexConvertToRGB(hex); //现将hex转为 RGB 数组

  rgb = compColorByRGB(rgb);
  // 计算出互补色
  const hexs = RGBConvertToHex(rgb);
  return hexs;
}

/**
 * 根据 rgb 计算互补色 (一般直接根据rgb计算)
 * @param rgb
 */
export function compColorByRGB(rgb: Color.RGB): number[] {
  rgb = ConvertToRGBArray(rgb);

  let r = 255 - rgb[0];
  let g = 255 - rgb[1];
  let b = 255 - rgb[2];

  return [r, g, b];
}

// 根据 HSL 计算互补色
// export function compColorByHSL() {}
