Vue.component('registcard', {
  template: `
  <div>
    <h5><b>TODO FANCY</b></h5>
    <div class="container" id="box">
      <div class="row">
          <div class="col s12 m5">
            <br><br>
            <h5 id="login">Sign Up</h5>
            <br><br>
            <div class="container">
              <div class="input-field col s12">
                <input id="fullname" type="text" class="validate" v-model="fullname">
                <label for="fullname">Fullname</label>
              </div>
            </div>
            <div class="container">
              <div class="input-field col s12">
                <input id="username" type="text" class="validate" v-model="username">
                <label for="username">Username</label>
              </div>
            </div>
            <div class="container">
                <div class="input-field col s12">
                  <input id="email" type="text" class="validate" v-model="email">
                  <label for="email">Email</label>
                </div>
              </div>
            <br><br>
            <div class="container">
              <div class="input-field col s12">
                <input id="password" type="password" class="validate" v-model="password">
                <label for="password">Password</label>
              </div>
            </div>
            <br><br><br><br>
            <div class="container" id="submit">
              <button class="btn waves-effect waves-light" type="submit" name="action" @click="sendData">SIGN  UP</button>
            </div>
            <br>
            <div class="container" id="error">
              <small  style="align-self: center ; color: red">{{ error }}</small>
            </div>
            <br>
          </div>
      </div>
    </div>
  </div>
  `,
  props: ['error'],
  data(){
    return {
      fullname: '',
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    sendData(){
      this.$emit('data-regist', {
        fullname: this.fullname,
        username: this.username,
        email: this.email,
        password: this.password
      })
    }
  }
})