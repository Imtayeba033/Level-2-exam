import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
 apiKey: "AIzaSyD5Z-c3Dbz_6NlzWFheEaGZQMaxOB2Cm5s",
  authDomain: "e-commerce-61dee.firebaseapp.com",
  projectId: "e-commerce-61dee",
  storageBucket: "e-commerce-61dee.firebasestorage.app",
  messagingSenderId: "874554882810",
  appId: "1:874554882810:web:a8a08aacbb60d595996743"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

