<template>
<div class="container mb-3">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Simple Order</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="#" @click="product()">Product</a>
      <a class="nav-item nav-link" href="#" @click="customer()">Customer</a>
      <a class="nav-item nav-link" href="#" @click="driver()">Driver</a>
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    product () {
      this.$router.push('/product')
    },
    customer () {
      this.$router.push('/customer')
    },
    driver () {
      this.$router.push('/driver')
    }
  }
}
</script>
