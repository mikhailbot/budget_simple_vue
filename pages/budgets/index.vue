<template>
  <div class="max-w-lg flex items-center justify-start flex-col m-auto">
    <div v-if="plans.length">
      <h1 class="text-white font-bold text-center text-4xl py-8">Open a Budget</h1>
      <div v-for="plan in plans" v-bind:key="plan.id" class="max-w-xs w-full">
        <div class="bg-white shadow-md rounded px-8 py-6 mb-4 border-r-8 border-grey-light hover:border-green">
          <div class="font-bold text-grey-darkest text-2xl mt-1">{{ plan.name }}</div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="text-white font-bold text-center text-4xl py-8">Create a Budget</h1>
      <new-budget-form></new-budget-form>
    </div>
  </div>
</template>

<script>
import NewBudgetForm from '~/components/forms/NewBudgetForm.vue'

export default {
  components: {
    NewBudgetForm
  },

  data () {
    return {
      plans: []
    }
  },

  async asyncData({ app }) {
    const plans = await app.$axios.$get('/plans')
    return { plans: plans.data.plans }
  }
}
</script>

<style>

</style>
