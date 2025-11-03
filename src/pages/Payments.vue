<template>
  <div class="payments">
    <h1>Төлемдер</h1>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Студент</th>
          <th>Курс</th>
          <th>Сома</th>
          <th>Күні</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(payment, index) in payments" :key="payment.id">
          <td>{{ index + 1 }}</td>
          <td>{{ payment.student }}</td>
          <td>{{ payment.course }}</td>
          <td>{{ payment.amount }} ₸</td>
          <td>{{ formatDate(payment.date) }}</td>
          <td>
            <span :class="['status', payment.status]">
              {{ payment.status === 'paid' ? 'Төленді' : 'Күтуде' }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

interface Payment {
  id: number
  student: string
  course: string
  amount: number
  date: Date
  status: 'paid' | 'pending'
}

const payments = ref<Payment[]>([
  { id: 1, student: 'Айгерім Т.', course: 'Frontend', amount: 35000, date: new Date(), status: 'paid' },
  { id: 2, student: 'Данияр К.', course: 'Python', amount: 30000, date: new Date(), status: 'pending' },
  { id: 3, student: 'Әлия А.', course: 'UI/UX', amount: 40000, date: new Date(), status: 'paid' }
])

const formatDate = (d: Date) => format(d, 'dd MMM yyyy', { locale: ru })
</script>

<style scoped>
.payments {
  padding: 24px;
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

.status {
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: 500;
}

.status.paid {
  background: #dcfce7;
  color: #16a34a;
}

.status.pending {
  background: #fef9c3;
  color: #ca8a04;
}
</style>
