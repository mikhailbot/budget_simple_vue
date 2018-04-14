<template>
  <div class="p-2 md:w-1/2 w-full md:inline-block">
    <div class="bg-grey-lighter px-4 py-2 text-grey-darker flex justify-between align-center rounded" @click="showCategory(category.id)">
      <div class="">
        <div class="text-grey-darkest font-bold text-xl pr-3">
          {{ category.name }}
        </div>
        <div class="text-sm">
          <div>Spent: {{ formatCurrency(outflowTotal) }}</div>
          <div>Budgeted: $0</div>
        </div>
      </div>
      <div v-if="categoryTotal >= 0" class="text-green text-3xl font-bold self-center">
        {{ formatCurrency(categoryTotal) }}
      </div>
      <div v-else class="text-red-light text-3xl font-bold self-center">
        {{ formatCurrency(categoryTotal) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['category', 'showCategory'],

  methods: {
    formatCurrency (cents) {
      let dollars = cents / 100

      switch (true) {
        case (cents >= 0):
          return `$${dollars.toLocaleString()}`
          break
        case (cents < 0):
          return `-$${dollars.toLocaleString().substring(1)}`
          break
        default:
          break
      }
    }
  },

  computed: {
    outflowTotal () {
      return this.$store.getters['plan/getCategoryOutflowTotal'](this.category.id).outflow
    },

    allotmentTotal () {
      return 0
    },

    categoryTotal () {
      return this.allotmentTotal - this.outflowTotal
    }
  }
}
</script>

<style>

</style>
