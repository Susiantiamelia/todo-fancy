<template>
    <div id="categories" class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3" style="margin-left: 50px">
        <div style="border-bottom: 1px solid black">
            <h2  id="category-title" class="widget-title" style="font-family: 'Arima Madurai', cursive; font-size: 1rem;margin-bottom: 1em;font-weight: 500;">
                <span >Your Profile</span>
            </h2>
        </div>
        <div id="category-button" style="background-color: white; margin-bottom: 50px; margin-top: 30px">
            <table style="width:100%; font-family: 'Arima Madurai', cursive;" class="table">
                <tr>
                    <th>Name:</th>
                    <td>{{ fullname }}</td>
                </tr>
                <tr>
                    <th>Email:</th>
                    <td>{{ email }}</td>
                </tr>
                <tr>
                    <th>Username:</th>
                    <td>{{ username }}</td>
                </tr>
            </table>
            <br><br>
            <div style="text-align: center; border-bottom: #999999;">
                <p style="text-align: center; font-family: 'Arima Madurai', cursive;">{{quote}}</p>
            </div>
            
        </div>                            
    </div> 
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    methods: {
        ...mapActions([
            'allTodo'
        ])
    }, 
    computed: {
        ...mapState([
            'fullname','email','username', 'quote'
        ])
    }
}
</script>

<style>
#categories{
    background-color: white;
    margin-left: 50px;
    border-radius: 6px;
}

#category-title{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 15px
}
</style>