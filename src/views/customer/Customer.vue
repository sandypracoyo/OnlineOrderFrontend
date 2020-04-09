<template>
  <div class="product">
    <div class="container">
      <button type="button" class="btn btn-primary mb-2 float-right" @click="addCustomer()">+ Add New Customer</button>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Nama Customer</th>
            <th scope="col">Email</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody v-for="customer in allCustomer" :key="customer.id">
          <tr>
            <td>{{customer.id}}</td>
            <td>{{customer.fullname}}</td>
            <td>{{customer.email}}</td>
            <td>
              <button type="button" class="btn btn-info btn-sm mr-2" @click="detailCustomer(customer.id)">Detail</button>
              <button type="button" class="btn btn-warning btn-sm mr-2" @click="editCustomer(customer.id)">Edit</button>
              <button type="button" class="btn btn-danger btn-sm">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'customer',
  methods: {
    ...mapActions(['fetchCustomer']),
    editCustomer (id) {
      this.$router.push(`editcustomer/${id}`)
    },
    addCustomer () {
      this.$router.push('addcustomer')
    },
    detailCustomer (id) {
      this.$router.push(`detailcustomer/${id}`)
    }
  },
  computed: mapGetters(['allCustomer']),
  created () {
    this.fetchCustomer()
  }
}
</script>
