import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import { useToast } from "vue-toastification";
// import { ErrorMessage } from "~/types/toaster";

const options = {
   // You can set your default options here
  position: 'top-center',
  timeout: 5000,
  keepOnHover: true,
  hideProgressBar: true,
  icon: false,
  closeButton: false,
};


export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(Toast, options)
  const $toast = useToast();
  nuxtApp.provide('toast', (name, value) => {
    if (name === 'error') {
      $toast.error(value.message, { toastClassName: value.className })
    } else if (name === 'success') {
      $toast.success(value.message, { toastClassName: value.className })
    } else if (name === 'clear') {
      $toast.clear()
    }
  })
})

