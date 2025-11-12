<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">🎓 Студенттер</h2>

    <!-- Форма -->
    <div class="mb-4 flex gap-2">
      <input v-model="form.name" placeholder="Аты" class="border p-2 rounded w-1/5" />
      <input v-model="form.phone" placeholder="Телефон" class="border p-2 rounded w-1/5" />
      <select v-model="form.status" class="border p-2 rounded w-1/5">
        <option v-for="s in statuses" :key="s">{{ s }}</option>
      </select>
      <input v-model="form.note" placeholder="Ескерту" class="border p-2 rounded w-1/5" />
      <button @click="saveStudent" class="bg-blue-500 text-white px-4 py-2 rounded">
        {{ editingId ? 'Сақтау' : 'Қосу' }}
      </button> 
  
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
        <tr v-for="s in students" :key="s.id" class="border-t">
          <td class="p-2">{{ s.name }}</td>
          <td class="p-2">{{ s.phone }}</td>
          <td class="p-2">{{ s.status }}</td>
          <td class="p-2">{{ s.note }}</td>
          <td class="p-2 flex gap-2">
            <button @click="editStudent(s)" class="text-blue-500"><img src="../assets/icons/edit.svg" width="15px" height="15px"></button>
            <button @click="deleteStudent(s.id)" class="text-red-500"><img src="../assets/icons/delete.svg" width="15px" height="15px"></img></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const API = 'http://localhost:3001/students'

const students = ref([])
const form = ref({ name: '', phone: '', status: 'Жаңа', note: '' })
const editingId = ref(null)
const statuses = ['Жаңа', 'Байланыс орнатылды', 'Төледі', 'Оқып жүр']

// 📥 Оқу
const loadStudents = async () => {
  const res = await axios.get(API)
  students.value = res.data
}

// ➕ Қосу / ✏️ Өзгерту
const saveStudent = async () => {
  if (editingId.value) {
    await axios.put(`${API}/${editingId.value}`, form.value)
    editingId.value = null
  } else {
    await axios.post(API, form.value)
  }
  form.value = { name: '', phone: '', status: 'Жаңа', note: '' }
  loadStudents()
}

// ✏️ Редакт
const editStudent = (student) => {
  form.value = { ...student }
  editingId.value = student.id
}

// ❌ Өшіру
const deleteStudent = async (id) => {
  await axios.delete(`${API}/${id}`)
  loadStudents()
}

onMounted(loadStudents)
</script>

<style>
button {
   background:#8fc9bf;
   border: none;
   border-radius: 15%;
   margin-left: 10px;
   padding: 5px;
  
}
input {
  margin-left: 10px;
}
select { 
  margin-left: 10px;
}
</style>