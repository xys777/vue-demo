// import Vue from 'vue'
// import Vuex from 'vuex'

// // import { createPersistedState, createSharedMutations } from 'vuex-electron'

// // import modules from './modules'
// // const lwcAccounts = require('./lwc-account-qa')

// // import db from '../../share/datastore' 
// // Vuex.Store.prototype.$db = db
// Vue.use(Vuex)
// // console.log(modules)
// // const storeOptions={storageKey: 'NestApp'}
// const store = new Vuex.Store({
//   state: {
//     count: 0,
//     router: 'Home',
//     windowHeight: window.innerHeight,
//     windowWidth: window.innerWidth,
//   },

//   actions: {
//     increment(store) {
//       store.commit("increment")
//     },
//     decrement(store) {
//       store.commit("decrement")
//     }
//   },

//   mutations: {
//     increment(state) {
//       state.count++
//     },
//     decrement(state) {
//       state.count--
//     },
//     route(state, path) {
//       state.router = path
//     }
//   },
//   // modules,
//   plugins: [
//     //   createPersistedState(storeOptions),
//     // createSharedMutations()
//   ],
//   strict: process.env.NODE_ENV !== 'production'
// })
// export default store

  
import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import order from './modules/order'
import product from './modules/product'
// import createLogger from '../plugins/logger'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cart,
    order,
    product
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
})