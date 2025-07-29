// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCWTT4YG9O1-mzjAVbz7yiHxVXu02xLDv4",
  authDomain: "parqpilot-2c029.firebaseapp.com",
  databaseURL: "https://parqpilot-2c029-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "parqpilot-2c029",
  storageBucket: "parqpilot-2c029.appspot.com",
  messagingSenderId: "937029182282",
  appId: "1:937029182282:web:70f8f85ca772d4599fd7b3",
  measurementId: "G-0EQ1PTD3PS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Sign Up Form Handling

const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const form = this;
    const submitBtn = form.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
      window.showError?.('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      window.showError?.('Please enter a valid email address.');
      return;
    }

    // Show loading state
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    submitBtn.disabled = true;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // window.showSuccessModal?.();
      showSuccessModal("Account created successfully! Please check your email for verification.");
    } catch (error) {
      showError(error.message);
    } finally {
      btnText.style.display = 'flex';
      btnLoading.style.display = 'none';
      submitBtn.disabled = false;
    }
  });
}

function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}
function closeSuccessModal() {
    window.location.href = 'index.html';
}
// Error message function
function showError(message) {
    const notification = document.createElement('div');
    notification.className = 'error-notification';
    notification.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}





const signinForm = document.getElementById('signinForm');
if (signinForm) {
  signinForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = this;
    const submitBtn = form.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
      window.showError?.('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      window.showError?.('Please enter a valid email address.');
      return;
    }

    // Show loading state
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    submitBtn.disabled = true;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      //showSuccessModal?.();
      
       window.location.href = 'index.html';
    } catch (error) {
      showError?.('Sign in failed: ' + error.message);
    } finally {
      btnText.style.display = 'flex';
      btnLoading.style.display = 'none';
      submitBtn.disabled = false;
    }
  });
}
