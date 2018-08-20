<template>
    <div class="login">
        <br><br><br>
        <h1>TODO FANCY</h1>
        <v-container>
            <v-layout justify-center>
                <v-flex xs4>
                    <v-card color="white">
                        <br><br><br>
                        <h3>Sign In</h3>
                        <br>
                        <v-container>
                            <v-layout >
                                <v-flex >
                                    <v-text-field
                                        label="Username / Email"
                                        v-model="uname_email"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <v-container>
                            <v-flex>
                                <v-text-field
                                    v-model="Password"
                                    :append-icon="show1 ? 'visibility_off' : 'visibility'"
                                    :type="show1 ? 'text' : 'password'"
                                    name="input-10-1"
                                    label="Password"
                                    @click:append="show1 = !show1"
                                ></v-text-field>
                            </v-flex>
                        </v-container>
                        <br><br>
                        <v-card-actions>
                            <v-btn id="login-btn" color="grey" class="white--text" @click="userLogin">Login</v-btn>
                        </v-card-actions>
                        <br>
                        <v-card-actions>
                            <v-btn id="login-btn" color="grey" class="white--text" @click="loginFb">Login with facebook</v-btn>
                        </v-card-actions>
                        <br>
                        <router-link to="/register"><small>Don't have an account? Click here</small></router-link>
                        <br>
                        <small style="align-self: center ; color: red">{{ error }}</small>
                        <br><br><br><br>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            show1: false,
        }
    },
    computed: {
        uname_email: {
            get(){
                return this.$store.state.uname_email
            },
            set(value){
                this.$store.commit('setuname_email', value)
            }
        },
        Password: {
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
    },
    methods: {
        ...mapActions([
            'userLogin', 'loginFb'
        ])
    }
}
</script>

<style scoped>
#login-btn{
    width: 100%;
}

small{
    color: blue
}

h1{
    font-family: 'Merienda', cursive !important;
    color: white !important;
}

h3{
    font-family: 'Merienda', cursive !important;
    font-size: 20px
}

.v-label {
    font-family: 'Merienda', cursive !important;
}


</style>

