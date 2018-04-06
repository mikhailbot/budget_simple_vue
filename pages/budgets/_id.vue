<template>
  <div class="py-8 px-4">
    <h1 class="text-grey-darkest py-4">{{ plan.name }}</h1>

    <recent-transactions :transactions="plan.recentTransactions"></recent-transactions>
    <categories :showNewCategoryForm="showNewCategoryForm"></categories>
  </div>
</template>

<script>
import RecentTransactions from '~/components/budgets/RecentTransactions.vue'
import Categories from '~/components/budgets/Categories.vue'
import NewCategoryForm from '~/components/forms/NewCategoryForm.vue'

export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },

  components: {
    RecentTransactions,
    Categories
  },

  asyncData ({ app, params, error }) {
    return app.$axios.get(`/plans/${params.id}`)
    .then((response) => {
      return { plan: response.data.data }
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'Budget plan not found' })
    })
  },

  methods: {
    showNewCategoryForm () {
      this.$modal.show(NewCategoryForm, {}, { adaptive: true })
    }
  },

}
</script>

<style>

</style>
