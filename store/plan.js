export const state = () => ({
  plan: {},
  selectedMonth: '',
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
    state.selectedMonth = data.selectedMonth
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
  },

  addAccount(state, account) {
    state.accounts.push(account)
  }
}

export const actions = {
  async getPlan({ commit }, payload) {
    const response = await this.$axios.get(`/plans/${payload.planId}?month=${payload.month}`)

    const data = {
      plan: response.data.data.plan,
      categories: response.data.data.categories.data.categories,
      accounts: response.data.data.accounts.data,
      transactions: response.data.data.transactions.data,
      selectedMonth: payload.month
    }
    commit('addInitialState', data)
  },

  async createAccount({ commit }, payload) {
    try {
      const response = await this.$axios.post(`/plans/${payload.planId}/accounts`, { account: payload.account })
      commit('addAccount', response.data.data)
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
  },

  async changeMonth({ state, dispatch }, month) {
    await dispatch('getPlan', { planId: state.plan.id, month })
  }
}

export const getters = {
  listCategories(state) {
    return [...state.categories].sort((a, b) => a.name > b.name)
  },

  listAccounts(state) {
    return [...state.accounts].sort((a, b) => a.name > b.name)
  },

  listRecentTransactions(state) {
    return [...state.transactions].sort((a, b) => a.date < b.date).slice(0,4)
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
  },

  getMonth(state) {
    return state.selectedMonth
  }
}
