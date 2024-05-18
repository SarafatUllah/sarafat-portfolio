<script setup>
import { storeToRefs } from "pinia";
import { useSelectedSectionStore } from "~/stores/selectedSection";

const { currentSection, currentSectionCookie } = storeToRefs(
  useSelectedSectionStore()
);
const { setSelectedSection, setActive } = useSelectedSectionStore();
onMounted(() => {
  if (currentSectionCookie.value) {
    setActive(currentSectionCookie.value);
    setSelectedSection(currentSectionCookie.value);
  } else {
    setActive("sections-home");
    setSelectedSection("sections-home");
  }
});
</script>
<template>
  <div id="container" class="w-full h-[calc(100%-80px)] relative pb-10">
    <Transition name="expandCollapse" mode="out-in">
      <component :is="currentSection"></component>
    </Transition>
  </div>
</template>
<style scoped>
.expandCollapse-leave-active {
  transition: all 1s ease-in-out;
}
.expandCollapse-enter-active {
  transition: all 1s ease-in-out;
}
.expandCollapse-enter-from,
.expandCollapse-leave-to {
  @apply w-[176px] h-[40px] rounded-2xl bottom-10 overflow-hidden p-0 bg-[#112e42];
}
</style>
