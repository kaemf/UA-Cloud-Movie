<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="submitForm">
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      if (this.username && this.password) {
        this.$router.push('/home');
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