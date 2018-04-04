<template>
  <div class="h-screen bg-blue w-screen">
    <div class="flex items-center justify-center flex-col h-screen w-screen">
      <div class="text-grey-lightest font-bold text-5xl pb-4">
        Budget<span class="font-light">Simple</span>
      </div>
      <div class="w-full">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logoutUser () {
      await this.$auth.logout()
    }
  }
}
</script>

<style>
@media screen and (max-width: 30em) {
  .h4-5 { height: 15rem; }
  .nt6-5 { margin-top: -10rem; }
}

.nt6-5 { margin-top: -10rem; }

.card-dim:hover {
  background: #EEEEEE;
}

.overflow-hidden {
  overflow: hidden;
}

.menu {
  min-height: 2.2rem;
  max-height: 0;
  background: #357EDD;
  transition: max-height 0.4s, padding-bottom 0.4s;
}

#burger:checked ~ .menu {
  max-height: 25rem;
  padding-bottom: 1rem;
}

.mw-inherit {
  max-width: inherit;
}

@media screen and (min-width: 30em) {
  .nt6-5 { margin-top: -8rem; }
}
</style>
