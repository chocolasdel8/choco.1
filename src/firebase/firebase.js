
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, addDoc, collection, getDoc, getDocs, query, where, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNhz4_AYKd1MXw1CAoFYQEpfkISDoi5ZA",
  authDomain: "enmava-f804f.firebaseapp.com",
  projectId: "enmava-f804f",
  storageBucket: "enmava-f804f.appspot.com",
  messagingSenderId: "772568792856",
  appId: "1:772568792856:web:46b3095ffe8ce21f82a86d",
  measurementId: "G-TDFG9ZZPEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);

