// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAirUOVFcfeXcTk_NgJK7-bcWQQxajS0VE",
  authDomain: "kaitoker-5b3b2.firebaseapp.com",
  projectId: "kaitoker-5b3b2",
  storageBucket: "kaitoker-5b3b2.appspot.com",
  messagingSenderId: "57808843053",
  appId: "1:57808843053:web:5e91f8b4798589fae123a4",
  measurementId: "G-4HXBW42EF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app, auth, analytics};

