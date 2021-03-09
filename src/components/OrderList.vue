<template>
  <div class="flex-col">
    <el-table
      :data="dispalyOrders"
      row-key="id"
      stripe
      height="600"
      clsss="flex-center"
      empty-text="Orders is on the way!!!"
      style="width: 100%"
    >
      <el-table-column prop="customer" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="destination" label="地址"> </el-table-column>
      <el-table-column prop="item" label="货物" width="180"> </el-table-column>
      <el-table-column prop="price" label="价格" width="180"> </el-table-column>
    </el-table>

    <el-pagination
      class="flex-bottom"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      @prev-click="currentPage--"
      @next-click="currentPage++"
      :current-page="currentPage"
      :page-sizes="[10, 20, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import { pagination } from "../util";

export default {
  data() {
    return {
      isLoading: true,
      pageSize: 10,
      currentPage: 1,
    };
  },
  computed: mapState({
    orders: (state) => state.order.all,
    total() {
      return this.orders.length;
    },
    dispalyOrders() {
      return pagination(this.currentPage, this.pageSize, this.orders);
    },
  }),
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    handleSizeChange() {},
    handleCurrentChange() {},
  },
  created() {
    this.$socket.on("connect", () => {
      // console.log("open:", data);

      // socket.emit("addUser", "userName");
      this.$socket.on("order_event", (data) => {
        // console.log("Received order event", data);
        this.isLoading = false;
        this.$store.dispatch("order/receiveOrderList", data);
      });
    });
    this.$socket.open();
  },
  beforeDestroy() {
    this.$socket.close();
  },
  // this.$store.dispatch('products/getAllProducts')
};
</script>