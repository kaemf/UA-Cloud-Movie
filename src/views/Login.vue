<template>
    <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="card p-4 shadow-lg" style="width: 400px">
            <h2 class="text-center mb-4">Login</h2>
            <form @submit.prevent="submitFormLogin">
                <div class="mb-3">
                    <input v-model="username" type="text" class="form-control" placeholder="Username" required />
                </div>
                <div class="mb-3">
                    <input v-model="password" type="password" class="form-control" placeholder="Password" required />
                </div>
                <div class="text-center mt-3">
                    <p>Нет аккаунта?</p>
                    <router-link to="/register" class="btn btn-outline-secondary w-100">
                        Зарегистрироваться
                    </router-link>
                </div>
                <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: "",
            users: JSON.parse(localStorage.getItem("users") || "[]"),
        };
    },
    methods: {
        submitFormLogin() {
            const user = this.users.find((u) => u.username === this.username && u.password === this.password);
            if (user) {
                localStorage.setItem("session", JSON.stringify({ active: true, username: this.username }));
                this.$router.push("/home");
            }
            else alert('Invalid username or password');
        },
    },
};
</script>