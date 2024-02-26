import { createStore } from 'vuex'
import axios from 'axios'
let web = 'https://nodejs-server-qp0i.onrender.com/products'

export default createStore({
  state: {
    products: null,
    product: null,
    admin: null
  },
  getters: {
  },
  mutations: {
    setproducts(state,data){
      state.products = data
    },
    setoneproduct(state,data){
      state.product = data
    },
    setadmin(state,data){
      state.admin = data
    }
   

  },
  actions: {
  async  getproducts({commit}){
    let {data} = await axios.get(web)
    console.log(data);
    commit('setproducts',data)

    },
    async getproduct({commit},prodID){
      console.log(prodID);
      let {data} = await axios.get(web+'/'+prodID);
      console.log(data);
      commit('setoneproduct',data)
    },
    async getadmin({commit}){
      let {data} = await axios.get(web)
      console.log(data);
      commit('setadmin',data)
    }
  },

  modules: {
  }
})
