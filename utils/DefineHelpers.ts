import { ApplicationConfig } from "~/types/ApplicationTypes";
import { ColorCard } from "~/types/ColorTypes";
import { SettingsConfig } from "~/types/SettingTypes";
// 定义各种数据的帮助方法

/**
 * 定义应用基本数据
 * @param config
 * @returns
 */
export const defineApplication = (config: Partial<ApplicationConfig>) => config;

/**
 * 定义应用的设置
 * @param config
 * @returns
 */
export const defineSettings = (config: Partial<SettingsConfig>) => config;

export const defineColorCard = (card: Partial<ColorCard>) => card;
