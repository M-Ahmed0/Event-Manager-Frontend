<template>
  <section>
    <div class="container">
       <h2 class="mt-3 mt-lg-5">Please Login in</h2>
      <div class="row">
        <div class="col-md-6">
          <div v-if="errorMessage" class="alert alert-danger" role="alert">
            {{ errorMessage }}
          </div>
          <form>
            <div class="mb-3">
              <label for="inputUsername" class="form-label">Username</label>
              <input
                id="inputUsername"
                type="text"
                class="form-control"
                v-model="username"
              />
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                v-model="password"
              />
            </div>
            <button type="button" @click="login()" class="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: null,
    };
  },
  methods: {
    // login through a store action
    
    login( ) {

      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      })
      .then(() => {
        this.$router.replace('/events');
      })
       .catch((error) => {
         
         this.errorMessage =  "invalid credentials";
          console.log(error);
          });
    
    },
  },
};
</script>

<style>
</style>