<template>
    <div>
        <div class="container">
            <div class="d-flex justify-content-center align-items-center">
                <div class="loginForm p-4 ">
                    <h1 class="font-weight-bold text-center mb-3"> Login</h1>
                    <!-- @submit.prevent，事件修飾符，表單送出後畫面不會重新載入-->
                    <form @submit.prevent="signin">
                        <div class="form-group">
                            <label for="inputEmail1" class="sr-only">Email address</label>
                            <input type="email" class="form-control" id="inputEmail1"
                            aria-describedby="emailHelp" placeholder="Enter email"
                            v-model='user.email' required  autocomplete="username">

                        </div>
                        <div class="form-group">
                            <label for="inputPassword1" class="sr-only">Password</label>
                            <input type="password" class="form-control" id="inputPassword1"
                            placeholder="Password" v-model="user.password" required
                            autocomplete="current-password">
                        </div>

                        <button type="submit" class="btn btn-primary w-100">登入</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      token: '',
    };
  },
  methods: {
    signin() {
      const url = `${process.env.VUE_APP_APIPATH}auth/login`;
      this.$http.post(url, this.user)
        .then((response) => {
          const { token } = response.data;
          const { expired } = response.data;
          document.cookie = `token=${token}; expires=${new Date(expired * 1000)}; path=/`;
          this.$router.push('/admin');
        }).catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error.response);
        });
    },

  },
};
</script>
