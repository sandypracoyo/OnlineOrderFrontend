<template>
  <div class="product">
    <div class="container">
      <button type="button" class="btn btn-primary mb-2 float-right" @click="addProduct()">+ Add New Product</button>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Nama Produk</th>
            <th scope="col">Harga</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody v-for="product in allProduct" :key="product.id">
          <tr>
            <td>{{product.id}}</td>
            <td>{{product.name}}</td>
            <td>{{product.price}}</td>
            <td>
              <button type="button" class="btn btn-warning btn-sm mr-2" @click="editProduct(product.id)">Edit</button>
              <button type="button" class="btn btn-danger btn-sm">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'product',
  methods: {
    ...mapActions(['fetchProduct']),
    editProduct (id) {
      this.$router.push(`editproduct/${id}`)
    },
    addProduct () {
      this.$router.push('addproduct')
    }
  },
  computed: mapGetters(['allProduct']),
  created () {
    this.fetchProduct()
  }
}
</script>
