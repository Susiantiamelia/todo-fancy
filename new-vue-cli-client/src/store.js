import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router.js'
import swal from 'sweetalert2'
import { firebase, providerFB } from './helpers/firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uname_email: '',
    Password: '',
    error: '',
    fullname: '',
    email: '',
    username: '',
    todo_task: '',
    todo_date: '',
    todos: [],
    quote: '',
  },
  mutations: {
    setuname_email(state, payload){
      state.uname_email = payload
    },
    setPassword(state,payload){
      state.Password = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setFullname (state, payload) {
      state.fullname = payload
    },
    setEmail (state, payload) {
      state.email = payload
    },
    setUsername (state, payload) {
      state.username = payload
    },
    settodo_task(state,payload){
      state.todo_task = payload
    },
    settodo_date(state,payload){
      state.todo_date = payload
    },
    addingTodo(state,payload){
      state.todos.push(payload)
    },
    setQuote (state, payload) {
      state.quote = payload
    },
  },
  actions: {
    loginFb() {
      firebase
        .auth()
        .signInWithPopup(providerFB)
        .then(result => {
          // var token = result.credential.accessToken
          console.log(result.user.displayName)
          // localStorage.setItem('token', token)
          swal({
            text: 'Login Success',
            icon: 'success'
          })
          let account = {
            name: result.user.displayName,
            email: result.user.email,
            password: result.user.displayName
          }
          axios
            .post('http://35.240.171.58/users/loginfb', account)
            .then(response => {
              console.log(response)
              localStorage.setItem('token', response.data.token)
              router.push('/dashboard')
            })
            .catch(err => {})

        })
        .catch(function(error) {
          var errorCode = error.code
          var errorMessage = error.message
          var email = error.email
          var credential = error.credential
        })
    },
    userLogin (context) {
      axios.post('http://35.240.171.58/users/login', {
        uname_email: this.state.uname_email,
        password: this.state.Password
      }, {})
        .then(response => {
          let token = response.data.token
          localStorage.setItem('token', token)
          router.push('/dashboard')
        })
        .catch(err => {
          console.log('ini nih', err)
          context.commit('setError', 'Please put correct username / password')
        })
    },

    userRegister (context) {
      axios.post('http://35.240.171.58/users/register', {
        fullname: this.state.fullname,
        email: this.state.email,
        username: this.state.username,
        password: this.state.Password
      }, {})
        .then(response => {
          console.log(response)
          router.push('/')
        })
        .catch(err => {
          context.commit('setError', err.response.data)
        })
    },

    addTodo({ commit }) {
      let input = {
          todo: this.state.todo_task,
          date: this.state.todo_date
      }

      axios.post('http://35.240.171.58/users/todos/add', input,{
                headers: {
                    token: localStorage.getItem('token')
                }
            })
              .then( result => {
                console.log(result.data.todo)
                commit('addingTodo', result.data.todo)
                commit('settodo_task', ' ')
                commit('settodo_date', '')
                  swal({
                      title: result.data.msg,
                      type: "success",
                  });
              })
              .catch(err => {
                  swal({
                      title: `${err.message}`,
                      type: "error",
                  });
              })
    },

    allTodo (context) {
      console.log('disini')
      axios.get('http://35.240.171.58/users/todos/all', {
        headers: {
            token: localStorage.getItem('token')
        }
      })
        .then(todos => {
          for(let i = 0; i < todos.data.length; i++){
            context.commit('addingTodo', todos.data[i])
          }
          
          console.log(this.state.todos)
        })
    },

    editTodo (context, data){
      console.log(data.estimated_date)
      swal({
        title: 'Edit Your Activity',
        html:
          `<input id="todo" class="swal2-input" type="text" value="${data.todo}"> `+
          `<input id="date" class="swal2-input" type="date" value="${data.estimated_date}">`,
        focusConfirm: false,
        preConfirm: () => {
          let input = {
            todo: document.getElementById('todo').value,
            date: document.getElementById('date').value
          }

            axios.put(`http://35.240.171.58/users/todos/update/${data._id}`, {
              todo: input.todo,
              estimated_date: input.date
            })
            .then(result => {
              for(let i = 0; i < this.state.todos.length; i++){
                if(this.state.todos[i]._id === data._id){
                  this.state.todos[i].todo = input.todo
                  this.state.todos[i].estimated_date = input.date
                }
              }
              swal({
                title: "Success updated todo",
                type: "success",
              });
            })
            .catch(err => {
              swal({
                  title: `${err.message}`,
                  type: "error",
              });
          })
        }
      })
    },

    delTodo (context,id) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
      .then( (result) => {
        
        if(result.value) {
          console.log('masuk nih', id)
          axios.delete(`http://35.240.171.58/users/todos/delete/${id}`, {
            headers: {
              token: localStorage.getItem('token')
            }
          })
          .then(success => {
            
            for(let i = 0; i < this.state.todos.length; i++){
              if(this.state.todos[i]._id === id){
                this.state.todos.splice(i, 1)
              }
            }
            swal(
              'Deleted!',
              'Your file has been deleted.',
              'success'
              )
          })
          .catch(err => {
            swal({
              title: `${err.message}`,
              type: "error",
          });
          })
        }
      })
    },

    doneTodo({commit}, i){
      let todo = this.state.todos[i]

      axios.put(`http://35.240.171.58/users/todos/change-status/${todo._id}`)
      .then(result => {
        console.log(result);
        
        this.state.todos[i].status = 'Done'
        swal({
          title: "Task Done",
          type: "success",
        });
      })
      .catch(err => {
        swal({
          title: `${err.message}`,
          type: "error",
      });
      })
    },

    logout: function(){
      localStorage.removeItem('token')
      router.push('/')
    },

    profile (context) {
      axios.get("http://35.240.171.58/users/profile", {
        headers: {
            token: localStorage.getItem('token')
                }
      })
      .then(profile => {
        let user = profile.data.user[0]
        context.commit('setFullname', user.full_name)
        context.commit('setUsername', user.username)
        context.commit('setEmail', user.email)
      })
    },

    getQuote(context) {
      console.log('disini niiiih')
      axios.get('https://talaikis.com/api/quotes/random/', {})
      .then(response => {
        let quote = response.data.quote
        context.commit('setQuote', quote)
      })
      .catch(err => {
        console.log(err.response)
      })
    },
  }
})
