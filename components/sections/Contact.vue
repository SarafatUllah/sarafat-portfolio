<script setup>
import { storeToRefs } from "pinia";
import { useSelectedSectionStore } from "~/stores/selectedSection";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  minLength,
  email,
  maxLength,
  helpers,
} from "@vuelidate/validators";
import { useInputValidations } from "~/composables/useValidations";

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

// validations
const rules = {
  fullName: { required, maxLength: maxLength(20) },
  emailAddress: {
    required,
    email,
  },
  emailSubject: { required, maxLength: maxLength(20) },
  message: { required, maxLength: maxLength(1200) },
};
const v$ = useVuelidate(rules, userInfo);

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
const { $toast } = useNuxtApp();
const submitContact = async () => {
  $toast("clear");
  v$.value.$touch();
  if (!v$.value.$invalid) {
    isProcessing.value = true;
    try {
      const response = await $fetch(`/api/contact`, {
        method: "POST",
        body: userInfo.value,
      });
      v$.value.$reset();
      isProcessing.value = false;
      if (response.success) {
        $toast("success", {
          message: response.message,
          className: "toasted-bg-success",
        });
      } else {
        $toast("error", {
          message: response.message,
          className: "toasted-bg-alert",
        });
      }
    } catch (error) {
      isProcessing.value = false;
      console.error(error);
    }
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
          <form novalidate method="POST" @submit.prevent="submitContact()">
            <div class="input-box">
              <div class="input-field relative">
                <InputsText
                  id="firstname"
                  v-model.trim="v$.fullName.$model"
                  type="text"
                  place-holder="Full Name"
                  name="firstname"
                  :error="v$.fullName.$error"
                  :error-message="v$.fullName.$errors"
                />
                <div
                  class="animated z-10 absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*2)] top-[-1px] right-[-1px] h-[103%] bg-[var(--bg-color)]"
                  :class="startAnimation ? 'w-0' : 'w-[103%] '"
                ></div>
              </div>
              <div class="input-field">
                <InputsText
                  id="emailAddress"
                  v-model.trim="v$.emailAddress.$model"
                  type="email"
                  place-holder="Email Address"
                  name="email"
                  :error="v$.emailAddress.$error"
                  :error-message="v$.emailAddress.$errors"
                />
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
                <InputsText
                  id="emailSubject"
                  v-model.trim="v$.emailSubject.$model"
                  type="text"
                  place-holder="Email Subject"
                  name="subject"
                  :error="v$.emailSubject.$error"
                  :error-message="v$.emailSubject.$errors"
                />
                <div
                  class="animated z-10 absolute transition-all duration-1000 ease-in-out delay-[calc(0.3s*5)] top-[-1px] right-[-1px] h-[103%] bg-[var(--bg-color)]"
                  :class="startAnimation ? 'w-0' : 'w-[103%] '"
                ></div>
              </div>
            </div>
            <div class="textarea-field relative">
              <InputsTextarea
                id="message"
                v-model.trim="v$.message.$model"
                place-holder="Your Message"
                name="message"
                :cols="30"
                :rows="10"
                :error="v$.message.$error"
                :error-message="v$.message.$errors"
              ></InputsTextarea>
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
