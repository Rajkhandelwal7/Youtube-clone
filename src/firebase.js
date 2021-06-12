
import firebase from 'firebase';
const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyD0ljSk8hWJde8kGkqeSqGshILrm7EEYRA",
    authDomain: "clone-7bcd2.firebaseapp.com",
    projectId: "clone-7bcd2",
    storageBucket: "clone-7bcd2.appspot.com",
    messagingSenderId: "414945760413",
    appId: "1:414945760413:web:9515246ccd966560033074",
    measurementId: "G-NRX4QW3JNT"
  });

  const db=firebaseApp.firestore();
  export default db;