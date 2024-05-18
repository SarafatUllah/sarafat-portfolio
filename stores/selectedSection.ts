import { defineStore } from "pinia";

export const useSelectedSectionStore = defineStore("selectedSection", () => {
  // state
  const currentSectionRef = ref<string>("");
  const activeRef = ref<string>("");
  const currentSectionCookieRef = useCookie("currentSectionCookie");

  // computed
  const currentSection = computed(() => currentSectionRef.value);
  const active = computed(() => activeRef.value);
  const currentSectionCookie = computed(() => currentSectionCookieRef.value);

  // actions
  const setSelectedSection = (payload: string) => {
    currentSectionRef.value = payload;
    currentSectionCookieRef.value = payload;
  };
  const setActive = (payload: string) => {
    activeRef.value = payload;
  };
  return {
    setSelectedSection,
    currentSection,

    setActive,
    active,

    currentSectionCookie,
  };
});
