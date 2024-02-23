<template>
	<navigation />
	<!-- <div class="body mt-lg-5">
  
	  <div class="container-fluid d-flex w-100 h-100 p-3 mx-auto flex-column" id="txt">
		<main class="px-4">
		  <h1 class="cover-head">Cover your page.</h1>
		  <p class="lead" id="cover">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
		  <p class="lead" id="cover">
			<router-link to="/about" class="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</router-link>
		  </p>
		</main>
	  </div>
	</div>    -->
	<div class="container-fluid main">
  <!-- Card 2 -->
  <div id="c2" class="card1">
    <div class="card1-info">
      <div class="contact-title">Contact</div>
      <div class="card1-contact">
        <li class="icon-contact">
          Tel:(+00) 000 99999-0000
        </li>
        <li class="icon-contact">
          Email: contact@mail.com
        </li>
      </div>
    </div>
  </div>

  <!-- Card 3 -->
  <div id="c3" class="card1">
    <div class="card1-info">
      <li class="address-icon"></li>
      <li class="address-title">Address:</li>
      <li class="address">Champs Elysees, Paris.</li>
    </div>
  </div>

  <!-- Card 1 -->
  <div id="c1" class="card1">
    <div class="card1-info">
      <div class="card1-avatar"></div>
      <div class="card1-title">Main Title</div>
      <div class="card1-subtitle">Sub-title</div>
      <div class="card1-social">
        <li id="cs1" class="card1-social-icon">
          Twitter
        </li>
        <li id="cs2" class="card1-social-icon">
          LinkedIn
        </li>
        <li id="cs3" class="card1-social-icon">
          GitHub
        </li>
      </div>
    </div>
  </div>

  <!-- Additional Cards -->
  <div class="card1">
    <!-- Card 4 -->
    <div class="card1-info">
      <div class="card1-title">Card 4 Title</div>
      <div class="card1-subtitle">Card 4 Sub-title</div>
      <div class="card1-content">Card 4 Content Goes Here</div>
    </div>
  </div>

  <div class="card1">
    <!-- Card 5 -->
    <div class="card1-info">
      <div class="card1-title">Card 5 Title</div>
      <div class="card1-subtitle">Card 5 Sub-title</div>
      <div class="card1-content">Card 5 Content Goes Here</div>
    </div>
  </div>

  <div class="card1">
    <!-- Card 6 -->
    <div class="card1-info">
      <div class="card1-title">Card 6 Title</div>
      <div class="card1-subtitle">Card 6 Sub-title</div>
      <div class="card1-content">Card 6 Content Goes Here</div>
    </div>
  </div>

  <div class="card1">
    <!-- Card 7 -->
    <div class="card1-info">
      <div class="card1-title">Card 7 Title</div>
      <div class="card1-subtitle">Card 7 Sub-title</div>
      <div class="card1-content">Card 7 Content Goes Here</div>
    </div>
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
  .main {
  display: flex;
  place-items: center;
  width: 190px;
  height: 254px;
  justify-content: center;
  align-items: center;
}

.card1 {
  width: 190px;
  height: 254px;
  background: #FAF1F6;
  padding: 2rem 1.5rem;
  transition: box-shadow .3s ease, transform .2s ease;
  display: flex;
  flex-direction: column;
  position: absolute;
}

.card1-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card1-avatar {
  background: radial-gradient(#A8A6B6,#B3B1BF,#BDBBC7,#C5C4CE,#E2E2E7);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transition: transform .2s ease;
}

.card1-avatar svg {
  padding-top: 5px;
  height: 80px;
  width: 100px;
  fill: #515F65;
}

.card1-social {
  display: flex;
  justify-content: space-around;
  width: 190px;
  margin-top: 10%;
  text-align: center;
}

.card1-social-icon {
  list-style: none;
  color: #515F65;
  font-size: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card1-social-icon svg {
  display: block;
  height: 20px;
  width: 20px;
  fill: #515F65;
  cursor: pointer;
}

.card1-title {
  color: #1b1b1b;
  font-size: 1.5em;
  font-weight: 600;
  line-height: 2rem;
  margin-top: 5px;
}

.card1-subtitle {
  color: #7e93a0;
  font-size: 1.0em;
}

.address-icon {
  fill: #515F65;
  height: 150px;
  width: 100px;
  list-style: none;
  justify-content: space-around;
}

.address-title {
  color: #333;
  font-size: 1.0em;
  font-weight: 600;
  list-style: none;
}

.address {
  color: #859ba8;
  font-size: 0.8em;
  list-style: none;
  padding-left: 20px;
  ;
}

.contact-title {
  color: #333;
  font-size: 1.5em;
  font-weight: 600;
  margin-top: 45%;
  padding-bottom: 5px;
}

.card1-contact {
  color: #859ba8;
  font-size: 0.8em;
}

.icon-contact {
  list-style: none;
  display: flex;
  align-items: center;
}

.icon-contact svg {
  display: block;
  height: 18px;
  width: 18px;
  fill: #515F65;
  padding-right: 5px;
}

.card1:hover {
  box-shadow: 0 10px 50px #23232333;
}

.card1:hover .card1-info {
  transform: translateY(-5%);
}

.card1-avatar:hover {
  transform: scale(1.1);
}

#cs1:hover {
  transform: scale(2.0);
}

#cs2:hover {
  transform: scale(2.0);
}

#cs3:hover {
  transform: scale(2.0);
}

.main:hover #c1 {
  transform: translateX(0px);
}

.main:hover #c2 {
  transform: translateX(200px);
}

.main:hover #c3 {
  transform: translateX(-200px);
}
  
  </style>
  