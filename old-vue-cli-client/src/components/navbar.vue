<template>
    <div class="container-fluid" style="border-bottom: 1px solid #ff4455; background-color: white; position: sticky">
        <div class="d-flex flex-row justify-content-between">
             <div id="logo" >
                <router-link to="/dashboard">
                    <img src="data:image/png;base64,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" width="60%">
                </router-link>
            </div>
            <div>
                <a style="padding: 10px" v-on:click="addTodo" data-toggle="tooltip" data-placement="bottom" title="Add your todo list here">
                    <img style="margin-top: 20px" src="https://cdn2.iconfinder.com/data/icons/ios-7-tab-bar-icons/500/plus-512.png" width="30px">
                </a>
                <a v-on:click="editProfile" dbuttonta-toggle="tooltip" data-placement="bottom" title="See and edit your profile">
                    <img style="margin-top: 20px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAaVBMVEX///8lJSUAAAAiIiIbGxsfHx8QEBAXFxcTExP29vYJCQk7OzuxsbH6+vqmpqbv7+8qKiq4uLhaWlrb29tubm7n5+cwMDBJSUmTk5POzs6KiopnZ2fHx8dfX1+Dg4Oampp3d3dCQkJQUFDj4a8+AAAD4UlEQVRoge2byXqrMAyFgyfAQBgc5qnN+z/kxU1Jk5Y0yBblLvJv+nXTU8m2LB8lh8OLFy92Ju/C40TY5X+nGdVjSSakEFL/LMc6+gPZuimI4M4NXJCiqTeW7VrmUecH1GNtt6Gsal32U/UC81q1kaxfud4jWY3nVv4WuiojC0m+SzjJNgi6S9zfZTVugr7S6bNw56BTXN2QrJHVkBBTN5VrdR1HIsZcO6vy/JltB62YxO8PT+8S7B2rfp8ERNdxxAlHF7LAF3CWOQ74c6l7eBAjCFfARGtEZa8bQ3b0DHXsQx4NAp5CHq2FC/AKa3hhq1uvrpX3ENsqMqy4k5ZwB0thk62loY6dbm6Y6SnXdnVz/XX4Q9juejSpHhcsa8gJdC/dwqxuiuhsdIo1/GzzvIgCw009bevARtgvzIULmybbT8yFEyvhvSLebY1329W7neP9KtdutXq32+nATe9jbqe7XweyW8+1W5d5GMEvJ42076tjk5B5gfB4Gn/1mJbx7APe8bVoUL2wDJgTMNkekiMwJRvmgeAkWlMziOvDEC3kFLDMuN7eSkdxA08x9VYdKu4h6x4OXbFih7FiA59eleKZXy3KbUz6iv0aNGMIJtMyqiUPV5qTzWYSmrony1MY0m89AFJNQgSjV3VKmSBJs1200TB89o1RPbaB4+oxmxSuE7TXSVs+DOgzN5UJEYxzyxrFqgvD4zEMOxXPWvkYCIE9h0n1DIaLoHr4d1UV6Mmfm2BWEL+Rl93MBWvDhbsnDlv2OXDkskEbe6nz1x1BGSFZleax/5HhyI/ztMoIubm/yBkp3en3gSL3COHvWXs6tdk7J+R7GWcuSrqHxYuJcs4m+OIThxLbd8SUy8zMr84sz1VcGj6QRWnV/+Rng6b6gne2eKfGvbHuFHNvHHN0Mno3zciT6TqPxnbABWL4kFHGxsuMZ1ZJMmOraYZlJrqpxca6hmxSwuwDNgvZfoU1Ar7KDUKmp1w3YGFzw/gWCjZhzC29e8AGn7mJ+U0Yag40ho7ed8AOX2nskN/DS6AwymHSCJiuj7TE0yLDek6FJwwrIR2eMOypDnFbngjD7onQqve4RcIO8hFP+PgS/j+Fd9vVPl7EwNeybU89A++tzzg91xmqezi0aw3bx1DSwnWnnU0tgxYUtqOvqDf3mW/6S7TCfTP3QtRACWQscFVlhA52Fkwe9onnQoa5lLte0ocIHwrNw7dy+mNrIqds+ifLNwzVC7EKmz6RUjyUnySFlEnfhApt+DPj592x6gtyQUr9dQUpP38t+urY5Zt8lP2LWNXpx9czPr6ikdb4Mb548QLCP0eGOtb3IrXqAAAAAElFTkSuQmCC" width="25px">
                </a>
                <button v-on:click="logout" type="button" style="margin-left: 20px; margin-top: 20px" class="btn btn-outline-dark btn-sm" >Logout</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    methods: {
        ...mapActions([
            'addTodo', 'editProfile','logout'
        ])
    }
}
</script>

<style>
#logo{
    margin-left: 50px;
}
</style>


