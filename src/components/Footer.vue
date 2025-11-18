<template>
     <footer class="crm-footer">
    <div class="footer-container">
      <div class="footer-left">
        <h3>Mini-CRM</h3>
        <p>Клиенттерді басқару жүйесі · © 2025</p>
      </div>

      <div class="footer-center">
        <RouterLink to="/">Басты бет</RouterLink>
        <RouterLink to="/clients">Клиенттер</RouterLink>
        <RouterLink to="/projects">Жобалар</RouterLink>
        <RouterLink to="/settings">Баптаулар</RouterLink>
      </div>

      <div class="footer-right">
        <p>Байланыс:</p>
        <a href="mailto:support@mini-crm.kz">support@mini-crm.kz</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// ешқандай логика қажет емес — таза UI компонент
</script>

<style scoped>
.crm-footer {
  background: #0f172a;
  color: #cbd5e1;
  padding: 25px 0;
  margin-top: 40px;
}

.footer-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 0 20px;
  flex-wrap: wrap;
}

.footer-left h3 {
  margin: 0;
  color: #fff;
}

.footer-center a,
.footer-right a {
  display: block;
  color: #94a3b8;
  margin: 4px 0;
  text-decoration: none;
  font-size: 14px;
}

.footer-center a:hover,
.footer-right a:hover {
  color: #38bdf8;
}

.footer-right p {
  margin-bottom: 5px;
}
</style>