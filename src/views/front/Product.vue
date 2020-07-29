<template>
  <div>
      <h2>單一產品頁面</h2>
      <div class="row mt-3">
        <div class="col-6">
          <img :src="product.imageUrl" alt="" class="product-img">
        </div>
        <div class="col-6">
          <div class="d-flex flex-column align-items-start">
            <h3>{{product.title}}</h3>
            <p>商品描述:{{product.description}}</p>
            <p>NT${{product.price}}</p>
            <div class="d-flex">
              <div class="btn-group cart-btn-group mr-3" role="group" aria-label="...">
              <button type="button" class="btn btn-outline-info btn-sm">
                -
              </button>
              <input type="text" size="1" value="1" class="text-center" v-model="quantity">
              <button type="button" class="btn btn-outline-info btn-sm">
                +
              </button>
            </div>
            <button type="button" class="btn btn-outline-warning" >Addto Cart</button>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      quantity: 1,
    };
  },
  created() {
    // console.log(this.$route.params.id);
    const { id } = this.$route.params;
    this.$http.get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((response) => {
        this.product = response.data.data;
      });
  },

};
</script>

<style>
.product-img{
  width: 500px;
  height: auto;
  border-radius: 8px;
}

</style>
