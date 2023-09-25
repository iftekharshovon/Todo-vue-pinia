<template>
  <div class="w-full">
    <table class="w-full mr-0">
      <tr>
        <th>Name</th>
        <th>Action</th>
      </tr>
      <tr v-for="(todo, index) in store.getAllTodo" :key="index">
        <td><input type="text" v-model="todo.item" :disabled="todo.isDisable"/></td>
        <td class="flex">
          <button
            v-if="todo.isDisable"
            @click="store.editTodo(todo)"
            class="px-3 py-2 bg-yellow-500 text-white"
          >
            edit
          </button>
          <button
            v-else
            @click="store.update(todo)"
            class="px-3 py-2 bg-green-500 text-white"
          >
            save
          </button>
          <button @click="store.deleteTodo(todo.id)" class="px-3 py-2 bg-red-500">delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { useTodoListStore } from '../stores/todoList'
export default {
  setup() {
    const store = useTodoListStore()
    return {
      store
    }
  }
}
</script>

<style lang="scss" scoped></style>
