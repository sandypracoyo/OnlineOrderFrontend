<template>
  <div class="EditProduct">
    <div class="container">
      <div class="card">
      <div class="card-body">
        <h4 class="card-title">Form Tambah Driver</h4>
        <form class="col-sm-8 container-fluid" v-on:submit.prevent="addProduct">
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">FullName</label>
              <div class="col-sm-7">
                <input type="text" class="form-control" v-model="nameProduct">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">No Handphone</label>
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
export default {
  name: 'addDriver',
  methods: {
    back () {
      this.$router.push('/driver')
    }
  }
}
</script>
