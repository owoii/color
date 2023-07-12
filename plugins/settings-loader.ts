import { initSettingsDB } from "~/utils/settings";

export default defineNuxtPlugin({
  name: "CSettings",
  async setup(nuxtApp) {},
  hooks: {
    "app:created"() {
      initSettingsDB();
    },
  },
});
