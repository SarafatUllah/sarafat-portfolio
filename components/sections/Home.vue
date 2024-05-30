<script setup>
import { storeToRefs } from "pinia";
import { useSelectedSectionStore } from "~/stores/selectedSection";
import { useHeaderSectionStore } from "~/stores/headerSection";

const { currentSection, active } = storeToRefs(useSelectedSectionStore());
const { setActive, setSelectedSection } = useSelectedSectionStore();
const { setHideNavbar } = useHeaderSectionStore();
const timeoutRef = ref(null);
const secondtimeoutRef = ref(null);
timeoutRef.value = setTimeout(() => {
  setActive("");
}, 800);
const startAnimation = ref(false);
onMounted(() => {
  secondtimeoutRef.value = setTimeout(() => {
    startAnimation.value = true;
  }, 1050);
});
onUnmounted(() => {
  if (timeoutRef.value) {
    clearTimeout(timeoutRef.value);
    timeoutRef.value = null;
  }
  if (secondtimeoutRef.value) {
    clearTimeout(secondtimeoutRef.value);
    secondtimeoutRef.value = null;
  }
});
const selectedSection = (value) => {
  if (value !== currentSection.value) {
    setActive(currentSection.value);
    setTimeout(() => {
      setActive(value);
      setSelectedSection(value);
    });
  }
};
</script>
<template>
  <section
    id="home"
    class="home fixed main-container w-full bottom-0 transform -translate-x-1/2 left-1/2 bg-transparent"
    :class="active === '' ? 'overflow-y-auto' : ' overflow-hidden'"
  >
    <Transition name="fadeIn" mode="out-in">
      <div
        v-if="active === 'sections-home'"
        class="flex justify-center items-center h-full"
      >
        <p
          class="text-center w-full text-2xl font-bold text-active"
          :class="active === 'sections-home' ? 'active' : ''"
        >
          Home
        </p>
      </div>
      <div
        v-else
        class="w-full h-full min-h-[700px] relative home-body flex items-center py-0 px-[9%]"
      >
        <div class="home-content">
          <h1 class="text-white relative">
            Hi, I'm <span>Sarafat Ayon</span>
            <div
              class="animated absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*2)] top-0 right-0 h-full bg-[#081b29]"
              :class="startAnimation ? 'w-0' : 'w-full'"
            ></div>
          </h1>
          <div class="text-animation relative whitespace-nowrap">
            <h2>Frontend Developer</h2>
            <div
              class="animated absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*3)] top-0 right-[-1px] h-full bg-[var(--bg-color)]"
              :class="startAnimation ? 'w-0' : 'w-[103%]'"
            ></div>
          </div>
          <div class="relative">
            <p>
              Hi there! I'm a Frontend Web Developer with over 3+ years of
              experience in crafting sleek, responsive web applications. I
              specialize in HTML, CSS and JavaScript, and I'm skilled in Vue.js
              and Nuxt.js for creating dynamic, high-performance sites.
              Experienced in building scalable and performant web applications.
              Strong problem-solving abilities and a passion for clean and
              efficient code. Committed to delivering exceptional user
              experiences.
            </p>
            <div
              class="animated absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*4)] top-0 right-0 h-full bg-[var(--bg-color)]"
              :class="startAnimation ? 'w-0' : 'w-full'"
            ></div>
          </div>
          <div class="btn-box">
            <button
              class="btn"
              @click.stop="selectedSection('sections-contact'), setHideNavbar()"
            >
              Hire Me
            </button>
            <button
              class="btn"
              @click.stop="selectedSection('sections-contact'), setHideNavbar()"
            >
              Let's Talk
            </button>
            <div
              class="animated z-20 absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*5)] top-[-1px] right-[-1px] h-[103%] bg-[var(--bg-color)]"
              :class="startAnimation ? 'w-0' : 'w-[103%]'"
            ></div>
          </div>
        </div>
        <ClientOnly>
          <div
            class="home-sci absolute bottom-[4rem] w-[170px] flex justify-start space-x-8"
          >
            <a
              href="https://www.facebook.com/md.sarafat.ayon?mibextid=kFxxJD"
              target="_blank"
              rel="noopener noreferrer"
              ><fa :icon="['fab', 'facebook-f']"
            /></a>
            <a
              href="https://www.linkedin.com/in/md-sarafat-ullah-7261ba1a4/"
              target="_blank"
              rel="noopener noreferrer"
              ><fa :icon="['fab', 'linkedin']"
            /></a>
            <!-- <a href="#"><fa :icon="['fab', 'twitter']" /></a> -->

            <div
              class="animated z-20 absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*6)] top-[-1px] right-[-1px] h-[106%] bg-[var(--bg-color)]"
              :class="startAnimation ? 'w-0' : 'w-[103%]'"
            ></div>
          </div>
        </ClientOnly>
        <div class="bgImageHover">
          <div
            class="animated z-20 absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*7)] top-0 right-0 h-full bg-[var(--bg-color)]"
            :class="startAnimation ? 'w-0' : 'w-full'"
          ></div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped></style>
