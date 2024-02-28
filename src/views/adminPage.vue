<template>
    <div>
        <navigation/>
        <details>
            <summary>
                <div class="table-responsive">
                    <table class="table table-bordered table-hover table-dark">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>prodName</th>
                                <th>quantity</th>
                                <th>amount</th>
                                <th>Category</th>
                                <th>img</th>
                                <th>edit</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in $store.state.admin" :key="item.prodID">
                                <td>{{ item.prodID }}</td>
                                <td>{{ item.prodName }}</td>
                                <td>{{ item.quantity }}</td>
                                <td>R{{ item.amount }}</td>
                                <td>{{ item.Category }}</td>
                                <td><img :src="item.prodUrl" alt="Product Image" id="image" class=" img-fluid"></td>
                                <td><button class="btnes" @click="updateproduct(item.prodID)">edit</button></td>
                                <td><button class="btnes" @click="deleteproduct(item.prodID)">delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </summary>
            <div>
        <!-- <input type="number" placeholder="id" v-model="productID"> -->
        <div>
        <input id="input" type="text" placeholder="productname" v-model="prodName">
        <input id="input" type="number" placeholder="quantity" v-model="quantity">
        <input id="input" type="number" placeholder="amount" v-model="amount">
        <input id="input" type="text" placeholder="category" v-model="Category">
        <input id="input" type="text" placeholder="img" v-model="prodUrl">
        <button @click="addproducts()" id="btn">add</button>
    </div>
    </div>
        </details>

    </div>
    <footers/>
</template>

<script>
import navigation from '@/components/navigation.vue';
import footers from '@/components/footers.vue';




export default {

    components: {
        navigation,
        footers,
        
        
    },
    data() {
     return {
         prodName:'',
         quantity:'',
         amount:'',
         Category:'',
         prodUrl:''
     }

    },
    methods: {
        async getadmin() {
            await this.$store.dispatch('getadmin');
        },
  deleteproduct(prodID) {
            this.$store.dispatch('deleteproduct',prodID)
          },
          updateproduct(id){
            let edit = {
                prodID:id,
                prodName:this.prodName,
                quantity:this.quantity,
                amount:this.amount,
                Category:this.Category,
                prodUrl:this.prodUrl
            }
            this.$store.dispatch('updateproduct',edit)
          

          } ,
          addproducts(){
            console.log(this.$store.data);
    this.$store.dispatch('addproduct',this.$data)
  }
    },
    mounted() {
        this.getadmin();
    }
}
</script>

<style scoped>
    #image{
        width: 35%;
        object-fit:contain;
        height: 175px
    }

    #btn{
        margin-top: 20px !important;
        margin-bottom: 20px !important;
        width: 100px !important;
        height: 25px !important;
        border-radius: 10px !important;
        border: 1px solid black !important;
        background-color: white !important;
        color: black !important;
        font-size: 15px !important;
        font-weight: bold !important;
        cursor: pointer !important;
    }
    .btnes{
        margin-top: 20px!important;
        margin-bottom: 20px!important;
        width: 100px!important;
        height: 25px!important;
        border-radius: 10px!important;
        border: 1px solid white!important;
        background: transparent;
        color: white!important;
        font-size: 15px!important;
        font-weight: bold!important;
        cursor: pointer!important;
    }

    #input {
    font-size: 20px;
    width: 100%;
    border: none;
    border-bottom: 2px solid #ccc;
    padding: 5px 0;
    background-color: transparent;
    outline: none;

    }
    #input::placeholder{
        color: white ;
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

</style>
