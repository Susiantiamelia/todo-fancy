<template>
    <div class="register">
        <Register />
    </div>
</template>

<script>
import Register from '@/components/Register.vue'
export default {
    components: {
        Register
    }
}
</script>

<style scoped>
.register{
  height: 100vh;
  background-image: linear-gradient(#859398,#283048)
}
</style>
