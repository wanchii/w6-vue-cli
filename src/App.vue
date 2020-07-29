<template>
  <div id="app">
    <loading :active.sync="isLoading"></loading>

    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    this.isLoading = true;
    this.$http.get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`).then((response) => {
      // eslint-disable-next-line no-console
      console.log(response);
      this.isLoading = false;
    });
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
