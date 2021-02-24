<template>
  <div class="container">
    <template v-if="filterCardShopingByUnits.length===0">
      <h2>Card Shoping empty</h2>
      <div class="icon-empty">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </div>
    </template>
    <template v-else>
      <h2>You card Shoping</h2>
    <Products :products="filterCardShopingByUnits" :func="removeProductCardShoping">
      <template v-slot:option>Remove</template>
      <template v-slot:inventory>Units</template>
      <template v-slot:icon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" class="icon__icon"><path d="M6 2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-.133l-.68 10.2a3 3 0 0 1-2.993 2.8H5.826a3 3 0 0 1-2.993-2.796L2.137 7H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4zm10 2H2v1h14V4zM4.141 7l.687 10.068a1 1 0 0 0 .998.932h6.368a1 1 0 0 0 .998-.934L13.862 7h-9.72zM7 8a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"></path></svg>
      </template>
    </Products>
    <Total :subtotal="calculateSubtotal" :total="calculateTotalIVA"/>
    </template>
  </div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'
import Products from '@/components/Products.vue'
import Total from '@/components/Total.vue'
export default {
  name : 'viewShopping',
  computed : {
      ...mapGetters(['filterCardShopingByUnits','calculateSubtotal','calculateTotalIVA'])
    },
  methods : {
    ...mapActions(['removeProductCardShoping'])
  },
  components : {Products, Total}
}
</script>


<style scoped>
.icon-empty{
  width: 20%;
  height: 20%;
  margin-right: auto;
  margin-left: auto;
}
</style>