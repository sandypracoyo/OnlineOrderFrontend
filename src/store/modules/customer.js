import axios from 'axios'

const state = {
  customers: [],
  detailCustomer: []
}

const getters = {
  allCustomer: (state) => state.customers,
  detailCustomer: (state) => state.detailCustomer
}
const actions = {
  async fetchCustomer ({ commit }) {
    const response = await axios.get('http://localhost:9000/customer')
    commit('setCustomers', response.data.data)
  },
  async fetchDetailCustomer ({ commit }, id) {
    const response = await axios.get(`http://localhost:9000/customer/${id}`)
    commit('setDetailCustomer', response.data.data)
  }
}
const mutations = {
  setCustomers: (state, customers) => (state.customers = customers),
  setDetailCustomer: (state, detailCustomer) => (state.detailCustomer = detailCustomer)
}

export default {
  state,
  getters,
  actions,
  mutations
}
