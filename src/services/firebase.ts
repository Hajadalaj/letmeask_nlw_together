import firebase from "firebase/app";

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyC8QZxL353pUQmMAuqis0KJrRwZszUUuqg",
    authDomain: "letmeask-3a1f4.firebaseapp.com",
    databaseURL: "https://letmeask-3a1f4-default-rtdb.firebaseio.com",
    projectId: "letmeask-3a1f4",
    storageBucket: "letmeask-3a1f4.appspot.com",
    messagingSenderId: "786145858634",
    appId: "1:786145858634:web:46ad28bbb23292b1b902b3"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const database = firebase.database();