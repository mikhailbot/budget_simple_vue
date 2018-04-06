<template>
  <div class="w-full max-w-sm m-auto p-2">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter focus:border-blue rounded w-full py-2 px-4 text-grey-darker outline-0" v-model="name" type="text" @keyup.enter="createBudget">
      </div>
      <div class="flex items-center justify-between">
        <button  @click="createBudget" class="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded" type="button">
          Create
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },

  methods: {
    async createBudget () {
      try {
        const response = await this.$axios.post('/plans', { plan: { name: this.name } })
        await this.$router.push(`/budgets/${response.data.data.id}`)
      }
      catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>

</style>
