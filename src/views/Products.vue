<template>
  <div class="container products">
    <h2>All products</h2>
    <Products :products="filterProductsByInventory" :func="buyProduct">
      <template v-slot:option>Add</template>
      <template v-slot:inventory>Stock</template>
      <template v-slot:icon @click="$refs.throwEvent.saludar()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -4 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" class="icon__icon"><path d="M7 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM.962 1.923A.962.962 0 0 1 .962 0h1.151c.902 0 1.682.626 1.878 1.506l1.253 5.642c.196.88.976 1.506 1.878 1.506h7.512l1.442-5.77H6.731a.962.962 0 0 1 0-1.922h9.345a1.923 1.923 0 0 1 1.866 2.39L16.5 9.12a1.923 1.923 0 0 1-1.866 1.457H7.122a3.846 3.846 0 0 1-3.755-3.012L2.113 1.923H.962z"></path></svg>
      </template>
    </Products>
  </div>
</template>

<script>
import Products from "@/components/Products.vue";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "viewProducts",
  async created() {
    try {
      await this.getProductsAPI()
    } catch (error) {
      console.log(error)
    }
  },
  methods : {
    ...mapActions(['getProductsAPI','buyProduct'])
  },
  computed : {
    ...mapGetters(['filterProductsByInventory']),
    ...mapState(['selectedProduct'])
  },
  components: { Products },
};
</script>
