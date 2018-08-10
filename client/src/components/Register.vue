<template>
    <div class="register">
        <br><br><br>
        <h1>TODO FANCY</h1>
        <v-container>
            <v-layout justify-center>
                <v-flex xs4>
                    <v-card color="white">
                        <br><br><br>
                        <h3>Sign Up</h3>
                        <br>
                        <small style="color: red">{{ error }}</small>
                        <v-container>
                            <v-layout >
                                <v-flex >
                                    <v-text-field
                                        label="Name"
                                        v-model="fullname"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <v-container>
                            <v-layout >
                                <v-flex >
                                    <v-text-field
                                        label="Username"
                                        v-model="username"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <v-container>
                            <v-layout >
                                <v-flex >
                                    <v-text-field
                                        label="Email"
                                        v-model="email"
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
                        <v-card-actions>
                            <v-btn id="login-btn" color="grey" class="white--text" @click="userRegister">Signup</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>


<script>
import { mapActions} from 'vuex'
export default {
    data(){
        return {
            show1: false,
        }
    },
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
    }
}
</script>

<style scoped>
h1{
    font-family: 'Merienda', cursive !important;
    color: white !important;
}

h3{
    font-family: 'Merienda', cursive !important;
    font-size: 20px
}

#login-btn{
    width: 100%;
}
</style>
