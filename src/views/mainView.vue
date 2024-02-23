<template>
  <navigation />
  <div class="body mt-lg-5">

    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" id="txt">
      <main class="px-4">
        <h1>Cover your page.</h1>
        <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p class="lead">
          <a href="#" class="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</a>
        </p>
      </main>
    </div>
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

<style>

body{
  background: linear-gradient(to right,rgb(19, 136, 19),rgb(179, 179, 24));
}
.body{
  /* width: 50vw;  */
  height: 50vh; 
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  /* border-image: fill 0 linear-gradient(rgba(0,0,0,0.289),#00000075); */
  animation: changeImage 15s infinite ease-in-out; 
}
#txt{
  /* background-color: #000; */
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 75vh;

}

p{
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-family: 'Open Sans', sans-serif;
  color: #000;

}
h1{
  color: #000;
  font-size: 35px;  
  font-weight: 800;
  
  
}


@keyframes changeImage {
  0% {
    background-image: url('https://cdn-images.imagevenue.com/5c/54/73/ME17OK7B_o.jpg'); /*speaker */
  }
  16.67% {
    background-image: url('https://cdn-images.imagevenue.com/bb/6e/7a/ME17OK9I_o.jpg');/**headphones */
  }
  33.33% {
    /* background-image: url('https://cdn-images.imagevenue.com/46/a7/5f/ME17OK8F_o.jpg'); */
  }
  50% {
    background-image: url('https://cdn-images.imagevenue.com/9f/2b/ef/ME17OK7T_o.jpg');/*TV */
  }
  66.67% {
    background-image: url('https://cdn-images.imagevenue.com/df/96/fc/ME17OK9D_o.jpg'); /*xbox */
  }
  83.33% {
    background-image: url('https://cdn-images.imagevenue.com/bb/6e/7a/ME17OK9I_o.jpg'); /**headphones */
  }
  100% {
    background-image: url('https://cdn-images.imagevenue.com/5c/54/73/ME17OK7B_o.jpg'); /**speaker */
  }
}

</style>
