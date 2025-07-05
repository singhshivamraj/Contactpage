// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR-OIMnu2Gy1cnEM15y-MPNAGlpxFPHcs",
  authDomain: "vite-contact-e9b6d.firebaseapp.com",
  projectId: "vite-contact-e9b6d",
  storageBucket: "vite-contact-e9b6d.firebasestorage.app",
  messagingSenderId: "359010110755",
  appId: "1:359010110755:web:91923b393dbffdf4e11096"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)