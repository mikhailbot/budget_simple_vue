<template>
  <div>
    <signup-form></signup-form>
  </div>
</template>

<script>
import SignupForm from '~/components/forms/SignupForm.vue'

export default {
  layout: 'no_auth',

  auth: false,

  components: {
    SignupForm
  }
}
</script>

<style>

</style>
