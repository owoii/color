import { Color } from "~/types/LayoutTypes";

// 一些底层的颜色工具,比如 一个字符串转为 hex数组

/**
 * 将 字符串 或 数组转为 RGB 数组
 * @param rgb
 * @returns
 */
export function ConvertToRGBArray(rgb: Color.RGB): number[] {
  // 判断给的是否是字符串
  if (!Array.isArray(rgb)) {
    rgb = rgb.split(",");
  }

  // 将字符串数组转为数字
  rgb = rgb.map((e) => {
    if (typeof e == "string") {
      e = parseInt(e);
    }
    return isNaN(e) ? 0 : e;
  });

  return rgb;
}

/**
 * 将 hex 字符串转换为rgb数组
 * @param hex
 * @returns
 */
export function HexConvertToRGB(hex: string): number[] {
  // 将hex字符串转为 hex 数组后转为rgb
  const [rHex, gHex, bHex] = ConvertToHex(hex);
  // 将得到的十六进制数组转为10进制
  return [parseInt(rHex, 16), parseInt(gHex, 16), parseInt(bHex, 16)];
}

/**
 * 将 hex 字符串转为 hex 数组
 * @param hex
 */
export function ConvertToHex(hex: string): string[] {
  hex = hex.replace("#", ""); // 去除#号

  const hexArray = ["ff", "ff", "ff"];

  if (/^#?([0-9a-fA-F]{3}){1,2}$/.test(hex)) {
    hex = hex.length === 3 ? expandShortHex(hex) : hex;

    hexArray[0] = hex.substring(0, 2);
    hexArray[1] = hex.substring(2, 4);
    hexArray[2] = hex.substring(4, 6);
  }

  return hexArray;
}
/**
 * 展开短十六进制,将只有三位的十六进制展开为六位
 * @param hex
 * @returns
 */
function expandShortHex(hex: string): string {
  return hex
    .split("")
    .map((char) => char + char)
    .join("");
}

/**
 * 将 RGB 转为 HEx 字符串
 * @param rgb
 * @returns
 */
export function RGBConvertToHex(rgb: Color.RGB): string {
  rgb = ConvertToRGBArray(rgb);
  //这里需要对转换的数据进行补0
  const hexValue = rgb.map((value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  });
  return hexValue.join("");
}
