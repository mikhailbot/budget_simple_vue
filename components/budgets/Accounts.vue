<template>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="">
      <div class="flex items-center justify-between pb-4">
        <h2 class="text-md text-grey-darkest">Bank Accounts</h2>
        <div @click="showNewAccountForm" class="text-grey-darker text-xs font-bold bg-grey-light hover:bg-grey-lighter rounded border-b-4 border-grey hover:border-grey-light py-2 px-4 hidden md:inline-flex items-center pointer">
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/></svg>
          Create account
        </div>
      </div>
      <div class="-mx-2">
        <div>
          <account v-for="account in accounts" :key="account.id" :account="account"></account>
        </div>
        <div class="mx-2">
          <div @click="showNewAccountForm" class="text-grey-darker text-xs font-bold bg-grey-light hover:bg-grey-lighter rounded border-b-4 border-grey hover:border-grey-light py-2 px-4 inline-flex items-center justify-center w-full md:hidden my-2 pointer">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/></svg>
            Create account
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Account from '~/components/budgets/Account.vue'

export default {
  props: ['showNewAccountForm'],

  components: {
    Account
  },

   computed: {
    accounts () {
      return this.$store.getters['plan/listAccounts']
    }
  }
}
</script>

<style>

</style>
