import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAGp9Svt5808tLTZZoozlTAdV24K9UCddQ",
        authDomain: "clone-6da37.firebaseapp.com",
        databaseURL: "https://clone-6da37.firebaseio.com",
        projectId: "clone-6da37",
        storageBucket: "clone-6da37.appspot.com",
        messagingSenderId: "418169754523",
        appId: "1:418169754523:web:37cc34393c3e6afad7873e",
        measurementId: "G-KPMZ97Z1Q1"
});

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};