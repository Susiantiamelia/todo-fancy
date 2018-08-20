<template>
  <div class="addTodo">
    <v-fab-transition>
      <v-btn
        color="blue"
        dark
        fab
        fixed
        bottom
        right
        @click.stop="dialog = true"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-dialog v-model="dialog" max-width="400px">
      <v-card color="white">
        <br><br><br>
        <h3>Add Task</h3>
        <br>
        <v-container>
          <v-layout >
            <v-flex >
              <v-text-field
                label="Task"
                v-model="todo_task"
               ></v-text-field>
              </v-flex>
          </v-layout>
        </v-container>
        <v-container>
          <v-layout >
            <v-flex >
              <v-text-field
                label="Estimated Date"
                type="date"
                v-model="todo_date"
               ></v-text-field>
              </v-flex>
          </v-layout>
        </v-container>
        <br><br>
        <v-card-actions>
          <v-btn id="add-btn" color="black" class="white--text" @click="addTodo" >Submit</v-btn>
        </v-card-actions>
        <br><br>
      </v-card>
    </v-dialog>
  </div>
    
</template>

<script>
import { mapActions } from 'vuex'
import { throws } from 'assert';
export default {
    data () {
    return {
      dialog: false
    }
    
  },
  computed: {
      todo_task: {
        get() {
          return this.$store.state.todo_task
        },
        set(value) {
          return this.$store.commit ('settodo_task', value)
        }
      },
      todo_date: {
        get() {
          return this.$store.state.todo_date
        },
        set(value) {
          return this.$store.commit ('settodo_date', value)
        }
      }
    },

    methods: {
      ...mapActions([
        'addTodo'
      ])
    }
}
</script>

<style scoped>
.v-btn--floating .v-icon {
  height: auto;
  width: auto
}

#add-btn{
  width: 100%;
}
</style>
