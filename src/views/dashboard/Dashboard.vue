<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="aside p-3 h-100 d-flex flex-column justify-content-between bg-light">
          <div class="aside-list">
            <h2 class="mb-5">後臺管理頁面</h2>
            <ul class="menu pl-0 d-flex flex-column list-unstyled">
              <li class="menu-item mb-4">
                <router-link to="/admin">後台管理頁面</router-link>
              </li>
              <li class="menu-item mb-4">
                <router-link to="/admin/products">產品頁面</router-link>
              </li>
              <li class="menu-item mb-4">
                <router-link to="/admin/coupons">優惠券</router-link>
              </li>
              <li class="menu-item mb-4 disabled">
                  訂單列表
              </li>
              <li class="menu-item mb-4 disabled">
                圖片儲存列
              </li>
            </ul>
          </div>
        </div>
          </div>
          <div class="col-9">
            <div class="main py-3">
              <h2>這裡是管理頁面</h2>
              <div class="row">
                <div class="col-12">
                  <router-view :token="token" v-if="checkSuccess" />

                </div>

              </div>
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
      token: '',
      checkSuccess: false,

    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      // 從cookies取得token
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
      // 將token加到header
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      // POST api/auth/check 驗證token
      const url = `${process.env.VUE_APP_APIPATH}auth/check`;

      this.$http.post(url, { api_token: this.token })
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res);
          this.checkSuccess = true;
        }).catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error.response.data.errors);
          this.$router.push('/login');
        });
    },

  },

};
</script>

<style>

</style>
