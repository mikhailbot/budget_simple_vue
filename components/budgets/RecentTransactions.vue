<template>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="">
      <div class="flex items-center justify-between pb-4">
        <h2 class="text-md text-grey-darkest">Recent Transactions</h2>
        <div class="text-grey-lightest text-xs font-bold bg-green hover:bg-green-light rounded border-b-4 border-green-dark hover:border-green py-2 px-4 hidden md:inline-flex items-center">
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/></svg>
          Add transactions
        </div>
      </div>
      <div class="">
        <div v-if="transactions"></div>
        <div v-else>
          <div class="text-grey-dark text-sm w-full md:w-1/2 bg-grey-lighter rounded px-4 py-2 inline-block">No transactions to show for now</div>
        </div>
        <div class="text-grey-lightest text-xs font-bold bg-green hover:bg-green-light rounded border-b-4 border-green-dark hover:border-green py-2 px-4 inline-flex items-center justify-center w-full md:hidden my-2">
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/></svg>
          Add transactions
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['transactions']
}
</script>

<style>

</style>
