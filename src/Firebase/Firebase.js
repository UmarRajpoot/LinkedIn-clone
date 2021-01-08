// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLWmfT2uDJOBQ2T29VcK7xJVa9TwMjR20",
  authDomain: "linkedin-clone-e272c.firebaseapp.com",
  projectId: "linkedin-clone-e272c",
  storageBucket: "linkedin-clone-e272c.appspot.com",
  messagingSenderId: "128546069495",
  appId: "1:128546069495:web:bb049f1945a3318b5a2cf2",
  measurementId: "G-8118L9GRJF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
