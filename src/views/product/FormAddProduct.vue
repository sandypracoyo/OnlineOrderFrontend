<template>
  <div class="EditProduct">
    <div class="container">
      <div class="card">
      <div class="card-body">
        <h4 class="card-title">Form Tambah Product</h4>
        <form class="col-sm-8 container-fluid" v-on:submit.prevent="addProduct">
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-7">
                <input type="text" class="form-control" v-model="nameProduct">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Price</label>
              <div class="col-sm-7">
                <input type="number" class="form-control" v-model="price">
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-9">
                <button type="submit" class="btn btn-primary float-right ml-1">Add Data</button>
                <button type="button" class="btn btn-warning float-right" @click="back()">Back</button>
              </div>
            </div>
        </form>
    </div>
    </div>
</div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'FormAddProduct',
  data () {
    return {
      nameProduct: '',
      price: ''
    }
  },
  methods: {
    ...mapActions(['addProduct']),
    back () {
      this.$router.push('product')
    },
    addProduct () {
      const data = {
        data: {
          attributes: {
            name: this.name,
            price: this.price
          }
        }
      }
      this.addProduct(data)
    }
  }
}
</script>
