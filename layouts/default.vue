<template>
  <div class="h-screen bg-blue w-screen">
    <header class="pt-8 px-8">
      <nav class="flex items-center justify-between flex-row-reverse">
        <div class="text-4xl text-blue font-bold rounded-full h-16 w-16 flex items-center justify-center bg-grey-lightest">
          B
        </div>
        <!-- <div class="text-white">
          <a @click="logout" class="inline-block align-baseline font-bold text-md text-grey-lightest no-underline hover:underline" href="#">Logout</a>
        </div> -->
      </nav>
    </header>
    <nuxt/>
  </div>
</template>

<script>
export default {
  methods: {
    async logout () {
      return this.$auth.logout()
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
