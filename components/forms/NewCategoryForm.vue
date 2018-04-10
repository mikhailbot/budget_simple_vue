<template>
  <div class="w-full h-full max-w-xs m-auto p-2 flex justify-center flex-col">
    <div class="block text-grey-darkest text-2xl font-bold mb-4">Create a new category</div>
    <form class="">
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input @keyup.enter.prevent="createCategory" class="bg-grey-lighter appearance-none border-2 border-grey-lighter focus:border-blue rounded w-full py-2 px-4 text-grey-darker outline-0" type="text" v-model="name" autofocus>
      </div>
      <div class="flex items-center justify-between">
        <button @click.prevent="createCategory" class="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded" type="button">
          Create
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: [ 'planId' ],

  data () {
    return {
      name: ''
    }
  },

  methods: {
    async createCategory () {
      try {
        const response = await this.$axios.post(`/plans/${this.planId}/categories`, { category: {name: this.name} })
        this.$store.commit('plan/addCategory', response.data.data)
        this.$emit('close')
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
