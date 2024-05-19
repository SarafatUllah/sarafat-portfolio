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
    id="education"
    class="education fixed main-container w-full bottom-0 transform -translate-x-1/2 left-1/2 bg-[var(--bg-color)]"
    :class="active === '' ? 'overflow-y-auto' : ' overflow-hidden'"
  >
    <Transition name="fadeIn" mode="out-in">
      <div
        v-if="active === 'sections-education'"
        class="flex justify-center items-center h-full"
      >
        <p
          class="text-center w-full text-2xl font-bold text-active"
          :class="active === 'sections-education' ? 'active' : ''"
        >
          My Journey
        </p>
      </div>
      <div v-else class="w-full h-full relative education-body py-0 px-[9%]">
        <div
          class="education-content-body w-full flex flex-col items-center justify-center py-[6rem]"
        >
          <h1 class="text-white heading relative">
            My <span>Journey</span>
            <div
              class="animated absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*1)] top-0 right-0 h-full bg-[var(--bg-color)]"
              :class="startAnimation ? 'w-0' : 'w-full'"
            ></div>
          </h1>
          <div class="education-row w-full">
            <div class="education-column">
              <h3 class="title relative">
                Education
                <div
                  class="animated absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*2)] top-0 right-0 h-full bg-[var(--bg-color)]"
                  :class="startAnimation ? 'w-0' : 'w-full'"
                ></div>
              </h3>
              <div class="education-box relative">
                <div class="education-content">
                  <div class="content">
                    <ClientOnly>
                      <div class="year">
                        <fa :icon="['fa', 'calendar-days']" />
                        2015-2020
                      </div>
                    </ClientOnly>
                    <h3>B.Sc Degree</h3>
                    <p>
                      University - Ahsanullah University of Science and
                      Technology, Dhaka, Bangladesh.
                    </p>
                  </div>
                </div>
                <div class="education-content">
                  <div class="content">
                    <ClientOnly>
                      <div class="year">
                        <fa :icon="['fa', 'calendar-days']" />
                        2013-2015
                      </div>
                    </ClientOnly>
                    <h3>HSC Degree - Science</h3>
                    <p>College - Dhaka City College, Dhaka, Bangladesh.</p>
                  </div>
                </div>
                <div class="education-content">
                  <div class="content">
                    <ClientOnly>
                      <div class="year">
                        <fa :icon="['fa', 'calendar-days']" />
                        2013
                      </div>
                    </ClientOnly>
                    <h3>SSC Degree - Science</h3>
                    <p>
                      School - Udayan Uchcha Madhyamik Bidyalaya, Dhaka,
                      Bangladesh.
                    </p>
                  </div>
                </div>
                <div
                  class="animated z-10 absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*3)] top-[-1px] right-[-1px] h-[106%] bg-[var(--bg-color)]"
                  :class="startAnimation ? 'w-0' : 'w-[103%] '"
                ></div>
              </div>
            </div>

            <div class="education-column">
              <h3 class="title relative">
                Experience
                <div
                  class="animated absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*4)] top-0 right-0 h-full bg-[var(--bg-color)]"
                  :class="startAnimation ? 'w-0' : 'w-full'"
                ></div>
              </h3>
              <div class="education-box relative">
                <div class="education-content">
                  <div class="content">
                    <ClientOnly>
                      <div class="year">
                        <fa :icon="['fa', 'calendar-days']" />
                        2021-Current
                      </div>
                    </ClientOnly>
                    <h3>Front End Developer</h3>
                    <p>
                      <strong>Company</strong> - Developer eXperience Hub,
                      Rajshahi, Bangladesh
                    </p>
                    <ul>
                      <li class="flex space-x-4 items-start">
                        <div
                          class="w-4 h-4 min-w-4 min-h-4 rounded-full border border-[var(--main-color)] mt-[1.3rem]"
                        ></div>
                        <p>
                          Collaborated with cross-functional teams to define
                          project requirements and deliver high-quality
                          solutions.
                        </p>
                      </li>
                      <li class="flex space-x-4 items-start">
                        <div
                          class="w-4 h-4 min-w-4 min-h-4 rounded-full border border-[var(--main-color)] mt-[1.3rem]"
                        ></div>
                        <p>
                          Developed responsive web applications using Vue.js and
                          Nuxt.js frameworks.
                        </p>
                      </li>
                      <li class="flex space-x-4 items-start">
                        <div
                          class="w-4 h-4 min-w-4 min-h-4 rounded-full border border-[var(--main-color)] mt-[1.3rem]"
                        ></div>
                        <p>
                          Contributed to projects within Scrum project
                          management environments.
                        </p>
                      </li>

                      <li class="flex space-x-4 items-start">
                        <div
                          class="w-4 h-4 min-w-4 min-h-4 rounded-full border border-[var(--main-color)] mt-[1.3rem]"
                        ></div>
                        <p>
                          Implemented user interface components and interactions
                          based on design specifications.
                        </p>
                      </li>
                      <li class="flex space-x-4 items-start">
                        <div
                          class="w-4 h-4 min-w-4 min-h-4 rounded-full border border-[var(--main-color)] mt-[1.3rem]"
                        ></div>
                        <p>
                          Optimized applications for performance, scalability,
                          and search engine optimization (SEO).
                        </p>
                      </li>
                      <li class="flex space-x-4 items-start">
                        <div
                          class="w-4 h-4 min-w-4 min-h-4 rounded-full border border-[var(--main-color)] mt-[1.3rem]"
                        ></div>
                        <p>
                          Conducted code reviews to ensure code quality,
                          readability, and adherence to best practices.
                        </p>
                      </li>
                      <li class="flex space-x-4 items-start">
                        <div
                          class="w-4 h-4 min-w-4 min-h-4 rounded-full border border-[var(--main-color)] mt-[1.3rem]"
                        ></div>
                        <p>
                          Assisted in the development of RESTful APIs and
                          integrated them with frontend systems.
                        </p>
                      </li>
                      <li class="flex space-x-4 items-start">
                        <div
                          class="w-4 h-4 min-w-4 min-h-4 rounded-full border border-[var(--main-color)] mt-[1.3rem]"
                        ></div>
                        <p>
                          Improved tools to boost user interaction and deliver
                          design versatility.
                        </p>
                      </li>
                      <li class="flex space-x-4 items-start">
                        <div
                          class="w-4 h-4 min-w-4 min-h-4 rounded-full border border-[var(--main-color)] mt-[1.3rem]"
                        ></div>
                        <p>
                          Produced websites compatible with multiple browsers.
                        </p>
                      </li>
                      <li class="flex space-x-4 items-start">
                        <div
                          class="w-4 h-4 min-w-4 min-h-4 rounded-full border border-[var(--main-color)] mt-[1.3rem]"
                        ></div>
                        <p>
                          Participated in agile development sprints and
                          contributed to the team’s success in delivering on
                          time.
                        </p>
                      </li>
                      <li class="flex space-x-4 items-start">
                        <div
                          class="w-4 h-4 min-w-4 min-h-4 rounded-full border border-[var(--main-color)] mt-[1.3rem]"
                        ></div>
                        <p>
                          Worked cooperatively with client services, sales, and
                          design team in a deadline-driven environment.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="education-content">
                  <div class="content">
                    <ClientOnly>
                      <div class="year">
                        <fa :icon="['fa', 'calendar-days']" />
                        2020-2021
                      </div>
                    </ClientOnly>
                    <h3>Front End Developer,</h3>
                    <p><strong>Company</strong> - Spiro, Dhaka, Bangladesh</p>
                    <ul>
                      <li class="flex space-x-4 items-start">
                        <div
                          class="w-4 h-4 min-w-4 min-h-4 rounded-full border border-[var(--main-color)] mt-[1.3rem]"
                        ></div>
                        <p>
                          Developed responsive web applications using Vue.js
                          frameworks.
                        </p>
                      </li>
                      <li class="flex space-x-4 items-start">
                        <div
                          class="w-4 h-4 min-w-4 min-h-4 rounded-full border border-[var(--main-color)] mt-[1.3rem]"
                        ></div>
                        <p>
                          Implemented user interface components and interactions
                          based on design specifications.
                        </p>
                      </li>
                      <li class="flex space-x-4 items-start">
                        <div
                          class="w-4 h-4 min-w-4 min-h-4 rounded-full border border-[var(--main-color)] mt-[1.3rem]"
                        ></div>
                        <p>
                          Assisted in the development of RESTful APIs and
                          integrated them with frontend systems.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="animated z-10 absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*5)] top-[-1px] right-[-1px] h-[106%] bg-[var(--bg-color)]"
                  :class="startAnimation ? 'w-0' : 'w-[103%]'"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>
