<template>
  <div class="p-2 md:w-1/2 w-full md:inline-block">
    <div class="bg-grey-lighter px-4 py-2 text-grey-darker flex justify-between align-center rounded">
      <div class="leading-tight">
        <div class="text-grey-darkest font-bold text-xl pr-3">
          {{ transaction.merchant }}
        </div>
        <div class="text-sm pr-3 py-1">
          {{ accountName }}
        </div>
        <div class="text-sm pr-3">
          {{ categoryName }}
        </div>
      </div>
      <div class="">
        <div v-if="transaction.outflow" class="text-red-light text-3xl font-bold">
          -${{ formatCurrency(transaction.outflow) }}
        </div>
        <div v-if="transaction.inflow" class="text-green text-3xl font-bold">
          ${{ formatCurrency(transaction.inflow) }}
        </div>
        <div class="text-sm font-bold text-right">
          {{ transaction.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['transaction'],

  methods: {
    formatCurrency (cents) {
      let dollars = cents / 100
      return dollars.toLocaleString()
    }
  },
  computed: {
    accountName () {
      const account = this.$store.getters['plan/getAccountById'](this.transaction.account_id)
      return account ? account.name : ''
    },

    categoryName () {
      const category = this.$store.getters['plan/getCategoryById'](this.transaction.category_id)
      return category ? category.name : ''
    }
  }
}
</script>

<style>

</style>
