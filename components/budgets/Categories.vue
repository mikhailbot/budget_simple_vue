<template>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="">
      <div class="flex items-center justify-between pb-4">
        <h2 class="text-md text-grey-darkest">Budget Categories</h2>
        <div @click="showNewCategoryForm" class="text-grey-darker text-xs font-bold bg-grey-light hover:bg-grey-lighter rounded border-b-4 border-grey hover:border-grey-light py-2 px-4 hidden md:inline-flex items-center pointer">
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/></svg>
          Create category
        </div>
      </div>
      <div class="">

        <div>
          <category v-for="category in categories" :key="category.id" :category="category" :showCategory="showCategory"></category>
        </div>
        <div class="mx-2">
          <div @click="showNewCategoryForm" class="text-grey-darker text-xs font-bold bg-grey-light hover:bg-grey-lighter rounded border-b-4 border-grey hover:border-grey-light py-2 px-4 inline-flex items-center justify-center w-full md:hidden my-2 pointer">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/></svg>
            Create category
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Category from '~/components/budgets/Category.vue'

export default {
  props: ['showNewCategoryForm', 'showCategory'],

  components: {
    Category
  },

   computed: {
    categories () {
      return this.$store.getters['plan/listCategories']
    }
  }
}
</script>

<style>

</style>
