import { defineStore } from 'pinia'
export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [],
    id: 0
  }),
  getters: {
    getAllTodo(state) {
      return state.todoList
    }
  },
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, completed: false, isDisable: true })
    },
    deleteTodo(itemId) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemId
      })
    },
    editTodo(todo) {
      todo.isDisable = false
    },
    update(todo) {
      todo.isDisable = true
    }
  }
})
