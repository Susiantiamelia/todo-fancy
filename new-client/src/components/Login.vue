<template>
<div id="login">
    <div class="container">
        <div class="card card-container">
            <h5 style="align-self: center">Login</h5><br>
            <input type="text" id="email" v-model="uname_email" placeholder="Email address"><br>
            <input type="password" id="password" v-model="password" placeholder="Password"><br>
            <button type="submit" class="btn btn-primary btn-block btn-signin" v-on:click="userLogin">Login</button><br>
            <button @click="loginFb" id="btn-fblogin" class="btn btn-primary">Login with Facebook</button>
            <br>
            <router-link to="/register"><small>Don't have an account? Click here</small></router-link>
            <small style="align-self: center ; color: red">{{ error }}</small>
        </div>
    </div>
    <div id="status"></div>
</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    methods: {
        ...mapActions([
            'userLogin', 'loginFb'
        ])
    },
    computed: {
        uname_email: {
            get () {
                return this.$store.state.uname_email
            },
            set (value) {
                this.$store.commit('setUname_email', value)
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
            get () {
                return this.$store.state.error
            }
        }
    },
    created () {
        
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
