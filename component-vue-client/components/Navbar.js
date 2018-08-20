Vue.component('navbar', {
  template: `
    <div>
      <nav>
        <div class="nav-wrapper">
          <a href="dashboard.html" class="brand-logo"><i class="fas fa-check-double fa-1x"></i>TODO FANCY</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><button class="btn-flat" @click="editprofile"><i class="fas fa-user-circle fa-2x"></i></button></li>
            <li><button class="btn-flat" @click="logout"><i class="fas fa-sign-out-alt"></i>Logout</button></li>
          </ul>
        </div>
      </nav>
      <ul class="sidenav" id="mobile-demo">
        <li><button class="btn-flat" @click="editprofile"><i class="fas fa-user-circle fa-2x"></i></button></li>
        <li><button class="btn-flat" @click="logout"><i class="fas fa-sign-out-alt"></i>Logout</button></li>
      </ul>
    </div>
  `,
  methods: {
    editprofile(){
      this.$emit('editprofile', 'editprofile')
    },
    logout(){
      this.$emit('logout', 'logout')
    }
  }
})