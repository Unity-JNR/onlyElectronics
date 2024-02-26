<template>
    <navigation/>


    <div class="container me-5">
    <div class="row">
        <div class="col-lg-4 pb-5" v-for="item in $store.state.products" :key="item.prodID">
          <article class="cards">
    <div class="card-int">
        <span class="card__span">{{item.Category}}</span>
   <img :src="item.prodUrl" alt="" class="img img-fluid mt-5">
        <div class="card-data">
          <p class="title">{{ item.prodName }}
          </p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <router-link @click="getproduct(item.prodID)" :to="{ name: 'productDetails', params: { prodID: item.prodID }} " class="btn btn-dark">details</router-link>

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
        return {
        }
    },
    methods: {
      getproduct(prodID) {
          console.log(prodID);
           this.$store.dispatch('getproduct',prodID);
        }
    },
    computed:{
        getproducts(){
            this.$store.dispatch('getproducts')
        },
    
    },
    mounted(){
        this.getproducts
        
    }

}
</script>
<style scoped>
body{
  background: linear-gradient(to right,rgb(19, 136, 19),rgb(179, 179, 24));
}
p{
    color: #000;
}
.cards {
  width: 300px;
  padding: 10px;
  background-image: linear-gradient(to right bottom, #5d0391, #7b05ae, #9b05cb, #bd00e7, #bd00e7);
  background-size: 200% 200%;
  border-radius: 12px;
}

.card-int {
  position: relative;
  height: 100%;
  overflow: hidden;
  font-size: 14px;
  border-radius: 6px;
  background-color: white;
}

.img {
  width: 95%;
  object-fit:contain;
  height: 175px;
  background-color: pink;
}

.title {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
}

.card-data {
  padding: 20px;
  font-size: 14px;
}

.card__span {
  font-family: 'Lucida Sans' sans-serif;
  font-size: 11px;
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: white;
  padding: 5px 10px;
  border-radius: 15px;
  color: #000;
}

button {
  width: 100%;
  margin-top: 15px;
  background-image: linear-gradient(to right bottom, #5d0391, #7b05ae, #9b05cb, #bd00e7, #bd00e7);
  background-size: 200% 200%;
  border: none;
  padding: 8px 10px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  transition: transform 0.1s ease-in;
}

button:active {
  transform: translateY(3px);
}

.cards:hover, button:hover {
  animation: gradient 0.8s ease-in 1;
}

@keyframes gradient {
  0% {
    background-position: 200% 200%;
  }

  100% {
    background-position: 400% 400%;
  }
}
p{
  color: #000 !important;
}


  
</style>