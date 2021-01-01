import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcCiudLqAaekaTLdV_9zlO0Fkb2fe3GLM",
    authDomain: "fir-5ac9b.firebaseapp.com",
    projectId: "fir-5ac9b",
    storageBucket: "fir-5ac9b.appspot.com",
    messagingSenderId: "696701912010",
    appId: "1:696701912010:web:f957712f33a9a109cb0533",
    measurementId: "G-5SYTTMNTRN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};