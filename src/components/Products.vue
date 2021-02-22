<template>
  <table class="table table-striped table-bordered table-sm">
    <caption>
      List of products
    </caption>
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Product</th>
        <th scope="col">Price</th>
        <th scope="col"><slot name="inventory"></slot></th>
        <th scope="col">Option</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.title }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.inventory }}</td>
        <td><button class="btn btn-sm" @click="buyProduct(product)"><slot name="icon"></slot></button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>

import {buyProduct} from '../mixins/buyProduct'

export default {
  props : {
    products : {
      type : Array,
      required : true
    }
  },
  name: "componentProducts",
  mixins : [buyProduct]
};
</script>

<style lang="scss" scoped></style>
