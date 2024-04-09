// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfYkVPL57KgEIA4K6PGKKf8KBRmxf7OtA",
  authDomain: "mynetflis.firebaseapp.com",
  projectId: "mynetflis",
  storageBucket: "mynetflis.appspot.com",
  messagingSenderId: "675234632900",
  appId: "1:675234632900:web:40b4637fa153c3de1fa591",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth  API

export const auth = getAuth();
