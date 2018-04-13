<template>
  <div class="p-2 md:w-1/2 w-full md:inline-block">
    <div class="bg-grey-lighter px-4 py-2 text-grey-darker flex justify-between align-center rounded" @click="showCategory(category.id)">
      <div class="">
        <div class="font-bold text-xl pr-3">
          {{ category.name }}
        </div>
        <div class="text-sm">
          <div>Spent: $0</div>
          <div>Budgeted: $0</div>
        </div>
      </div>
      <div class="text-green text-3xl font-bold self-center">
        $0
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['category', 'showCategory']
}
</script>

<style>

</style>
