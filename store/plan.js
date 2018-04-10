export const state = () => ({
  plan: {},
  categories: [],
  recentTransactions: []
})

export const mutations = {
  addInitialState(state, data) {
    state.plan = data.plan
    state.categories = data.categories
  },

  addCategory(state, category) {
    state.categories.push(category)
  }
}

export const actions = {
  async getPlan({ commit }, planId) {
    const response = await this.$axios.get(`/plans/${planId}`)
    const data = {
      plan: response.data.data.plan,
      categories: response.data.data.categories.data.categories
    }
    commit('addInitialState', data)
  }
}

export const getters = {
  listCategories(state) {
    return state.categories
  },

  listRecentTransactions(state) {
    return state.recentTransactions
  },

  getPlan(state) {
    return state.plan
  }
}
