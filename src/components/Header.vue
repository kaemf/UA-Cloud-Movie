<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
          <router-link to="/" class="navbar-brand">Movie App by Yaroslav</router-link>
          <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
          >
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                      <router-link to="/home" class="nav-link">Home</router-link>
                  </li>
                  <li class="nav-item" v-if="!isLoggedIn">
                      <router-link to="/login" class="nav-link">Login</router-link>
                  </li>

                  <li class="nav-item" v-if="isLoggedIn">
                      <router-link @click="logout" to="/" class="nav-link">Logout</router-link>
                  </li>
              </ul>
          </div>
      </div>
  </header>
</template>
  
  <script>
  export default {
    name: 'Header',

    computed: {
      isLoggedIn() {
        return localStorage.getItem('session');
      }
    },

    methods: {
      logout() {
        localStorage.removeItem('session');
        this.$router.push('/login');
      }
    }
  };
  </script>