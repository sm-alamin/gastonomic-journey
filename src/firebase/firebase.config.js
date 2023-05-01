// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzdvczPbnOZyD15_f99XLP7jFgvSqo5_E",
  authDomain: "chef-recipe-hunter-af197.firebaseapp.com",
  projectId: "chef-recipe-hunter-af197",
  storageBucket: "chef-recipe-hunter-af197.appspot.com",
  messagingSenderId: "559439851793",
  appId: "1:559439851793:web:3539e9abe4e26676061cb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;