// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWTT4YG9O1-mzjAVbz7yiHxVXu02xLDv4",
  authDomain: "parqpilot-2c029.firebaseapp.com",
  databaseURL: "https://parqpilot-2c029-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "parqpilot-2c029",
  storageBucket: "parqpilot-2c029.appspot.com",
  messagingSenderId: "937029182282",
  appId: "1:937029182282:web:bafa94d53c6185589fd7b3",
  measurementId: "G-ZR0D6074Z1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, GoogleAuthProvider, signInWithPopup };