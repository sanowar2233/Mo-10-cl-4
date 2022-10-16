// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzcJaur2DEV_tEUTQXdEQeUVNFOgGKyAw",
  authDomain: "th-project-auth.firebaseapp.com",
  projectId: "th-project-auth",
  storageBucket: "th-project-auth.appspot.com",
  messagingSenderId: "653817139085",
  appId: "1:653817139085:web:5af8f3691b91d97ebd37c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;