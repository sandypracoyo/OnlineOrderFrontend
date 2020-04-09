<template>
  <div class="EditProduct">
    <div class="container">
      <div class="card">
      <div class="card-body">
        <h4 class="card-title">Form Edit Product</h4>
        <form class="col-sm-8 container-fluid">
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-7">
                <input type="text" class="form-control" v-model="nameProduct">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Price</label>
              <div class="col-sm-7">
                <input type="text" class="form-control" v-model="price">
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-9">
                <button type="submit" class="btn btn-primary float-right">Edit Data</button>
                <button type="button" class="btn btn-warning float-right mr-2" @click="back()">Back</button>
              </div>
            </div>
        </form>
    </div>
    </div>
</div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'EditProduct',
  data () {
    return {
      nameProduct: '',
      price: ''
    }
  },
  methods: {
    ...mapActions(['fetchDetailProduct']),
    back () {
      this.$router.push('/product')
    }
  },
  computed: mapGetters(['detailProduct']),
  created () {
    this.fetchDetailProduct(this.$route.params.id)
  }
}
</script>
