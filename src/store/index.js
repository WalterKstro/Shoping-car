import Vue from 'vue'
import Vuex from 'vuex'
import {getProducts} from '../api'
import {reviewInventory} from '../helpers'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products : [],
    card : []
  },
  mutations: {
    SET_PRODUCTS (state,payload) {
      state.products = payload
    },
    BUY_PRODUCT(state,payload) {
      let {id,title,price} = payload      
      state.card.push({
        id,
        title,
        price,
        inventory : 1
      })
    },
    ADD_UNIT(state,payload) {
      payload.inventory+=1
    },
    REMOVE_UNIT_INVENTORY(state,payload) {
      payload.inventory-=1
    },
    REMOVE_UNID_CARD_SHOPING(state, index) {
      state.card.splice(index,1)
    }
  },
  actions: {
    getProductsAPI({commit}) {
      return new Promise((resolve) =>{
        commit('SET_PRODUCTS', getProducts())
        resolve()
      })
    },
    buyProduct({commit,state}, payload) {
    
      if(reviewInventory(payload)) {
        const existProduct = state.card.find(product => product.id === payload.id)
        if(existProduct) {
          commit('ADD_UNIT', existProduct)
        }else {
          commit('BUY_PRODUCT', payload)
        }
      }
      commit('REMOVE_UNIT_INVENTORY', payload)
    },
    removeProductCardShoping({commit, state}, payload) {
      if(payload.inventory > 1){
        const product = state.card.find(product => product.id === payload.id)
        commit('REMOVE_UNIT_INVENTORY', product)
      }else {
        const index = state.card.findIndex( product => product.id === payload.id)
        commit('REMOVE_UNID_CARD_SHOPING',index)
      }
    }
  },
  getters : {
    filterProductsByInventory(state) {
      return state.products.filter(product => product.inventory > 0)
    },
    filterCardShopingByUnits(state) {
      return state.card.filter(product => product.inventory > 0)
    }
  },
  modules: {
  }
})
