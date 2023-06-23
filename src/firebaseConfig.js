// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjJTsT6Ls8_Xza8uZiBv_Ttt4lSQQ8nFU",
    authDomain: "linkedin-40e9b.firebaseapp.com",
    projectId: "linkedin-40e9b",
    storageBucket: "linkedin-40e9b.appspot.com",
    messagingSenderId: "643233654998",
    appId: "1:643233654998:web:cd148fef56a81c4d72c177",
    measurementId: "G-H35T56TGB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };