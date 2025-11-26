<template>
  <div class="login-container">
    <h2>Кіру</h2>

    <p v-if="error" class="error">{{ error }}</p>

    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Логин" />
      <input type="password" v-model="password" placeholder="Пароль" />
      <button type="submit">Кіру</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      error: ""
    };
  },

  methods: {
    async login() {
      // JSON Server-ден қолданушыны алу
      const res = await fetch(`http://localhost:3000/users?username=${this.username}`);
      const users = await res.json();

      if (!users.length) {
        this.error = "Пайдаланушы табылмады";
        return;
      }

      const user = users[0];

      if (user.password !== this.password) {
        this.error = "Қате пароль!";
        return;
      }

      // ✔️ Логин сәтті — localStorage-ке сақтау
      localStorage.setItem("user", JSON.stringify(user));

      this.$router.push("/");
    }
  }
}
</script>

<style>
.error { color: red; }
</style>
