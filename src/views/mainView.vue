<template>
    <navigation />
    <div class="banner  text-white p-2">
      <img
        src="https://cdn-images.imagevenue.com/95/91/59/ME17OI7N_o.png"
        id="img"
        class="img-fluid rounded"
        alt=""
      />
    </div>
  
    <div class="container-fluid mt-3">
      <p class="text-danger">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <img
        src="https://cdn-images.imagevenue.com/e8/68/2c/ME17OIH8_o.jpg"
        id="product-img"
        class="img-fluid rounded"
        alt=""
      />
    </div>
  </template>
  
  <script>
  import navigation from "@/components/navigation.vue";
  
  export default {
    components: {
      navigation,
    },
  };
  </script>
  
  <style scoped>
  .banner {
    width: 100%;
    padding: 0.5px; /* Note: changed from .5px to 0.5px for consistency */
    background-color: darkgreen;
    text-align: center; /* Center the content inside banner */
  }
  
  #img {
    width: 167px;
    height: 140px;
    margin: 10px auto; /* Added margin for spacing */
    display: block;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
  
  #product-img {
    width: 100%; /* Utilize the full width of the container */
    max-width: 450px; /* Added max-width for responsiveness */
    height: auto; /* Maintain aspect ratio */
    display: block;
    margin: 20px auto; /* Added margin for spacing */
    border-radius: 10px;
  }
  </style>
  