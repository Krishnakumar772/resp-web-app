import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDBr4lUO96N6fapWgLTVcN_-SbAJ9KO3uc",
    authDomain: "responsive-web-app-470fc.firebaseapp.com",
    projectId: "responsive-web-app-470fc",
    storageBucket: "responsive-web-app-470fc.appspot.com",
    messagingSenderId: "722073408602",
    appId: "1:722073408602:web:20fe6195b6396841177463",
    measurementId: "G-GFZECBLM6Z"
  };
  

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  
  export {db,auth};
