<template>
  <div class="bg-near-white vh-100 vw-100 sans-serif">
    <div class="bg-blue h4-5 h5-ns">
      <header class="mw7 center pt4 pt5-ns">
          <nav class="mw-inherit w-100 blue tc white relative flex-ns items-center justify-between">
            <div class="ml3 tl">
              <a href="/" class="blue b link bg-white br-100 pa2 ba bw2 b-solid b-white f2 h3 w3 dib tc">B</a>
            </div>
            <input type="checkbox" id="burger" class="absolute top-2 right-1 dn">
            <label for="burger" class="dn-ns pointer absolute top-1 right-1">
              <div class="mid-gray b dib f5 bg-near-white br2 pa2">Menu</div>
            </label>
            <ul class="overflow-hidden menu dib-ns list tc pl0 pt3-ns mv0 f3 f5-ns">
              <li class="pt4 pb3 di-ns">
                <nuxt-link to="/budgets" class="link di-ns mr3 near-white">Budgets</nuxt-link>
              </li>
              <li class="pv3 di-ns">
                <button class="link di-ns mr3 near-white pointer input-reset bn bg-blue" @click="logoutUser">Logout</button>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    <nuxt/>
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
