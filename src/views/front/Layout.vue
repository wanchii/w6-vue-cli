<template>
  <div>
        <nav class="navbar navbar-light bg-light">
        <router-link to="/" class="navbar-brand">XXX</router-link>
        <div class="d-flex">
            <router-link to="/" class="nav-item nav-link">Home</router-link>
            <router-link to="/about" class="nav-item nav-link">About</router-link>
            <router-link to="/products" class="nav-item nav-link">Products</router-link>
            <router-link to="/cart" class="nav-item nav-link">cart</router-link>
            <router-link to="/login" class="nav-item nav-link">後台登入</router-link>
        </div>
        </nav>
        <section class="container py-2 mb-3">
        <router-view/>

        </section>
        <section class="footer mt-2 ">
            <p>&copy; 2020 Emily Chen</p>
        </section>
    </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
