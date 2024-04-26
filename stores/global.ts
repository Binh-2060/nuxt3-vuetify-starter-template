export const UseGlobalStore = defineStore("global", {
  state() {
    return {
      count: 1,
    };
  },
  actions: {},
  getters: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(UseGlobalStore, import.meta.hot));
}
