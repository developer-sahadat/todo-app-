// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0LNefByYJPMURIWiIURo3wNC-0xIQ9a4",
  authDomain: "todo-app-cc992.firebaseapp.com",
  projectId: "todo-app-cc992",
  storageBucket: "todo-app-cc992.appspot.com",
  messagingSenderId: "842193906254",
  appId: "1:842193906254:web:b11b777ee3166472d1b11f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
