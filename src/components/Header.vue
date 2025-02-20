<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <router-link to="/home" class="navbar-brand">Movie App by Yaroslav</router-link>
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
            <button @click="logout" class="nav-link btn btn-link">Logout ({{ name }})</button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      name: '',
      isLoggedIn: false
    };
  },
  mounted() {
    this.updateSessionData();
    window.addEventListener('storage', this.updateSessionData);
  },
  beforeDestroy() {
    window.removeEventListener('storage', this.updateSessionData);
  },
  methods: {
    updateSessionData() {
      const session = localStorage.getItem('session');
      this.isLoggedIn = !!session;
      this.name = session ? JSON.parse(session).username : '';
    },
    logout() {
      localStorage.removeItem('session');
      this.updateSessionData();
      this.$router.push('/login');
    }
  }
};
</script>