<template>
  <div class="py-8 px-4">
    <div class="flex justify-between items-center pb-4">
      <h1 class="text-grey-darkest leading-tight py-4">{{ plan.name }}</h1>
      <div class="flex flex-col items-end justify-center">
        <label for="selected-month" class="text-grey-dark uppercase text-xs font-bold">Budget Month</label>
        <select v-model="selectedMonth" name="selected-month" id="selected-month" class="bg-grey-lighter appearance-none border-2 border-grey-lighter focus:border-blue rounded py-2 px-4 text-grey-darkest text-lg font-bold outline-0 pointer">
          <option value="2018-04-01">April 2018</option>
          <option value="2018-05-01">May 2018</option>
          <option value="2018-06-01">June 2018</option>
        </select>
      </div>
    </div>

    <recent-transactions :showNewTransactionForm="showNewTransactionForm"></recent-transactions>
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
import DetailedCategory from '../../components/category/DetailedCategory.vue';
import NewTransactionForm from '../../components/forms/NewTransactionForm.vue';

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
    const today = new Date();
    const month = today.toISOString().substring(0, 8) + '01'
    await store.dispatch('plan/getPlan', { planId: params.id, month })
  },

  methods: {
    showNewCategoryForm () {
      this.$modal.show(NewCategoryForm, { planId: this.plan.id }, { adaptive: true })
    },

    showNewAccountForm () {
      this.$modal.show(NewAccountForm, { planId: this.plan.id }, { adaptive: true })
    },

    showNewTransactionForm () {
      this.$modal.show(NewTransactionForm, { planId: this.plan.id }, { adaptive: true, height: 'auto' })
    },

    showCategory (categoryId) {
      this.$modal.show(DetailedCategory, { categoryId: categoryId }, { adaptive: true })
    }
  },

  computed: {
    plan () {
      return this.$store.getters['plan/getPlan']
    },

    selectedMonth: {
      get () {
        return this.$store.getters['plan/getMonth']
      },
      set (month) {
        this.$store.dispatch('plan/changeMonth', month)
      }
    }
  }

}
</script>

<style>

</style>
