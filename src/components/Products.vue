<template>
  <table class="table table-striped table-bordered table-sm align-middle table-responsive">
    <caption>
      List of products
    </caption>
    <thead>
      <tr>
        <!-- <th scope="col">Id</th> -->
        <th scope="col">Product</th>
        <th scope="col">Price</th>
        <th scope="col"><slot name="inventory"></slot></th>
        <th scope="col"><slot name="option"></slot></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <!-- <td>{{ product.id }}</td> -->
        <td>{{ product.title }}</td>
        <td>Q. {{ product.price }}</td>
        <td>{{ product.inventory }}</td>
        <td>
          <button class="btn btn-sm" @click="func(product)"><slot name="icon"></slot></button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  props : {
    products : {
      type : Array,
      required : true
    },
    func : {
      type : Function,
      required : true
    }
  },
  name: "componentProducts"
};
</script>

<style lang="scss" scoped></style>
