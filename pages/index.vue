<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        budget_simple_vue
      </h1>
      <h2 class="subtitle">
        Simple shared budgets - Vue Frontend
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  auth: false,

  components: {
    AppLogo
  }
}
</script>

<style>
</style>
