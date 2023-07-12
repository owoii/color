import { defineStore } from "pinia";
import { RouteLocationNormalized } from "~/.nuxt/vue-router";

type State = {
  historys: CHistory.RouterInfo[];
};
export const useHistoryStore = defineStore("historyStore", {
  state: (): State => ({
    historys: [],
  }),
  getters: {
    getHistorys: (state) => state.historys,
  },
  actions: {
    addHistory(pageInfo: RouteLocationNormalized) {
      if (this.historys.find((e) => e.fullpath == pageInfo.fullPath)) return;

      this.historys.push({
        fullpath: pageInfo.fullPath,
        name: pageInfo.meta.name!,
      });
    },
    // 根据 name 删除一个路由记录
    deleteHistory(path: string) {
      if (this.historys.length > 1)
        this.historys = this.historys.filter((e) => e.fullpath != path);
    },
  },
});
