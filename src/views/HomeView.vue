<template>
	<navigation />
	<!-- <video autoplay loop controls>
  <source src="https://drive.google.com/uc?export=download&id=1atY76e_eCjPON3o_A-JhiNvjT_HZd1EO" type="video/mp4">
 
</video> -->
<VideoPlayer/>





	<div class="container mt-5">
    <h2 class="mb-4">Featured Items</h2>

    <div class="row">
      <!-- Featured Item 1 -->
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="image1.jpg" class="card-img-top" alt="Featured Item 1">
          <div class="card-body">
            <h5 class="card-title">Item 1</h5>
            <p class="card-text">Description for Item 1.</p>
            <a href="#" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>

      <!-- Featured Item 2 -->
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="image2.jpg" class="card-img-top" alt="Featured Item 2">
          <div class="card-body">
            <h5 class="card-title">Item 2</h5>
            <p class="card-text">Description for Item 2.</p>
            <a href="#" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>

      <!-- Featured Item 3 -->
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="image3.jpg" class="card-img-top" alt="Featured Item 3">
          <div class="card-body">
            <h5 class="card-title">Item 3</h5>
            <p class="card-text">Description for Item 3.</p>
            <a href="#" class="btn btn-primary">View Details</a>
          </div>
        </div>
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
	data() {
    return {
      playerId: 'youtube-player', // Change this if needed
      videoId: 'YOUR_YOUTUBE_VIDEO_ID',
      player: null,
    };
  },
  mounted() {
    this.createPlayer();
  },
  methods: {
    createPlayer() {
      // Ensure that the YouTube API script has loaded
      if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
        // Retry in 100 milliseconds if not yet loaded
        setTimeout(this.createPlayer, 100);
        return;
      }

      // Create the YouTube player
      this.player = new YT.Player(this.playerId, {
        height: '360',
        width: '640',
        videoId: this.videoId,
        events: {
          onReady: this.onPlayerReady,
        },
      });
    },
    onPlayerReady(event) {
      // You can perform actions when the player is ready
      console.log('Player ready:', event);
    },
  }
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
  