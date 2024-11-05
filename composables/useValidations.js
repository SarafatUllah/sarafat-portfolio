// import { useStore } from 'vuex'
// import countryAlphanumeric from '~/utils/countryFirstTwoCharacter'
// import { CHECK_EMAIL } from '~/constants/urls'
// import DOMPurify from 'dompurify'

export function useInputValidations() {
  // const store = useStore()
  const errorMessages = (param, modelValue) => {
    if (param.$validator === 'required' || modelValue === 'Select') {
      return 'The field is required'
    } else if (param.$validator === 'maxLength') {
      return `Maximum character is ${param.$params.max}`
    } else if (param.$validator === 'minLength') {
      return `Must be at least ${param.$params.min} characters`
    } else if (param.$validator === 'email') {
      return 'The value should be valid email'
    } else if (
      param.$validator === 'containsValidPassword' &&
      modelValue !== '' &&
      modelValue.length >= 12 &&
      modelValue.length <= 80
    ) {
      return param.$message
    } else if (
      param.$validator === 'countryFirstTwoCharacter' &&
      modelValue !== ''
    ) {
      return 'Please use the first two characters!'
    } else if (param.$validator === 'sameAs') {
      return 'The passwords should be the same'
    } else if (param.$validator === 'checkBusinessType') {
      return 'The field is required'
    } else if (param.$validator === 'checkPermission') {
      return param.$message
    }
  }
  // Check valid password
  const containsValidPassword = (value) => {
    if (value !== '' && value.length >= 12 && value.length <= 80) {
      const containsUppercase = /[A-Z]/.test(value)
      const containsLowercase = /[a-z]/.test(value)
      const containsNumber = /[0-9]/.test(value)
      const containsSpecial = /[_#?!@$%^&*-]/.test(value)
      return (
        containsUppercase &&
        containsLowercase &&
        containsNumber &&
        containsSpecial
      )
    }
  }
  const isValidHttpUrl = (string) => {
    let url
    try {
      url = new URL(string)
    } catch (_) {
      return false
    }
    return url.protocol === 'http:' || url.protocol === 'https:'
  }
  // Check valid BusinessType
  const checkBusinessType = (value) => {
    if (value === 'Select') {
      return false
    } else return true
  }
  const checkPermission = (value) => {
    if (value === 'Permission') {
      return false
    } else return true
  }

  // const checkEmail = async (value) => {
  //   const validEmail =
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   if (value === '') return true
  //   if (!validEmail.test(String(value).toLowerCase())) return true
  //   const response = await $fetch(CHECK_EMAIL, {
  //     method: 'POST',
  //     body: { email: value },
  //   })
  //   store.commit('SET_EMAIL_EXIST', response.success)
  // }

  // const countryFirstTwoCharacter = (params) => {
  //   return countryAlphanumeric.countryFirstTwoCharacter.includes(
  //     params.toUpperCase()
  //   )
  // }

  // const sanitizedOutput = ($event) => {
  //   // Configure DOMPurify to return only text
  //   const cleanConfig = {
  //     ALLOWED_TAGS: [], // No tags allowed, empty array means strip all
  //   }
  //   const data = DOMPurify.sanitize(
  //     $event,
  //     cleanConfig
  //   )
  //   return data
  // }

  return {
    errorMessages,
    checkBusinessType,
    containsValidPassword,
    // checkEmail,
    isValidHttpUrl,
    // countryFirstTwoCharacter,
    checkPermission,
    // sanitizedOutput,
  }
}
