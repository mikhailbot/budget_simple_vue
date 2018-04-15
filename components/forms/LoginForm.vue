<template>
  <div class="w-full max-w-sm m-auto p-2">
    <busy-overlay></busy-overlay>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
          Email
        </label>
        <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter focus:border-blue rounded w-full py-2 px-4 text-grey-darker outline-0" v-model="session.email" type="email" autofocus="true" required="true">
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter focus:border-blue rounded w-full py-2 px-4 text-grey-darker outline-0" v-model="session.password" type="password" @keyup.enter.prevent="login">
      </div>
      <div class="mb-6 text-red font-bold" v-if="this.error.length">
        {{ this.error}}
      </div>
      <div class="flex items-center justify-between">
        <button  @click="login" class="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded" type="button">
          Login
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker outline-0" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
  </div>
</template>

<script>
import BusyOverlay from '~/components/BusyOverlay.vue'

export default {
  components: {
    BusyOverlay
  },

  data () {
    return {
      session: {
        email: '',
        password: ''
      },

      error: ''
    }
  },

  methods: {
    async login () {
      const session = this.session
      this.error = ''

      return this.$auth
        .loginWith('local', {
          data: { session }
        })
        .catch((error) => {
          console.log(error.response)
          this.error = `Hmm we couldn't log you in, please try again!`
        })
    }
  }
}
</script>

<style>

</style>
