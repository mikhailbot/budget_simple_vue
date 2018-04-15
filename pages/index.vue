<template>
  <div class="text-center my-3">
    <nuxt-link to="/login" class="text-grey-darker text-xs font-bold bg-grey-light hover:bg-grey-lighter rounded border-b-4 border-grey hover:border-grey-light py-2 px-4 no-underline">Early Access Login</nuxt-link>
  </div>
</template>

<script>
export default {
  auth: false,

  layout: 'no_auth',
}
</script>

<style>
</style>
