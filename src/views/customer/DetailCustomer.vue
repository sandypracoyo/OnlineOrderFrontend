<template>
  <div class="EditCustomer">
    <div class="container">
      <div class="card">
      <div class="card-body">
        <h4 class="card-title">Detail Customer</h4>
        <form class="col-sm-8 container-fluid">
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-3 col-form-label">Fullname</label>
              <div class="col-sm-7">
                <input type="text" class="form-control" v-model="detailCustomer.fullname" disabled>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-3 col-form-label">Username</label>
              <div class="col-sm-7">
                <input type="text" class="form-control" v-model="detailCustomer.username" disabled>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
              <div class="col-sm-7">
                <input type="text" class="form-control" v-model="detailCustomer.email" disabled>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-3 col-form-label">Phone Number</label>
              <div class="col-sm-7">
                <input type="text" class="form-control" v-model="detailCustomer.phone_number" disabled>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10">
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
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'EditCustomer',
  data () {
    return {
      nameCustomer: '',
      price: ''
    }
  },
  methods: {
    ...mapActions(['fetchDetailCustomer']),
    back () {
      this.$router.push('/customer')
    }
  },
  computed: mapGetters(['detailCustomer']),
  created () {
    this.fetchDetailCustomer(this.$route.params.id)
  }
}
</script>
