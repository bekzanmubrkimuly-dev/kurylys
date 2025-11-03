import { defineStore } from 'pinia'

export const useStudentsStore = defineStore('students', {
  state: () => ({
    students: [] as { id: number; name: string; course: string; paid: boolean }[]
  }),
  actions: {
    addStudent(student: { id: number; name: string; course: string; paid: boolean }) {
      this.students.push(student)
    },
    removeStudent(id: number) {
      this.students = this.students.filter(s => s.id !== id)
    }
  }
})
