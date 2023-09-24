<template>
  <div>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="What needs to be done?" />
  </div>
</template>

<script setup>
import { ref } from 'vue'


const newTodo = ref('')
import { useTodoListStore } from '../stores/todoList'
const todosStore = useTodoListStore()
const addTodo = () => {
  if (newTodo.value.trim() !== '') {
    todosStore.addTodo(newTodo.value.trim())
    newTodo.value = ''
  }
}
</script>

<style lang="scss" scoped></style>
