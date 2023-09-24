<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useTodoListStore } from '../stores/todoList'
const todosStore = useTodoListStore()
const removeTodo = (index) => {
  todosStore.removeTodo(index)
}
</script>

<style lang="scss" scoped></style>
