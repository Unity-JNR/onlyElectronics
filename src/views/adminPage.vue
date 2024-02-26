<template>
    <div>
        <navigation/>
        <details>
            <summary>
                <table class="table table-bordered table-hover table-dark">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>prodName</th>
                            <th>quantity</th>
                            <th>amount</th>
                            <th>Category</th>
                            <th>img</th>
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
                        </tr>
                    </tbody>
                </table>
            </summary>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
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
        footers
    },
    methods: {
        async getadmin() {
            await this.$store.dispatch('getadmin');
        }
    },
    mounted() {
        this.getadmin();
    }
}
</script>

<style>
    #image{
        width: 35%;
        object-fit:contain;
        height: 175px
    }
</style>
