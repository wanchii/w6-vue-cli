<template>
    <div>
      <h2>產品頁面</h2>
        <!-- 表格 -->
        <table class="table product">
            <thead class="font-weight-bold">
                <tr>
                    <th scope="col">分類</th>
                    <th scope="col">產品名稱</th>
                    <th scope="col">原價</th>
                    <th scope="col">售價</th>
                    <th scope="col">是否啟用</th>
                    <th scope="col">編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in products" :key="item.id">
                    <td>{{ item.category }}</td>
                        <td>{{ item.title }}</td>
                        <td class="text-right">{{ item.origin_price}}</td>
                        <td class="text-right">{{ item.price }}</td>
                        <td>
                            <span class="text-success" v-if="item.enabled">啟用</span>
                            <span class="text-secondary" v-else>未啟用</span>
                        </td>
                        <td>
                            <div class="btn-group btn-group-sm" role="group" aria-label="Basic">
                                <button type="button" class="btn btn-outline-primary">編輯</button>
                                <button type="button" class="btn btn-outline-danger">刪除</button>
                            </div>
                        </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  props: ['token'],
  created() {
    // this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    // this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products`;
    this.$http.get(url)
      .then((response) => {
        this.products = response.data.data;
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        this.$router.push('login');
      });
  },

};
</script>

<style>

</style>
