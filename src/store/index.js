import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'
import customer from './modules/customer'
import driver from './modules/driver'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product,
    customer,
    driver
  }
})
