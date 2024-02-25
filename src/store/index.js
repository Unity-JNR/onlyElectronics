import { createStore } from 'vuex'
import axios from 'axios'
let web = 'https://nodejs-server-qp0i.onrender.com/products'

export default createStore({
  state: {
    products: null,
    product: null
  },
  getters: {
  },
  mutations: {
    setproducts(state,data){
      state.products = data
    },
    setproduct(state,data){
      state.product = data
    }

  },
  actions: {
  async  getproducts({commit}){
    let {data} = await axios.get(web)
    console.log(data);
    commit('setproducts',data)

    },
    getproduct({commit},id){
      let {data} = axios.get(web+'/'+id)
      console.log(data);
      console.log(id);
      commit('setproduct',data)
    }
  },
  modules: {
  }
})
