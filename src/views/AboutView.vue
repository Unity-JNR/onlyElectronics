<template>
  <navigation/>
  <div class="about">
    <div class="aboutbox">
      <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="my-4" id="heading">About OnlyElectronics</h1>
        <p>Welcome to OnlyElectronics, your one-stop destination for cutting-edge electronic products. At OnlyElectronics, we are committed to providing the latest and most innovative electronic devices to meet the diverse needs of our customers.</p>

        <p>Our journey began with a passion for technology and a vision to enhance the way people live, work, and connect. With a team of dedicated professionals, we strive to deliver high-quality products that combine functionality, style, and reliability.</p>

        <p>Key features of OnlyElectronics:</p>
        <ul>
          <li>Wide Range: Explore a vast collection of electronic products, including smartphones, laptops, smartwatches, audio devices, and much more.</li>
          <li>Quality Assurance: We prioritize quality, ensuring that each product undergoes rigorous testing to meet industry standards.</li>
          <li>Customer Satisfaction: Our commitment to customer satisfaction is paramount. We aim to provide excellent service and support throughout your shopping experience.</li>
        </ul>

        <p>Whether you are a tech enthusiast, a professional, or someone looking for the latest gadgets, OnlyElectronics has something for everyone. Join us on this exciting journey as we continue to push the boundaries of technology and bring you the best electronic innovations.</p>

        <p>Thank you for choosing OnlyElectronics!</p>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue';

export default {

  components: {
    navigation
  }

}

</script>

<style>
body.about {
  background-image: url('https://cdn-images.imagevenue.com/71/bf/a0/ME17O9IQ_o.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-image: fill 0 linear-gradient(rgba(0,0,0,0.289),#00000075);
  min-height: 100vh;
}

.aboutbox {
  max-width: 800px !important; /* Adjust the maximum width based on your design */
  margin: auto !important; /* Center the box horizontally */
  padding: 20px !important; /* Add some padding for better spacing */
  background: rgba(0, 0, 0, 0.4) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  backdrop-filter: blur(10px) !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

.about {
  display: flex;
  justify-content: center;
}

#heading {
  color: rgb(8, 190, 190) !important;
}

p {
  font-weight: 800 !important;
  color: white !important;
}
li{
  font-weight: 700 !important;
  color: rgb(8, 190, 190) !important;
}
</style>
