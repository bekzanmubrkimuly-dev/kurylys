<template>
  <aside class="sidebar">
    <ul>
      <li>
        <RouterLink to="/" exact-active-class="active">
          🏠 Панель
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/students" active-class="active">
          🎓 Студенттер
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/courses" active-class="active">
          📚 Курстар
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/payments" active-class="active">
          💰 Төлемдер
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/settings" active-class="active">
          ⚙️ Баптаулар
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.sidebar {
  width: 220px;
  background: #f8fafc;
  border-right: 1px solid #e5e7eb;
  height: calc(100vh - 60px);
  padding: 16px 0;
  position: sticky;
  top: 60px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 4px 0;
}

a {
  display: block;
  padding: 10px 20px;
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
}

a:hover {
  background: #e2e8f0;
  border-radius: 6px;
}

a.active {
  background: #3b82f6;
  color: white;
  border-radius: 6px;
}           
.sidebar {
  width: 240px; /* Кеңейтілген өлшем */
  background: #f8fafc;
  border-right: 1px solid #e5e7eb;
  height: calc(100vh - 60px);
  padding: 16px 0;
  position: sticky;
  top: 60px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
  }

  .sidebar a {
    display: inline-block;
    padding: 10px 12px;
  }
}
.sidebar {
  width: 240px; /* Кеңейтілген өлшем */
  background: #ff0000ff;
  border-right: 1px solid #0055ffff;
  height: calc(100vh - 60px);
  padding: 16px 0;
  position: sticky;
  top: 60px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
  }

  .sidebar a {
    display: inline-block;
    padding: 10px 12px;
  }
}
.sidebar {
  width: 240px; /* Кеңейтілген өлшем */
  background: #f8fafc;
  border-right: 1px solid #e5e7eb;
  height: calc(100vh - 60px);
  padding: 16px 0;
  position: sticky;
  top: 60px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
  }

  .sidebar a {
    display: inline-block;
    padding: 10px 12px;
  }
}

</style>
