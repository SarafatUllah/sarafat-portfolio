import { defineStore } from "pinia";

export const useHeaderSectionStore = defineStore("headerSection", () => {
  // state
  const showNavbarRef = ref<boolean>(false);

  // computed
  const showNavbar = computed(() => showNavbarRef.value);

  // actions
  const setShowNavbar = (payload: boolean) => {
    showNavbarRef.value = !showNavbarRef.value;
  };
  const setHideNavbar = (payload: boolean) => {
    showNavbarRef.value = false
  };
  return {
    setShowNavbar,
    showNavbar,

    setHideNavbar
  };
});
