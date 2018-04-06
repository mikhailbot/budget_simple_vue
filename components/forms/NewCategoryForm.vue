<template>
  <div class="w-full h-full max-w-xs m-auto p-2 flex justify-center flex-col">
    <div class="block text-grey-darkest text-2xl font-bold mb-4">Create a new category</div>
    <form class="">
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter focus:border-blue rounded w-full py-2 px-4 text-grey-darker outline-0" type="text">
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded" type="button">
          Create
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
