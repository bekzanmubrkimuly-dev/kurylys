<template>
  <div id="app">
    <Navbar />

    <div class="layout">
      <Sidebar />

      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  background: #f1f5f9; /* ашық сұр фон */
  font-family: 'Inter', sans-serif;
}

/* Негізгі layout */
.layout {
  display: flex;
  height: calc(100vh - 60px); /* Navbar биіктігін алып тастаймыз */
}

/* Беттің контент бөлігі */
.content {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  background: #f9fafb;
  min-width: 0;
}

/* Адаптивтілік үшін */
@media (max-width: 768px) {
  .layout {
    flex-direction: column;
  }
}
</style>
