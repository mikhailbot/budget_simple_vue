<template>
  <div class="w-full h-full max-w-xs m-auto p-2 flex justify-center flex-col">
    <div class="block text-grey-darkest text-2xl font-bold mb-4">Create a new account</div>
    <form class="">
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter focus:border-blue rounded w-full py-2 px-4 text-grey-darker outline-0" type="text" v-model="name" ref="name">
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="account-types">
          Account type
        </label>
        <div class="relative">
          <select class="bg-grey-lighter appearance-none border-2 border-grey-lighter focus:border-blue rounded w-full py-2 px-4 text-grey-darker outline-0" id="account-types" v-model="type">
            <option value="debit_card">Debit Card</option>
            <option value="credit_card">Credit Card</option>
            <option value="investment">Investment</option>
          </select>
          <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <button @click.prevent="createAccount" class="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded" type="button">
          Create
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: [ 'planId' ],

  data () {
    return {
      name: '',
      type: ''
    }
  },

  mounted () {
    this.$refs.name.focus()
  },

  methods: {
    async createAccount () {
      try {
        await this.$store.dispatch('plan/createAccount', { planId: this.planId, account: { name: this.name, type: this.type }})
        this.$emit('close')
      }
      catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>

</style>
