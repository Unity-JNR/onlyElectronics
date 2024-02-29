    <template> 
      <navigation/>
    <div class="container">
      <div class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search" @input="searching()">
     
        
          </div>
    </div>

      <div class="container me-5">
      <div class="row">
          <div class="col-lg-4 pb-5" v-for="item,index in searching() || cato()" :key="item.prodID">
            <article class="cards">
      <div class="card-int">
          <span class="card__span">{{item.Category}}</span>
      <img :src="item.prodUrl" alt="" class="img img-fluid mt-5">
          <div class="card-data">
            <p class="title">{{ item.prodName }}
            </p>
            <p :id="'c'+index" >{{ descriptions[index] }}</p>
            <p>R{{ item.amount }}</p>
            <router-link @click="getproduct(item.prodID)" :to="{ name: 'productDetails', params: { prodID: item.prodID }} " class="btn btn-dark">details</router-link>
      
          </div>
      </div>
      </article>
          </div>
      </div>
      </div>


    

    





    <footers/>  

    </template>
    <script>
    import navigation from '@/components/navigation.vue';
    import footers from '@/components/footers.vue';
    import sweet from 'sweetalert';








    export default {
        components: {
            navigation,
            footers
        
        },
        data() {
          return {
            descriptions: [
            `The JBL speaker combines compact design with powerful audio performance, making it a perfect portable companion for immersive sound on the go.`,
            `The Volcano Bazooka unleashes explosive power with its cutting-edge design, propelling molten fury in a controlled burst to conquer any geological challenge.`,
            `Beats headphones blend style and powerful audio, appealing to music lovers and fashion-conscious consumers with their sleek design and impressive sound quality.`,
            `TXbox Series S: Compact, powerful console with high-quality graphics, smooth gameplay, and a digital-only game library.`,
            'The PlayStation 5 offers an immersive gaming experience with powerful hardware, stunning graphics, and innovative features for enthusiasts.',
            'The Razer gaming laptop offers top-notch performance, impressive visuals, and a sleek design for an immersive gaming experience.',
            'Gaming laptop with powerful AMD Ryzen 7 cpu for top-tier gaming, featuring advanced technology and quality components.',
            'The LG O-LED Curved TV offers an immersive viewing experience with its vibrant OLED display and sleek, curved design.',
            'TSamsung UHD TV offers stunning 4K resolution, vibrant colors, and smart features for an immersive and high-quality viewing experience.',
            'Samsung Galaxy S24 Ultra: Advanced camera, refined design, top-notch performance for a true flagship experience.',
            'Sony Noise-Canceling Headphones provide premium sound with advanced noise cancellation.',
            'The iPhone 15 Pro Max features a sleek design, an advanced triple-lens camera system, and a powerful A16 Bionic chip for enhanced performance.',
            // Add more descriptions as needed
          ],
          search:''
        
          
        
          }
          
        },
        methods: {
          getproduct(prodID) {
              console.log(prodID);
              this.$store.dispatch('getproduct',prodID);
            },
            searching() {
      try {
        let storage = this.$store.state.products;
        let s = this.search;
        let v = storage.filter(prod => {
          return prod.prodName.toLowerCase().includes(s.toLowerCase()) || prod.Category.toLowerCase().includes(s.toLowerCase());
        });
        if (v.length === 0) {
            // Display SweetAlert error when the filtered array is empty
            sweet({
              title: 'Error',
              text: 'No matching items found.',
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          }
        console.log(v);
        return v;
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'Something went wrong',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        console.error("Error in searching:", e);
    
      }
    }
    

        },
        computed:{
            getproducts(){
                this.$store.dispatch('getproducts')
            },
         
        
        },
        mounted(){
            this.getproducts
            this.searching()
          
            
        }

    }
    </script>
    <style scoped>

    p{
        color: #000;
    }
    .cards {
      width: 300px;
      padding: 10px;
      background-image: linear-gradient(to right bottom, #fa11b0, #7b05ae, #fc06b6, #f5ecf7, #f70ea5);
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
      background-color: gray;
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

    .group {
      display: flex;
      line-height: 28px;
      align-items: center;
      position: relative;
      max-width: 190px;
    }

    .input {
      width: 100%;
      height: 40px;
      line-height: 28px;
      padding: 0 1rem;
      padding-left: 2.5rem;
      border: 2px solid transparent;
      border-radius: 8px;
      outline: none;
      background-color: #f3f3f4;
      color: #0d0c22;
      transition: 0.3s ease;
    }

    .input::placeholder {
      color: #9e9ea7;
    }

    .input:focus,
    input:hover {
      outline: none;
      border-color: rgba(247, 127, 0, 0.4);
      background-color: #fff;
      box-shadow: 0 0 0 4px rgb(247 127 0 / 10%);
    }

    .icon {
      position: absolute;
      left: 1rem;
      fill: #9e9ea7;
      width: 1rem;
      height: 1rem;
    }


      
    </style>