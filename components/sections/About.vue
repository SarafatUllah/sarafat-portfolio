<script setup>
import { storeToRefs } from "pinia";
import { useSelectedSectionStore } from "~/stores/selectedSection";

const { currentSection, active } = storeToRefs(useSelectedSectionStore());
const { setActive } = useSelectedSectionStore();
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
</script>
<template>
  <section
    id="about"
    class="about fixed main-container w-full bottom-0 transform -translate-x-1/2 left-1/2 bg-[#112e42]"
    :class="active === '' ? 'overflow-y-auto' : ' overflow-hidden'"
  >
    <Transition name="fadeIn" mode="out-in">
      <div
        v-if="active === 'sections-about'"
        class="flex justify-center items-center w-full h-full"
      >
        <p
          class="text-center w-full text-2xl font-bold text-active"
          :class="active === 'sections-about' ? 'active' : ''"
        >
          About Me
        </p>
      </div>
      <div v-else class="w-full h-full relative about-body py-0 px-[9%]">
        <div
          class="about-content-body 2xl:h-full flex flex-col items-center justify-center py-[6rem]"
        >
          <h1 class="text-white heading relative">
            About <span>Me</span>
            <div
              class="animated absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*1)] top-0 right-0 h-full bg-[var(--second-bg-color)]"
              :class="startAnimation ? 'w-0' : 'w-full'"
            ></div>
          </h1>
          <div class="about-img">
            <div class="imgae-circle">
              <img src="~/assets/img/about_sarafat.png" alt="Sarafat Photo" />
            </div>
            <span class="circle-spin"></span>
            <div
              class="animated z-[99] absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*2)] top-0 right-0 h-full bg-[var(--second-bg-color)]"
              :class="startAnimation ? 'w-0' : 'w-full'"
            ></div>
          </div>
          <div class="about-content relative mt-10">
            <h2 class="relative">
              Frontend Developer
              <div
                class="animated absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*3)] top-0 right-0 h-full bg-[var(--second-bg-color)]"
                :class="startAnimation ? 'w-0' : 'w-full'"
              ></div>
            </h2>
            <div class="relative">
              <p>
                Hi there! I'm Sarafat Ayon, a Frontend Web Developer with over 3
                years of experience in crafting sleek, responsive web
                applications. I specialize in HTML, CSS and JavaScript, and I'm
                skilled in Vue.js and Nuxt.js for creating dynamic,
                high-performance sites.
                <br />
                <br />
                I love working with UI frameworks like Vuetify, Bootstrap, and
                Tailwind to build beautiful, user-friendly interfaces. My
                animation skills with GSAP and Anime.js add a touch of magic to
                my projects.
                <br />
                <br />
                I'm proficient in version control with Git and GitHub, and I
                excel in debugging, troubleshooting, and ensuring cross-browser
                compatibility. Integrating RESTful APIs and working within Agile
                methodologies are part of my everyday workflow.
                <br />
                <br />
                Let's create something amazing together! Connect with me on
                <a
                  href="https://www.linkedin.com/in/md-sarafat-ullah-7261ba1a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[var(--main-color)] !font-bold"
                  >LinkedIn</a
                >
                and explore my portfolio to know about me.
              </p>
              <div
                class="animated absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*4)] top-0 right-0 h-full bg-[var(--second-bg-color)]"
                :class="startAnimation ? 'w-0' : 'w-full'"
              ></div>
            </div>

            <!-- <div class="btn-box btns !w-[15rem] mx-auto relative">
              <button class="btn relative">Read More</button>
              <div
                class="animated z-20 absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*5)] top-[-1px] right-[-1px] h-[106%] bg-[var(--second-bg-color)]"
                :class="startAnimation ? 'w-0' : 'w-[103%]'"
              ></div>
            </div> -->
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>
