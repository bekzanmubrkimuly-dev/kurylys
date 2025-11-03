<template>
  <div class="dashboard">
    <h1>Панель управления</h1>

    <div class="stats">
      <div class="card" v-for="item in stats" :key="item.title">
        <div class="icon">{{ item.icon }}</div>
        <div class="info">
          <h2>{{ item.value }}</h2>
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>

    <div class="recent">
      <h2>Последние регистрации</h2>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Курс</th>
            <th>Дата регистрации</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in recentStudents" :key="student.id">
            <td>{{ student.name }}</td>
            <td>{{ student.course }}</td>
            <td>{{ formatDate(student.date) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStudentsStore } from '../stores/students'
import { storeToRefs } from 'pinia'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

// Имитация данных
const stats = ref([
  { title: 'Всего студентов', value: 42, icon: '🎓' },
  { title: 'Курсов активно', value: 5, icon: '📚' },
  { title: 'Платежей за месяц', value: '₸120 000', icon: '💰' },
  { title: 'Преподавателей', value: 3, icon: '👨‍🏫' }
])

const studentsStore = useStudentsStore()
const { students } = storeToRefs(studentsStore)

const recentStudents = ref([
  { id: 1, name: 'Айгерім Т.', course: 'Frontend', date: new Date() },
  { id: 2, name: 'Данияр К.', course: 'Python', date: new Date() },
  { id: 3, name: 'Әлия А.', course: 'UI/UX Design', date: new Date() }
])

const formatDate = (date: Date) => format(date, 'dd MMM yyyy', { locale: ru })
</script>

<style scoped>
.dashboard {
  padding: 24px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 40px;
}

.card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon {
  font-size: 28px;
}

.info h2 {
  margin: 0;
  font-size: 22px;
}

.info p {
  color: #777;
  margin: 0;
}

.recent {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
}

th, td {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

th {
  background: #f8f8f8;
  font-weight: 600;
}
</style>
