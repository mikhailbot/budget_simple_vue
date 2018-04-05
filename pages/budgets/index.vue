<template>
  <div class="max-w-lg flex items-center justify-start flex-col">
    <h1 class="text-white font-bold text-center text-4xl py-8">Open a Budget</h1>
    <div v-for="plan in plans" v-bind:key="plan.id" class="max-w-xs w-full">
      <div class="bg-white shadow-md rounded px-8 py-6 mb-4 border-r-8 border-grey-light hover:border-green">
        <div v-if="plan.owner_id == $auth.user.id">
          <div class="text-grey text-xs uppercase">Created by you</div>
        </div>
        <div v-else>
          <div class="text-grey text-xs uppercase">Shared</div>
        </div>
        <div class="font-bold text-2xl mt-1">{{ plan.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
