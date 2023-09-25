<template>
  <form @submit.prevent="addItem(todo)">
    <input type="text" v-model="todo" /><button>Add</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useTodoListStore } from '../stores/todoList'

export default {
  setup() {
    const todo = ref('')
    const store = useTodoListStore()

    function addItem(item) {
      if (item.length === 0) {
        return
      }
      store.addTodo(item)
      todo.value = ''
    }

    return { todo, addItem }
  }
}
</script>

<style lang="scss" scoped></style>
