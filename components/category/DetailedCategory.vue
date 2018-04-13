<template>
  <div class="p-6">
    <div class="flex items-center justify-between">
      <div class="text-grey-darkest text-3xl font-bold">{{ category.name }}</div>
      <action-button></action-button>
    </div>

    <div class="text-grey-darker text-lg font-bold">Spent: $0</div>
    <div class="text-grey-darker text-lg font-bold">Budgeted: $0</div>

    <div class="text-grey-darkest text-xl font-bold pt-8">Transactions for {{ currentMonth }}</div>
  </div>
</template>

<script>
import ActionButton from '~/components/ActionButton.vue'

export default {
  props: ['categoryId'],

  components: {
    ActionButton
  },

  computed: {
    category () {
      return this.$store.getters['plan/getCategory']
    },

    currentMonth () {
      return 'April 2018'
    }
  },

  mounted () {
    this.$store.commit('plan/setCurrentCategory', this.categoryId)
  }
}
</script>

<style>

</style>
