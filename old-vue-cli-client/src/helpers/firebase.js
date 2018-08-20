import firebase from 'firebase'

console.log("masuk")
var config = {
    apiKey: "AIzaSyC8FBNbfF7-c2A5btoMb9QcVE38mlZ7QAQ",
    authDomain: "sandbox-210608.firebaseapp.com",
    databaseURL: "https://sandbox-210608.firebaseio.com",
    projectId: "sandbox-210608",
    storageBucket: "sandbox-210608.appspot.com",
    messagingSenderId: "581545695298"
  };
  firebase.initializeApp(config);

  const providerFB = new firebase.auth.FacebookAuthProvider()
  providerFB.addScope('email')

  export {
    firebase,
    providerFB
  }