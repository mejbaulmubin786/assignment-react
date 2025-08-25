// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";   // 🔹 Authentication import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASWDeBQ3BIUIr8ITNEGpAwLNgTD4cfiqM",
  authDomain: "assignment-react-8aec9.firebaseapp.com",
  projectId: "assignment-react-8aec9",
  storageBucket: "assignment-react-8aec9.appspot.com", // 🔹 এখানে ছোট্ট ভুল ছিল, ".app" না দিয়ে ".appspot.com" হবে
  messagingSenderId: "707139414532",
  appId: "1:707139414532:web:0f66f5d623903c14696351",
  measurementId: "G-82QLBQMT2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional, only if you really need it)
const analytics = getAnalytics(app);

// 🔹 Initialize Authentication
export const auth = getAuth(app);
