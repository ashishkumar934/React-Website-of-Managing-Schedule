import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDxyr-hy0oc_afWxy5wudmVwizajgjaClI",
  authDomain: "schedule-managing-app.firebaseapp.com",
  databaseURL: "https://schedule-managing-app.firebaseio.com",
  projectId: "schedule-managing-app",
  storageBucket: "schedule-managing-app.appspot.com",
  messagingSenderId: "596408221236",
  appId: "1:596408221236:web:f0408293d3b8e65f4ed461",
  measurementId: "G-QEEK2L1SB0",
});

const db = firebaseApp.firestore();

export default db;
