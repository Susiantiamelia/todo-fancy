import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
import swal from 'sweetalert2'
import { firebase, providerFB } from './helpers/firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uname_email: '',
    password: '',
    error: '',
    fullname: '',
    email: '',
    username: '',
    todo: [],
    quote: '',
  },
  mutations: {
    setUname_email (state, payload) {
      state.uname_email = payload
    },
    setPassword (state, payload) {
      state.password = payload
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
    setTodo (state, payload) {
      state.todo = payload
    },
    setQuote (state, payload) {
      state.quote = payload
    },
    addingTodo (state,payload){
      state.todo.push(payload)
    }
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
    getQuote(context) {
      axios.get('https://talaikis.com/api/quotes/random/', {})
      .then(response => {
        let quote = response.data.quote
        context.commit('setQuote', quote)
      })
      .catch(err => {
        console.log(err.response)
      })
    },
    userLogin (context) {
      axios.post('http://35.240.171.58/users/login', {
        uname_email: this.state.uname_email,
        password: this.state.password
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
        password: this.state.password
      }, {})
        .then(response => {
          console.log(response)
          router.push('/login')
        })
        .catch(err => {
          context.commit('setError', err.response.data)
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
          axios.delete(`http://35.240.171.58/users/todos/delete/${id}`, {
            headers: {
              token: localStorage.getItem('token')
            }
          })
          .then(success => {
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
    editTodo (context, data){
      console.log(data)
      swal({
        title: 'Edit Your Activity',
        html:
          `<input id="todo" class="swal2-input" type="text" value="${data.todo}"> `+
          `<input id="date" class="swal2-input" type="date" value="${data.estimated_date}">`,
        focusConfirm: false,
        preConfirm: () => {
          let input = {
            todo: document.getElementById('todo').value,
            date: document.getElementById('date').value}

            axios.put(`http://35.240.171.58/users/todos/update/${data._id}`, {
              todo: input.todo,
              estimated_date: input.date
            })
            .then(result => {
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
    addTodo (context) {
      swal({
        title: 'Multiple inputs',
        html:
          '<input id="todo" class="swal2-input" type="text" placeholder="write your plan">' +
          '<input id="date" class="swal2-input" type="date">',
        focusConfirm: false,
        preConfirm: () => {
            let input = {
                        todo: document.getElementById('todo').value,
                        date: document.getElementById('date').value}

            axios.post('http://35.240.171.58/users/todos/add', {
              todo: input.todo,
              date: input.date
            },{
                headers: {
                    token: localStorage.getItem('token')
                }
            })
              .then( result => {
                context.commit('addingTodo', result.todo)
                  swal({
                      title: result.msg,
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
    logout: function(){
      localStorage.removeItem('token')
      router.push('/')
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
          
          console.log(todos)
        })
    },
    editProfile () {
      axios.get("http://35.240.171.58/users/profile", {
                  headers: {
                      token: localStorage.getItem('token')
                  }
      })
        .then( profile => {
          let user = profile.data.user[0]
          console.log(profile)
          swal({
            title: `Your Profile`,
            html:
            `<input id="fullname" type="text" class="swal2-input" value="${ user.full_name }">` +
            `<input id="email" type="text" class="swal2-input" value="${ user.email }">` +
            `<input id="username" type="text" class="swal2-input" value="${ user.username }">`,
            focusConfirm: false,
            preConfirm: () => {
              let input = {
                  full_name: document.getElementById('fullname').value,
                  email: document.getElementById('email').value,
                  username: document.getElementById('username').value
              }
              axios.put(`http://35.240.171.58/users/edit-profile/${user._id}`,{
                  name: input.full_name,
                  email: input.email,
                  username: input.username
              })
                .then(result => {
                  swal({
                    title: "Success updated profile",
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
        })
        .catch(err => {
          swal({
            title: `${err.message}`,
            type: "error",
          });
        })
    }
  }
})
