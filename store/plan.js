export const state = () => ({
  plan: {},
  currentCategory: {},
  categories: [],
  accounts: [],
  transactions: []
})

export const mutations = {
  addInitialState(state, data) {
    state.plan = data.plan
    state.categories = data.categories
    state.accounts = data.accounts
    state.transactions = data.transactions
  },

  addCategory(state, category) {
    state.categories.push(category)
  },

  setCurrentCategory(state, categoryId) {
    state.currentCategory = state.categories.find(c => {
      return c.id === categoryId
    })
  },

  addTransaction(state, transaction) {
    state.transactions.push(transaction)
  }
}

export const actions = {
  async getPlan({ commit }, planId) {
    const response = await this.$axios.get(`/plans/${planId}`)
    const data = {
      plan: response.data.data.plan,
      categories: response.data.data.categories.data.categories,
      accounts: response.data.data.accounts.data,
      transactions: response.data.data.transactions.data
    }
    commit('addInitialState', data)
  },

  async createAccount({ commit }, payload) {
    try {
      console.log(payload)
      const response = await this.$axios.post(`/plans/${payload.planId}/accounts`, { account: payload.account })
      console.log(response.data)
    }
    catch (error) {
      console.log(error)
    }
  },

  async createTransaction({ commit }, payload) {
    try {
      const response = await this.$axios.post(`/plans/${payload.planId}/transactions`, { transaction: payload.transaction })
      commit('addTransaction', response.data.data)
    }
    catch (error) {
      console.log(error)
    }
  }
}

export const getters = {
  listCategories(state) {
    return state.categories
  },

  listAccounts(state) {
    return state.accounts
  },

  listRecentTransactions(state) {
    return [...state.transactions].sort((a, b) => a < b).slice(0,4)
  },

  getPlan(state) {
    return state.plan
  },

  getCategory(state) {
    return state.currentCategory
  }
}
