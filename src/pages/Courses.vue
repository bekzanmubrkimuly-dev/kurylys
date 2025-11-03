<template>
  <div class="courses">
    <h1>Курстар</h1>

    <div class="add-form">
      <input
        v-model="newCourse"
        type="text"
        placeholder="Жаңа курс атауы..."
      />
      <button @click="addCourse">➕ Қосу</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Атауы</th>
          <th>Әрекет</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(course, index) in courses" :key="course.id">
          <td>{{ index + 1 }}</td>
          <td>{{ course.name }}</td>
          <td>
            <button class="delete" @click="removeCourse(course.id)">🗑️ Өшіру</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Course {
  id: number
  name: string
}

const courses = ref<Course[]>([
  { id: 1, name: 'Frontend негіздері' },
  { id: 2, name: 'Python бағдарламалау' },
  { id: 3, name: 'UI/UX дизайн' }
])

const newCourse = ref('')

function addCourse() {
  if (!newCourse.value.trim()) return
  courses.value.push({
    id: Date.now(),
    name: newCourse.value
  })
  newCourse.value = ''
}

function removeCourse(id: number) {
  courses.value = courses.value.filter(c => c.id !== id)
}
</script>

<style scoped>
.courses {
  padding: 24px;
}

.add-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.add-form input {
  flex: 1;
  border: 1px solid #ccc;
  padding: 8px 10px;
  border-radius: 6px;
}

.add-form button {
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  cursor: pointer;
}

.add-form button:hover {
  background: #2563eb;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border-bottom: 1px solid #eee;
  padding: 10px;
  text-align: left;
}

.delete {
  background: #ef4444;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
}

.delete:hover {
  background: #dc2626;
}
</style>
