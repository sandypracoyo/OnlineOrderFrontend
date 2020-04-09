<template>
  <div class="product">
    <div class="container">
      <button type="button" class="btn btn-primary mb-2 float-right" @click="addDriver()">+ Add New Driver</button>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Nama Driver</th>
            <th scope="col">No Handphone</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody v-for="driver in allDriver" :key="driver.id">
          <tr>
            <td>{{driver.id}}</td>
            <td>{{driver.fullname}}</td>
            <td>{{driver.phone_number}}</td>
            <td>
              <button type="button" class="btn btn-warning btn-sm mr-2" @click="editDriver(driver.id)">Edit</button>
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
  name: 'driver',
  methods: {
    ...mapActions(['fetchDriver']),
    addDriver () {
      this.$router.push('/adddriver')
    },
    editDriver (id) {
      this.$router.push(`/editdriver/${id}`)
    }
  },
  computed: mapGetters(['allDriver']),
  created () {
    this.fetchDriver()
  }
}
</script>
