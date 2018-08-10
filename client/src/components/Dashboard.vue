<template>
    <div class="dashboard">
        <navbar></navbar>
        <AddTodo></AddTodo>
        <v-container>
            <v-layout justify-center>
                <v-flex xs4>
                    <v-card flat>
                        <p id="quote">{{ quote }}</p>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container >
            <v-layout >
                <v-flex >
                    <v-expansion-panel popout >
                        <v-expansion-panel-content>
                            <div slot="header">To Do List</div>
                            <v-container v-for="(todo,i) in todos" :key="i">
                                <v-layout>
                                    <v-flex>
                                        <v-expansion-panel popout>
                                            <v-expansion-panel-content>
                                                <div slot="header">{{ todo.todo }}</div>
                                                <v-card>
                                                <v-card-text>Status: {{ todo.status }}<br><br>
                                                            Estimated Date: {{ todo.estimated_date }}
                                                </v-card-text>
                                                <v-btn v-if="todo.status === 'Not Yet' " class="task" fab small dark color="cyan" @click="editTodo(todo)">
                                                    <v-icon dark>edit</v-icon>
                                                </v-btn>
                                                <v-btn v-if="todo.status === 'Not Yet' " class="task" fab small dark color="indigo" @click="doneTodo(i)">
                                                    <v-icon dark>check</v-icon>
                                                </v-btn>
                                                
                                                <v-btn v-else id="done" class="task" fab dark color="blue">
                                                    <v-icon dark>check</v-icon>
                                                </v-btn>
                                                <v-btn class="task" fab small dark color="red" @click="delTodo(todo._id)">
                                                    <v-icon dark>delete</v-icon>
                                                </v-btn>
                                                </v-card>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-expansion-panel-content>   
                    </v-expansion-panel>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import AddTodo from '@/components/AddTodo.vue'
import { mapState, mapActions } from 'vuex'
export default {
    components: {
        navbar,
        AddTodo
    },
    methods: {
        ...mapActions([
            'allTodo', 'editTodo', 'delTodo', 'doneTodo', 'getQuote'
        ])
    },
    created(){
        let token = localStorage.getItem('token')

        if(!token){
            this.$router.push('/')
        }else {
            this.allTodo()
            this.getQuote()
        }
        
    },
    computed: {
        ...mapState([
            'todos', 'quote'
        ])
    }
}
</script>

<style>
.v-expansion-panel__header{
    background-color: #32A9D9 !important;
    color: white;
    font-size: 20px
}

.v-expansion-panel__body {
    background-color: #D8EBF2 !important
}

.v-btn__content {
  height: auto !important;
  width: auto !important;
}

.task{
    color: white !important
}

#done{
    text-align: center
}

#quote{
    font-family: 'Caveat', cursive;
    font-size: 22px;
}
</style>
