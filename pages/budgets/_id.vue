<template>
  <div class="py-8 px-4">
    <h1 class="text-grey-darkest py-4">{{ plan.name }}</h1>

    <recent-transactions :transactions="plan.recentTransactions"></recent-transactions>
  </div>
</template>

<script>
import RecentTransactions from '~/components/budgets/RecentTransactions.vue'

export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },

  components: {
    RecentTransactions
  },

  asyncData ({ app, params, error }) {
    return app.$axios.get(`/plans/${params.id}`)
    .then((response) => {
      return { plan: response.data.data }
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'Budget plan not found' })
    })
  }


}
</script>

<style>

</style>
