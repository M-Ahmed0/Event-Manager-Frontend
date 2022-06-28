<template>
  <nav class="navbar navbar-expand-md navbar-dark  mb-4" style="background-color: #000000">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mr-auto  mb-2 mb-md-0">
        <li class="nav-item">
         
          <router-link to="/" class="nav-link" active-class="active"
            >Home</router-link
          >
        </li>
        <li v-if="this.$store.getters.isAuthenticated" class="nav-item">
      
          <router-link to="/events" class="nav-link" active-class="active"
            >Events</router-link
          >
        </li>&nbsp;&nbsp;&nbsp;&nbsp;
         <ul class="navbar-nav ml-auto">

           <li v-if="this.$store.getters.isAuthenticated" class="nav-item  ">
      
          <a v-on:click="logout()" class="btn btn-warning " active-class="text-success">Logout</a>
        </li>
         </ul>

         <li v-if="!this.$store.getters.isAuthenticated" class="nav-item">
      
          <router-link to="/login" class="nav-link" active-class="active"
            >Login</router-link
          >
        </li>   
      </ul>
      <form class="form-inline my-2 my-lg-0">
    
        <p  class="navbar-brand my-2 my-sm-0"> Logged in as: {{role}} </p>
    </form>

     

    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      role: localStorage.getItem('role'),
      
    };
  },
  methods: {
		logout() {
			this.$store
				.dispatch('logout')
				.then(() => {
					this.$router.replace('/');
				})
				.catch((err) => console.error(err));
		},
	},
};
</script>

<style>
</style>