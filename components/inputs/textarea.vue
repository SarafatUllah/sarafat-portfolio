<template>
  <div class="inputContainer">
    <div class="relative">
      <textarea
        :id="id"
        :name="name"
        :placeHolder="placeHolder"
        :value="modelValue"
        :cols="cols"
        :rows="rows"
        v-bind="$attrs"
        @input="$emit('update:modelValue', $event.target.value)"
        @focusout="$emit('focusout:modelValue', $event.target.value)"
      />
      <span class="focus"></span>
    </div>
    <div v-if="error" class="error text-2xl text-red-500 text-left mt-1">
      <span v-for="error in errorMessage" :key="error.$uid">
        {{ errorMessages(error, modelValue) }}
      </span>
    </div>
  </div>
</template>
<script>
import { useInputValidations } from "~/composables/useValidations";
export default {
  props: {
    id: {
      type: String,
      required: false,
      default: null,
    },
    placeHolder: {
      type: String,
      required: false,
      default: "Type something",
    },
    name: {
      type: String,
      required: false,
      default: "",
    },
    errorMessage: {
      type: Array,
      required: false,
      default: () => [],
    },
    error: {
      type: Boolean,
      required: false,
      default: false,
    },
    modelValue: {
      type: String,
      default: "",
    },
    cols: {
      type: Number,
      default: 30,
    },
    rows: {
      type: Number,
      default: 10,
    },
  },
  setup(props) {
    // methods
    const { errorMessages } = useInputValidations();
    return {
      errorMessages,
    };
  },
};
</script>
