import { createStore } from 'vuex'
import axios from 'axios'
let web = 'https://nodejs-server-qp0i.onrender.com/products'

export default createStore({
  state: {
    products: null
  },
  getters: {
  },
  mutations: {
    setproducts(state,data){
      state.products = data
    }
  },
  actions: {
  async  getproducts({commit}){
    let {data} = await axios.get(web)
    console.log(data);
    commit('setproducts',data)

    }
  },
  modules: {
  }
})
