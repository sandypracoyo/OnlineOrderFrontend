import axios from 'axios'
const state = {
  drivers: []
}
const getters = {
  allDriver: (state) => state.drivers
}
const actions = {
  async fetchDriver ({ commit }) {
    const response = await axios.get('http://localhost:9000/driver')
    commit('setDrivers', response.data.data)
  }
}
const mutations = {
  setDrivers: (state, drivers) => (state.drivers = drivers)
}

export default {
  state,
  getters,
  actions,
  mutations
}
