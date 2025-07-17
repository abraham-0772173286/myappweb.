// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

addDoc(collection(db, "users"), {
  name: "Abraham",
  email: "mwesigwaabrahamdaniel911@gmail.com"
});
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

createUserWithEmailAndPassword(auth, "mwesigwaabrahamdamiel911@gmail.com", "2212Aa@0")
  .then((userCredential) => {
    console.log("User signed up:", userCredential.user);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWTT4YG9O1-mzjAVbz7yiHxVXu02xLDv4",
  authDomain: "parqpilot-2c029.firebaseapp.com",
  databaseURL: "https://parqpilot-2c029-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "parqpilot-2c029",
  storageBucket: "parqpilot-2c029.firebasestorage.app",
  messagingSenderId: "937029182282",
  appId: "1:937029182282:web:bafa94d53c6185589fd7b3",
  measurementId: "G-ZR0D6074Z1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);