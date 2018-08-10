<template>
    <div class="navbar">
        <v-toolbar>
        <v-toolbar-title style="margin-left:50px"><v-icon>done_all</v-icon>TODO FANCY</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
        <v-fab-transition>
        <v-btn class="grey--text" flat @click.stop="dialog = true"><i class="fas fa-user-circle fa-2x"></i></v-btn>
        </v-fab-transition>
        <v-btn class="grey--text" flat @click="logout"><i class="fas fa-sign-out-alt"></i>Logout</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    
    <v-dialog v-model="dialog" max-width="400px">
        <v-card color="white">
            <br><br><br>
            <h3>Profile</h3>
            <br>
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
                        label="Email"
                        v-model="email"
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
        </v-card>
    </v-dialog>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data () {
    return {
      dialog: false
    }
    
  },
    methods: {
        ...mapActions([
            'logout', 'profile'
        ])
    },
    created(){
        this.profile()
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
        }
    }
}
</script>

<style scoped>

</style>
