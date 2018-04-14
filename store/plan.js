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
  },

  getAccountById: (state) => (id) => {
    return state.accounts.find(account => account.id === id)
  },

  getCategoryById: (state) => (id) => {
    return state.categories.find(category => category.id === id)
  },

  getCategoryOutflowTotal: (state) => (id) => {
    const transactions = [...state.transactions.filter((t) => t.category_id === id)]

    switch (true) {
      case transactions.length > 1:
        return transactions.reduce((previous, current) => ({ outflow: current.outflow + previous.outflow }))
        break
      case transactions.length === 1:
        return { outflow: transactions[0].outflow }
        break
      default:
        return { outflow: 0 }
    }
  },

  getCategoryInflowTotal: (state) => (id) => {
    const transactions = [...state.transactions.filter((t) => t.category_id === id)]

    switch (true) {
      case transactions.length > 1:
        return transactions.reduce((previous, current) => ({ inflow: current.inflow + previous.inflow }))
        break
      case transactions.length === 1:
        return { inflow: transactions[0].inflow }
        break
      default:
        return { inflow: 0 }
    }
  }
}
