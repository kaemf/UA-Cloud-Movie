<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="card p-4 shadow-lg" style="width: 400px">
      <h2 class="text-center mb-4">Registration</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <input
            v-model="username"
            type="text"
            class="form-control"
            placeholder="Username"
            required
          />
        </div>
        <div class="mb-3">
          <input
            v-model="password"
            type="password"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div class="mb-3">
          <input
            v-model="confirmPassword"
            type="password"
            class="form-control"
            placeholder="Confirm Password"
            required
          />
        </div>
        <div class="text-center mt-3">
          <p>Already have an account?</p>
          <router-link to="/login" class="btn btn-secondary w-100 mb-2">
            Go to Login
          </router-link>
        </div>
        <button type="submit" class="btn btn-primary w-100">Register</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    submitForm() {
      if (this.username && this.password && this.password === this.confirmPassword) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push({ username: this.username, password: this.password });
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("session", JSON.stringify({ active: true, username: this.username }));
        this.$router.push('/home').then(() => {
          location.reload(); // Перезагрузка страницы
        });
      }
    }
  }
};
</script>

<style>
.register {
  max-width: 300px;
  margin: auto;
  text-align: center;
}
</style>