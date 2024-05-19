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
    id="skills"
    class="skills fixed main-container w-full bottom-0 transform -translate-x-1/2 left-1/2 bg-[var(--second-bg-color)]"
    :class="active === '' ? 'overflow-y-auto' : ' overflow-hidden'"
  >
    <Transition name="fadeIn" mode="out-in">
      <div
        v-if="active === 'sections-skills'"
        class="flex justify-center items-center h-full"
      >
        <p
          class="text-center w-full text-2xl font-bold text-active"
          :class="active === 'sections-skills' ? 'active' : ''"
        >
          Skills
        </p>
      </div>
      <div v-else class="w-full h-full relative skills-body py-0 px-[9%]">
        <div
          class="skills-content-body w-full flex flex-col items-center justify-center py-[6rem]"
        >
          <h1 class="text-white heading relative">
            My <span>Journey</span>
            <div
              class="animated absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*1)] top-0 right-0 h-full bg-[var(--second-bg-color)]"
              :class="startAnimation ? 'w-0' : 'w-full'"
            ></div>
          </h1>
          <div class="skills-row w-full">
            <div class="skills-column">
              <h3 class="title relative">
                Coding Skills
                <div
                  class="animated absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*2)] top-0 right-0 h-full bg-[var(--second-bg-color)]"
                  :class="startAnimation ? 'w-0' : 'w-full'"
                ></div>
              </h3>
              <div class="skills-box relative">
                <div class="skills-content">
                  <div class="progress">
                    <h3>HTML <span>90%</span></h3>
                    <div class="bar">
                      <span class="w-[90%]"></span>
                    </div>
                  </div>
                  <div class="progress">
                    <h3>CSS <span>90%</span></h3>
                    <div class="bar">
                      <span class="w-[90%]"></span>
                    </div>
                  </div>
                  <div class="progress">
                    <h3>Tailwind <span>70%</span></h3>
                    <div class="bar">
                      <span class="w-[70%]"></span>
                    </div>
                  </div>
                  <div class="progress">
                    <h3>Bootstrap <span>50%</span></h3>
                    <div class="bar">
                      <span class="w-[50%]"></span>
                    </div>
                  </div>
                  <div class="progress">
                    <h3>Javascript <span>60%</span></h3>
                    <div class="bar">
                      <span class="w-[60%]"></span>
                    </div>
                  </div>
                  <div class="progress">
                    <h3>Python <span>40%</span></h3>
                    <div class="bar">
                      <span class="w-[40%]"></span>
                    </div>
                  </div>
                  <div class="progress">
                    <h3>Vue/Nuxt <span>70%</span></h3>
                    <div class="bar">
                      <span class="w-[70%]"></span>
                    </div>
                  </div>
                  <div class="progress">
                    <h3>Animation <span>50%</span></h3>
                    <div class="bar">
                      <span class="w-[50%]"></span>
                    </div>
                  </div>
                  <div class="progress">
                    <h3>Version Control: Git, GitHub <span>80%</span></h3>
                    <div class="bar">
                      <span class="w-[80%]"></span>
                    </div>
                  </div>
                  <div class="progress">
                    <h3>Responsive Web Design <span>90%</span></h3>
                    <div class="bar">
                      <span class="w-[90%]"></span>
                    </div>
                  </div>
                  <div class="progress">
                    <h3>Cross-Browser Compatibility <span>90%</span></h3>
                    <div class="bar">
                      <span class="w-[90%]"></span>
                    </div>
                  </div>
                </div>
                <div
                  class="animated z-10 absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*3)] top-[-1px] right-[-1px] h-[106%] bg-[var(--second-bg-color)]"
                  :class="startAnimation ? 'w-0' : 'w-[103%] '"
                ></div>
              </div>
            </div>
            <div class="skills-column">
              <h3 class="title relative">
                Professional Skills
                <div
                  class="animated absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*4)] top-0 right-0 h-full bg-[var(--second-bg-color)]"
                  :class="startAnimation ? 'w-0' : 'w-full'"
                ></div>
              </h3>
              <div class="skills-box relative">
                <div class="skills-content">
                  <div class="progress">
                    <h3>Web Development <span>90%</span></h3>
                    <div class="bar">
                      <span class="w-[90%]"></span>
                    </div>
                  </div>
                  <div class="progress">
                    <h3>SEO <span>60%</span></h3>
                    <div class="bar">
                      <span class="w-[60%]"></span>
                    </div>
                  </div>
                  <div class="progress">
                    <h3>Website Performance <span>60%</span></h3>
                    <div class="bar">
                      <span class="w-[60%]"></span>
                    </div>
                  </div>
                  <div class="progress">
                    <h3>Web Security <span>40%</span></h3>
                    <div class="bar">
                      <span class="w-[40%]"></span>
                    </div>
                  </div>
                </div>
                <div
                  class="animated z-10 absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*5)] top-[-1px] right-[-1px] h-[106%] bg-[var(--second-bg-color)]"
                  :class="startAnimation ? 'w-0' : 'w-[103%] '"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>
