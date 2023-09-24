import { defineStore } from 'pinia'
export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todos: []
  }),
  actions: {
    addTodo(todo){
      this.todos.push(todo)
    },
  },

})
