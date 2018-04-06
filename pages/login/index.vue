<template>
  <div>
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from '~/components/forms/LoginForm.vue'

export default {
  layout: 'no_auth',

  auth: false,

  components: {
    LoginForm
  }
}
</script>

<style>

</style>
