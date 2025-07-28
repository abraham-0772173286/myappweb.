// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {

  apiKey: "AIzaSyBMhNfOoZPfUuvCmXD2gKfXhM01DuqjMkM",
  authDomain: "parqpilotweb.firebaseapp.com",
  databaseURL: "https://parqpilotweb-default-rtdb.firebaseio.com",
  projectId: "parqpilotweb",
  storageBucket: "parqpilotweb.firebasestorage.app",
  messagingSenderId: "810138608718",
  appId: "1:810138608718:web:a544124b54fcbb39000f1f",
  measurementId: "G-ME54BDK650"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();

export { auth, GoogleAuthProvider, signInWithPopup };