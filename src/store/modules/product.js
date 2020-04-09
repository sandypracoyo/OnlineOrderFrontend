import axios from 'axios'

const state = {
  products: [],
  detailproduct: []
}

const getters = {
  allProduct: (state) => state.products,
  detailProduct: (state) => state.detailproduct
}

const actions = {
  async fetchProduct ({ commit }) {
    const response = await axios.get('http://localhost:9000/product')
    commit('setProducts', response.data.data)
  },

  async fetchDetailProduct ({ commit }, id) {
    const response = await axios.get(`http://localhost:9000/product/${id}`)
    commit('setDetailProduct', response.data.data)
  },

  addProduct (data) {
    console.log(data)
  }
}

const mutations = {
  setProducts: (state, products) => (state.products = products),
  setDetailProduct: (state, detailproduct) => (state.detailproduct = detailproduct)
}

export default {
  state,
  getters,
  actions,
  mutations
}
