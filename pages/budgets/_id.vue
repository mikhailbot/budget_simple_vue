<template>
  <div class="py-8 px-4">
    <h1 class="text-grey-darkest py-4">{{ plan.name }}</h1>

    <recent-transactions :transactions="plan.recentTransactions"></recent-transactions>
    <categories :showNewCategoryForm="showNewCategoryForm" :showCategory="showCategory"></categories>
    <accounts :showNewAccountForm="showNewAccountForm"></accounts>
  </div>
</template>

<script>
import RecentTransactions from '~/components/budgets/RecentTransactions.vue'
import Categories from '~/components/budgets/Categories.vue'
import Accounts from '~/components/budgets/Accounts.vue'
import NewCategoryForm from '~/components/forms/NewCategoryForm.vue'
import NewAccountForm from '~/components/forms/NewAccountForm.vue'
import DetailedCategoryVue from '../../components/category/DetailedCategory.vue';

export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },

  components: {
    RecentTransactions,
    Categories,
    Accounts
  },

  async fetch ({ store, params }) {
    await store.dispatch('plan/getPlan', params.id)
  },

  methods: {
    showNewCategoryForm () {
      this.$modal.show(NewCategoryForm, { planId: this.plan.id }, { adaptive: true })
    },

    showNewAccountForm () {
      this.$modal.show(NewAccountForm, { planId: this.plan.id }, { adaptive: true })
    },

    showCategory (categoryId) {
      this.$modal.show(DetailedCategoryVue, { categoryId: categoryId }, { adaptive: true })
    }
  },

  computed: {
    plan () {
      return this.$store.getters['plan/getPlan']
    }
  }

}
</script>

<style>

</style>
