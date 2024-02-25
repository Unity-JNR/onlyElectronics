<template>
    <navigation/>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="item in $store.state.product" :key="item.prodID">
          <article class="cards">
            <div class="card-int">
              <span class="card__span">{{ item.Category }}</span>
              <img :src="item.prodUrl" alt="" class="img img-fluid mt-5">
              <div class="card-data">
                <p class="title">{{ item.prodName }}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
                  <button class="button">More info</button>
            
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import navigation from '@/components/navigation.vue';
  
  export default {
    components: {
      navigation
    },
    data() {
      return {};
    },
    methods: {
      getproduct() {
        const productId = this.$route.params.id; // Use this.$route.params.id to get the dynamic route parameter
        console.log(productId);
        this.$store.dispatch("getproduct", productId);
      },
    },
    mounted() {
      this.getproduct(); // Corrected the function invocation
    },
  }
  </script>
  
  <style>
  body {
    background-color: rgb(242, 18, 18);
  }
  /* Add your other styles here */
  </style>
  