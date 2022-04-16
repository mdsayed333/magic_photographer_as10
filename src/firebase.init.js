 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxc8Lf6ccaXbymFSO9iuLxKgPPYaoIBF4",
  authDomain: "magic-photographer.firebaseapp.com",
  projectId: "magic-photographer",
  storageBucket: "magic-photographer.appspot.com",
  messagingSenderId: "165483433686",
  appId: "1:165483433686:web:aad1189952637a61aac377"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;