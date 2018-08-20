<template>
    <div id="register">
        <div class="container">
            <div class="card card-container">
                <h5 style="align-self: center">Register</h5>
                <br>
                <small style="color: red">{{ error }}</small>
                <input type="text" id="fullname" v-model="fullname" placeholder="Full name"><br>
                <input type="text" id="username" v-model="username" placeholder="Username"><br>
                <input type="text" id="email" v-model="email" placeholder="Email address"><br>
                <input type="password" id="password" v-model="password" placeholder="Password"><br>
                <button class="btn btn-primary btn-block btn-signin" v-on:click="userRegister">Register</button>
            </div>
        </div>
        <div id="status"></div>
    </div>
</template>

<script>
import { mapActions} from 'vuex'
export default {
    methods: {
        ...mapActions([
            'userRegister'
        ])
    },
    computed: {
        fullname: {
            get() {
                return this.$store.state.fullname
            },
            set(value){
                this.$store.commit('setFullname', value)
            }
        },
        username: {
            get() {
                return this.$store.state.username
            },
            set(value){
                this.$store.commit('setUsername', value)
            }
        },
        email: {
            get() {
                return this.$store.state.email
            },
            set(value){
                this.$store.commit('setEmail', value)
            }
        },
        password: {
            get() {
                return this.$store.state.password
            },
            set(value){
                this.$store.commit('setPassword', value)
            }
        },
        error: {
            get() {
                return this.$store.state.error
            }
        }
    }
}
</script>

<style scoped>
/* @import '../../src/assets/css/login-register.css'; */
body, html {
    height: 100%;
    background-repeat: no-repeat;
    background-image: linear-gradient( #FFEDBC, #ED4264)
  }
  
  .card-container.card {
    max-width: 350px;
    padding: 40px 40px;
  }
  
  input {
    border-radius: 5px;
    border-style: solid;
    border-width: 0.5px;
    border-color: #d7d7d7;
    padding: 0.75em;  
    direction: ltr;
    height: 44px;
    font-size: 14px;
    box-sizing: border-box;
  }
  
  .card {
    background-color: #F7F7F7;
    /* just in case there no content*/
    padding: 20px 25px 30px;
    margin: 0 auto 25px;
    margin-top: 50px;
    /* shadows and rounded borders */
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  }
  
  .btn {
    font-weight: 500;
    height: 48px;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    cursor: default;
  }

  #fb {
    background-color: red
  }
</style>
