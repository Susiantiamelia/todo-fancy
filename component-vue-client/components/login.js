Vue.component('login', {
  template: `
  <div>
    <h5><b>TODO FANCY</b></h5>
    <div class="container" id="box">
      <div class="row">
          <div class="col s12 m5">
            <br><br>
            <h5 id="login">Sign In</h5>
            <br><br>
            <div class="container">
              <div class="input-field col s12">
                <input id="uname_email" type="text" class="validate" v-model="uname_email">
                <label for="uname_email">Username/Email</label>
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
              <button class="btn waves-effect waves-light" type="submit" name="action" @click="dataLogin">LOGIN</button>
            </div>
            <div class="container" id="log-with-fb">
              <button class="btn waves-effect waves-light" type="submit" name="action">LOGIN WITH FACEBOOK</button>
            </div>
            <a href="regist.html"><small>Don't have an account? Click here</small></a>
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
    return{
      uname_email: '',
      password: ''
    }
  },
  methods: {
    dataLogin() {
      this.$emit('data-login', {
        uname_email: this.uname_email,
        password: this.password
      })
    }
  }
})