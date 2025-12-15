// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1VywKv62THslyGWtIJjXdDRL3ko5gb8I",
  authDomain: "assigenment11.firebaseapp.com",
  projectId: "assigenment11",
  storageBucket: "assigenment11.firebasestorage.app",
  messagingSenderId: "32114132786",
  appId: "1:32114132786:web:22a6040826106aaaa3f92b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);