<template>
  <div class="w-full h-full max-w-sm m-auto p-6 flex justify-center flex-col">
    <div class="block text-grey-darkest text-2xl font-bold mb-4">Add a new transaction</div>
    <form class="">
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="date">
          Date
        </label>
        <input v-model="date" class="bg-grey-lighter appearance-none border-2 border-grey-lighter focus:border-blue rounded w-full py-2 px-4 text-grey-darker outline-0" type="date" id="date" />
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="account">
          Account
        </label>
        <select v-model="account_id" class="bg-grey-lighter appearance-none border-2 border-grey-lighter focus:border-blue rounded w-full py-2 px-4 text-grey-darker outline-0" id="account">
          <option v-for="account in accounts" :value="account.id" :key="account.id">
            {{ account.name }}
          </option>
        </select>
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="merchant">
          Merchant
        </label>
        <input v-model="merchant" class="bg-grey-lighter appearance-none border-2 border-grey-lighter focus:border-blue rounded w-full py-2 px-4 text-grey-darker outline-0" type="text" id="merchant"/>
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="category">
          Category
        </label>
        <select v-model="category_id" class="bg-grey-lighter appearance-none border-2 border-grey-lighter focus:border-blue rounded w-full py-2 px-4 text-grey-darker outline-0" id="category">
          <option v-for="category in categories" :value="category.id" :key="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="mb-6 pr-2 w-1/2 inline-block">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="outflow">
          Outflow
        </label>
        <currency-input v-model="outflow" :valueInCents="0" id="outflow"></currency-input>
      </div>
      <div class="mb-6 w-1/2 inline-block">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="inflow">
          Inflow
        </label>
        <currency-input v-model="inflow" :valueInCents="0" id="inflow"></currency-input>
      </div>
      <div class="flex items-center justify-center">
        <button @click.prevent="createTransaction" class="bg-green hover:bg-green-light text-white font-bold py-2 px-4 border-b-4 border-green-dark hover:border-greeb rounded" type="button">
          Add transaction
        </button>
        <button @click.prevent="$emit('close')" class="ml-2 text-grey-darker font-bold bg-grey-light hover:bg-grey-lighter rounded border-b-4 border-grey hover:border-grey-light py-2 px-4" type="button">
          Close
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import CurrencyInput from '~/components/CurrencyInput.vue'

export default {
  props: [ 'planId'],

  components: {
    CurrencyInput
  },

  data () {
    return {
      date: '',
      merchant: '',
      category_id: undefined,
      inflow: 0,
      outflow: 0,
      account_id: undefined
    }
  },

  methods: {
    async createTransaction () {
      try {
        await this.$store.dispatch('plan/createTransaction', { planId: this.planId, transaction: this.$data })
        this.$emit('close')
      }
      catch (error) {
        console.log(error)
      }
    }
  },

  computed: {
    categories () {
      return this.$store.getters['plan/listCategories']
    },

    accounts () {
      return this.$store.getters['plan/listAccounts']
    }
  }
}
</script>

<style>

</style>
