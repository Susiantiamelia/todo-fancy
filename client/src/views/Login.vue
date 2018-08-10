<template>
  <div class="login">
    <Login></Login>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
export default {
  components: {
    Login
  }
}
</script>

<style scoped>
.login{
  height: 100vh;
  background-image: linear-gradient(#859398,#283048)
}

</style>
