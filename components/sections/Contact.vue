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
const userInfo = ref({
  fullName: "",
  emailAddress: "",
  mobileNumber: "",
  emailSubject: "",
  message: "",
});
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
const isProcessing = ref(false);
const submitContact = async () => {
  isProcessing.value = true;
  try {
    const response = await $fetch(`/api/contact`, {
      method: "POST",
      body: userInfo.value,
    });
    isProcessing.value = false;
    if (response.success) {
      console.log(response.message)
    } else {
      console.log(response.message, response.error)
    }
  } catch (error) {
    isProcessing.value = false;
    console.error(error);
  }
};
</script>
<template>
  <section
    id="contact"
    class="contact fixed main-container w-full bottom-0 transform -translate-x-1/2 left-1/2 bg-[var(--bg-color)]"
    :class="active === '' ? 'overflow-y-auto' : ' overflow-hidden'"
  >
    <Transition name="fadeIn" mode="out-in">
      <div
        v-if="active === 'sections-contact'"
        class="flex justify-center items-center h-full"
      >
        <p
          class="text-center w-full text-2xl font-bold text-active"
          :class="active === 'sections-contact' ? 'active' : ''"
        >
          Contact
        </p>
      </div>
      <div v-else class="w-full h-full relative contact-body py-0 px-[9%]">
        <div
          class="contact-content-body w-full flex flex-col items-center justify-center py-[6rem]"
        >
          <h1 class="text-white heading relative">
            Contact <span>Me!</span>
            <div
              class="animated absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*1)] top-0 right-0 h-full bg-[var(--bg-color)]"
              :class="startAnimation ? 'w-0' : 'w-full'"
            ></div>
          </h1>
          <form method="POST" @submit.prevent="submitContact()">
            <div class="input-box">
              <div class="input-field">
                <input
                  v-model="userInfo.fullName"
                  type="text"
                  placeholder="Full Name"
                  required
                />
                <span class="focus"></span>
                <div
                  class="animated z-10 absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*2)] top-[-1px] right-[-1px] h-[103%] bg-[var(--bg-color)]"
                  :class="startAnimation ? 'w-0' : 'w-[103%] '"
                ></div>
              </div>
              <div class="input-field">
                <input
                  v-model="userInfo.emailAddress"
                  type="email"
                  placeholder="Email Address"
                  required
                />
                <span class="focus"></span>
                <div
                  class="animated z-10 absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*3)] top-[-1px] right-[-1px] h-[103%] bg-[var(--bg-color)]"
                  :class="startAnimation ? 'w-0' : 'w-[103%] '"
                ></div>
              </div>
            </div>
            <div class="input-box">
              <div class="input-field">
                <input
                  v-model="userInfo.mobileNumber"
                  type="number"
                  placeholder="Mobile Number"
                  required
                />
                <span class="focus"></span>
                <div
                  class="animated z-10 absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*4)] top-[-1px] right-[-1px] h-[103%] bg-[var(--bg-color)]"
                  :class="startAnimation ? 'w-0' : 'w-[103%] '"
                ></div>
              </div>
              <div class="input-field">
                <input
                  v-model="userInfo.emailSubject"
                  type="text"
                  placeholder="Email Subject"
                  required
                />
                <span class="focus"></span>
                <div
                  class="animated z-10 absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*5)] top-[-1px] right-[-1px] h-[103%] bg-[var(--bg-color)]"
                  :class="startAnimation ? 'w-0' : 'w-[103%] '"
                ></div>
              </div>
            </div>
            <div class="textarea-field relative">
              <textarea
                name=""
                id=""
                v-model="userInfo.message"
                cols="30"
                rows="10"
                placeholder="Your Message"
                required
              ></textarea>
              <span class="focus"></span>
              <div
                class="animated z-10 absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*6)] top-[-1px] right-[-1px] h-[103%] bg-[var(--bg-color)]"
                :class="startAnimation ? 'w-0' : 'w-[103%] '"
              ></div>
            </div>
            <div class="btn-box mx-auto !w-fit">
              <button class="btn" type="Submit" :disabled="isProcessing">
                Submit
              </button>
              <div
                class="animated z-10 absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*8)] top-[-1px] right-[-1px] h-[106%] bg-[var(--bg-color)]"
                :class="startAnimation ? 'w-0' : 'w-[103%] '"
              ></div>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </section>
</template>