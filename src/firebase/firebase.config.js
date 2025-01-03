// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_8OqlPSDQyI2lzcybZITaAQg1u_fxSnA",
  authDomain: "justtest-a94bf.firebaseapp.com",
  projectId: "justtest-a94bf",
  storageBucket: "justtest-a94bf.firebasestorage.app",
  messagingSenderId: "280388253386",
  appId: "1:280388253386:web:afd34b009c457f13e9e633",
  measurementId: "G-H2N3XWGY3M"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);




// Export 
export {app, auth, analytics, db};

