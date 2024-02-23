<template>
    <navigation/>
    <div>
        <table class="table">
    <tr class="thead">
      <th>id</th>
      <th>fruit</th>
      <th>quantity</th>
      <th>amount</th>
      <th>Category</th>
      <th>img</th>
    </tr>
    <tbody v-for="item in $store.state.products" :key="item.prodID">
      <td>{{item.prodID}}</td>
      <td>{{item.prodName}}</td>
      <td>{{item.quantity}}</td>
      <td>{{item.amount}}</td>
      <td>{{item.Category}}</td>
      <td><img :src="item.prodUrl" alt="Product Image"></td>
    
      
    </tbody>
  </table>
    </div>
</template>
<script>
import navigation from '@/components/navigation.vue';
export default {
    components: {
        navigation
    },
    data() {
        return {
        }
    },
    methods: {
    },
    computed:{
        getproducts(){
            this.$store.dispatch('getproducts')
        }
    },
    mounted(){
        this.getproducts
    }

}
</script>
<style>
body{
  background: linear-gradient(to right,rgb(19, 136, 19),rgb(179, 179, 24));
}
    
</style>