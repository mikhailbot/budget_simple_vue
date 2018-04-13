<template>
  <div class="p-2 md:w-1/2 w-full md:inline-block">
    <div class="bg-grey-lighter px-4 py-2 text-grey-darker flex justify-between align-center rounded">
      <div class="">
        <div class="font-bold text-xl pr-3">
          {{ account.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['account']
}
</script>

<style>

</style>
