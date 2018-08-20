Vue.component('tasklist', {
  template: `
  <table class="striped">
    <thead>
      <tr>
          <th>Task</th>
          <th>Estimated Date</th>
          <th>Status</th>
          <th>Action</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(todo,key) in todos">
        <td>{{ todo.todo }}</td>
        <td>{{ todo.estimated_date}}</td>
        <td>{{ todo.status }}</td>
        <td>
            <button v-if="todo.status === 'Not Yet'" @click="editTodo(todo)" class="btn-floating btn-small cyan"><i class="fas fa-pen"></i></button>
            <button v-if="todo.status === 'Not Yet'" @click="doneTodo(key)" class="btn-floating btn-small indigo"><i class="fas fa-check"></i></button>
            <button class="btn-floating btn-small red" @click="delTodo(todo._id)"><i class="fas fa-trash"></i></button>
        </td>
      </tr>
    </tbody>
  </table>
  `,
  props: ['todos'],
  methods: {
    editTodo(todo){
      this.$emit('edittodo', todo)
    },
    doneTodo(key){
      this.$emit('donetodo', key)
    },
    delTodo(id){
      this.$emit('deltodo', id)
    }
  }
})