<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">⚙️ Баптаулар</h2>

    <h3 class="mb-2 font-semibold">Статустар</h3>
    <div class="flex gap-2 mb-4">
      <input v-model="newStatus" placeholder="Жаңа статус..." class="border p-2 rounded" />
      <button @click="addStatus" class="bg-green-500 text-white px-4 py-2 rounded">Қосу</button>
    </div>

    <ul>
      <li v-for="(s, i) in statuses" :key="i" class="flex items-center justify-between border-b py-2">
        {{ s }}
        <button @click="removeStatus(i)" class="text-red-500">🗑</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const statuses = ref([])
const newStatus = ref('')

// localStorage-тан оқу
onMounted(() => {
  const saved = localStorage.getItem('statuses')
  if (saved) statuses.value = JSON.parse(saved)
  else statuses.value = ['Жаңа', 'Байланыс орнатылды', 'Төледі', 'Оқып жүр']
})

// Қосу
const addStatus = () => {
  if (!newStatus.value) return
  statuses.value.push(newStatus.value)
  newStatus.value = ''
  localStorage.setItem('statuses', JSON.stringify(statuses.value))
}

// Өшіру
const removeStatus = (i) => {
  statuses.value.splice(i, 1)
  localStorage.setItem('statuses', JSON.stringify(statuses.value))
}
</script>
