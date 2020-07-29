<template>
    <div>
        <section>
          <div class="container">
            <div class="row justify-content-center">
                <h1 class="font-weight-bold mb-4">產品列表</h1>
                <div class="row">
                    <div class="col-4" v-for="item in products" :key="item.id">
                        <div class="card mb-3">
                            <img :src="item.imageUrl[0]" class="card-img-top" alt="..."
                                style="height: 240px;object-fit: cover;">
                            <div class="card-body">
                                <h5 class="card-title">{{ item.title }}</h5>

                                <p class="card-text">{{item.content}}</p>
                                <p class="price h5">NT${{ item.price  }}
                                  <del class="ml-2 h6 text-black-50">NT${{item.origin_price}}</del>
                                </p>
                                <div class="d-flex justify-content-between py-2">
<router-link :to='`/product/${item.id}`'  type="button" class="btn btn-warning">More..</router-link>
                        <!-- <button type="button" class="btn btn-warning">More info</button> -->
<button type="button" class="btn btn-outline-warning" @click="addToCart(item)">Addto Cart</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
          </div>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.$http.get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`)
      .then((response) => {
        this.products = response.data.data;
      });
  },
  methods: {

  },
};
</script>
