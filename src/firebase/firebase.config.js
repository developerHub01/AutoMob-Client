// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjGjw7BWQnVx1LBfH_Rh3CjrPpvuH3Eak",
  authDomain: "automob-786c8.firebaseapp.com",
  projectId: "automob-786c8",
  storageBucket: "automob-786c8.appspot.com",
  messagingSenderId: "619231485400",
  appId: "1:619231485400:web:768d93fcd3d2060a31e6ad",
  measurementId: "G-MHPCY8J0TE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
