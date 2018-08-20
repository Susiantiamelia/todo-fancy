<template>
    <div id="dashboard">
        <dashboardNavbar></dashboardNavbar>
        <br><br>
        <div class="row">
            <profile></profile>
            <br>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6" style=" margin-left: 90px;">
                <table class="table table-responsive-sm table-responsive-md table-responsive-lg">
                    <thead class="thead-light">
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">Activity</th>
                        <th scope="col">Date</th>
                        <th scope="col">Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(td, index) in todo" class="table-light">
                        <th scope="row">{{ index+1 }}</th>
                        <td>{{ td.todo }}</td>
                        <td>{{ td.estimated_date}}</td>
                        <td>
                            <div class="p-2">
                            <a v-on:click="editTodo(td)" style="padding: 5px"><img src="https://image.flaticon.com/icons/svg/61/61456.svg" width="20px"></a>
                            <a v-on:click="delTodo(td._id)"><img src="https://www.flaticon.com/premium-icon/icons/svg/303/303638.svg" width="30px"></a>
                        </div>
                        </td>
                        </tr>
                    </tbody>
                    </table>
            </div>
                <br>
                
            </div>
        </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import dashboardNavbar from './navbar.vue'
import profile from './profile.vue'
export default {
    methods: {
        ...mapActions([
            'userLogin', 'allTodo','editTodo', 'delTodo','profile', 'getQuote'
        ])
    },
    mounted () {
        this.allTodo()
        this.profile()
        this.getQuote()
    },
    computed: {
        ...mapState([
            'todo'
        ])
    },
    components: {
        dashboardNavbar,
        profile
    },
    created(){
        if(!localStorage.getItem('token')){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
#logo{
    margin-left: 50px;
}
body, html {
    height: 100%;
}

#categories{
    background-color: white;
    margin-left: 50px;
}

#category-title{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 15px
}
</style>

