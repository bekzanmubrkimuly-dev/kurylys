<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">🎓 Студенттер</h2>

    <!-- Қосу формасы -->
    <div class="mb-4 flex gap-2">
      <input v-model="newStudent.name" placeholder="Аты" class="border p-2 rounded w-1/4" />
      <input v-model="newStudent.phone" placeholder="Телефон" class="border p-2 rounded w-1/4" />
      <select v-model="newStudent.status" class="border p-2 rounded w-1/4">
        <option v-for="s in statuses" :key="s" :value="s">{{ s }}</option>
      </select>
      <input v-model="newStudent.note" placeholder="Ескерту" class="border p-2 rounded w-1/4" />
      <button @click="addStudent" class="bg-blue-500 text-white px-4 py-2 rounded">Қосу</button>
    </div>

    <!-- Кесте -->
    <table class="table-auto w-full border">
      <thead>
        <tr class="bg-gray-200 text-left">
          <th class="p-2">Аты</th>
          <th class="p-2">Телефон</th>
          <th class="p-2">Статус</th>
          <th class="p-2">Ескерту</th>
          <th class="p-2">Іс</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(s, i) in students" :key="i" class="border-t">
          <td class="p-2">{{ s.name }}</td>
          <td class="p-2">{{ s.phone }}</td>
          <td class="p-2">{{ s.status }}</td>
          <td class="p-2">{{ s.note }}</td>
          <td class="p-2">
            <button @click="deleteStudent(i)" class="text-red-500">🗑</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const students = ref([])
const statuses = ref(['Жаңа', 'Байланыс орнатылды', 'Төледі', 'Оқып жүр'])

const newStudent = ref({ name: '', phone: '', status: 'Жаңа', note: '' })

// localStorage-тан оқу
onMounted(() => {
  const data = localStorage.getItem('students')
  if (data) students.value = JSON.parse(data)
})

// Қосу
const addStudent = () => {
  if (!newStudent.value.name) return alert('Аты енгізілмеген!')
  students.value.push({ ...newStudent.value })
  newStudent.value = { name: '', phone: '', status: 'Жаңа', note: '' }
  localStorage.setItem('students', JSON.stringify(students.value))
}

// Өшіру
const deleteStudent = (index) => {
  students.value.splice(index, 1)
  localStorage.setItem('students', JSON.stringify(students.value))
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  padding: 20px;
}
th {
    padding: 35px;
   
}
</style>
