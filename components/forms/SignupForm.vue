<template>
  <div class="w-full max-w-sm m-auto p-2">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
          First Name
        </label>
        <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter focus:border-blue rounded w-full py-2 px-4 text-grey-darker outline-0" v-model="user.first_name" type="text" autofocus="true" required="true">
        <p class="text-red text-xs italic pt-2" v-for="error in errors.first_name" v-bind:key="error">{{ error }}</p>
      </div>
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
          Email
        </label>
        <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter focus:border-blue rounded w-full py-2 px-4 text-grey-darker outline-0" v-model="user.email" type="email" autofocus="true" required="true">
        <p class="text-red text-xs italic pt-2" v-for="error in errors.email" v-bind:key="error">{{ error }}</p>
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter focus:border-blue rounded w-full py-2 px-4 text-grey-darker outline-0" v-model="user.password" type="password" @keyup.enter="signup">
        <p class="text-red text-xs italic pt-2" v-for="error in errors.password" v-bind:key="error">{{ error }}</p>
      </div>
      <div class="flex items-center justify-between">
        <button  @click="signup" class="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded" type="button">
          Signup
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        first_name: '',
        email: '',
        password: ''
      },

      errors: {
        first_name: [], email: [], password: []
      }
    }
  },

  methods: {
    async signup () {
      const user = this.user

      try {
        await this.$axios.post('/users', { user })
        await this.login()
        await this.$router.push('/budgets')
      }
      catch (error) {
        this.errors = error.response.data.errors
      }
    },

    async login () {
      const session = this.user

      return this.$auth
        .loginWith('local', {
          data: { session }
        })
    }
  }
}
</script>

<style>
</style>
