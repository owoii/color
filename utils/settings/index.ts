import { createInstance } from "localforage";
// 用户设置数据库
const settingDB = createInstance({
  name: "color",
  storeName: "settingDB",
});

/**
 * 初始化系统设置数据
 */
export async function initSettingsDB() {
  // 判断数据库是否已经初始化
  const res = await settingDB.getItem("version");
  console.log(res);
}
