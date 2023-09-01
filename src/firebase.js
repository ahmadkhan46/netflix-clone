import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAXwIj9oyBuRJZGw5S5mhVIurvaAeuMhcE",
    authDomain: "netflix-clone-e9e10.firebaseapp.com",
    projectId: "netflix-clone-e9e10",
    storageBucket: "netflix-clone-e9e10.appspot.com",
    messagingSenderId: "207832394804",
    appId: "1:207832394804:web:212b66794ffff8851d6e61",
    measurementId: "G-RX8MJLJ52R"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig)
const db= firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth}
