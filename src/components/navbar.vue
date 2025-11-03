<template>
  <nav class="navbar">
    <div class="left">
      <h1 class="logo">Mini-CRM</h1>
    </div>

    <div class="right">
      <input
        v-model="search"
        type="text"
        placeholder="🔍 Іздеу..."
        class="search"
      />

      <div class="user">
        <img src="https://i.pravatar.cc/40" alt="User avatar" />
        <span>Админ</span>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const search = ref('')
</script>

<style scoped>
.navbar {
  height: 60px;
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-weight: 700;
  font-size: 20px;
  color: #2b2d42;
}

.right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.search {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 14px;
  outline: none;

}

.search:focus {
  border-color: #3b82f6;
}

.user {
  display: flex;
  align-items: center;
  gap: 8px;
}

.user img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  .navbar {
  height: 60px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
}

}
</style>
