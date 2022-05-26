import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDI4LvfeR__ju9vdgscIZSH5CsBVIEq42I",
  authDomain: "coffeeshop-3121d.firebaseapp.com",
  projectId: "coffeeshop-3121d",
  storageBucket: "coffeeshop-3121d.appspot.com",
  messagingSenderId: "33596092661",
  appId: "1:33596092661:web:7c8af28b6ae131942ad5bc",
  measurementId: "G-L1KP821BPD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {
  db,
  auth
}