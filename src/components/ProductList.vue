
<template>
  <el-table
    :data="products"
    row-key="id"
    stripe
    height="600"
    style="width: 100%">
    <el-table-column
      prop="title"
      label="名称">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格"
      width="180">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="addProductToCart(scope.row)" type="text" size="small" :disabled="!scope.row.inventory">Add to cart</el-button>
      </template>
    </el-table-column>
  </el-table>
  
</template>


<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState({
    products: state => state.product.all
  }),
  methods: mapActions('cart', [
    'addProductToCart'
  ]),
  created () {
    this.$store.dispatch('product/getAllProducts')
  }
}
</script>