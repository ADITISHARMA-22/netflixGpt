// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmdpf9sukqZ_GwdNOWyCo6gT-5X3edgjU",
  authDomain: "netflixgpt-9c59d.firebaseapp.com",
  projectId: "netflixgpt-9c59d",
  storageBucket: "netflixgpt-9c59d.firebasestorage.app",
  messagingSenderId: "35139256256",
  appId: "1:35139256256:web:a4c18c1cb2910a29791225",
  measurementId: "G-YDE6JPVGXC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
