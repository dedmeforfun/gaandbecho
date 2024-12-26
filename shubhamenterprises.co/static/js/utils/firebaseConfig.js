import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCPWmyisdkgu1QfLDWsvNdtvgxVqhpJHww",
    authDomain: "vidyamitra23.firebaseapp.com",
    databaseURL: "https://vidyamitra23-default-rtdb.firebaseio.com",
    projectId: "vidyamitra23",
    storageBucket: "vidyamitra23.appspot.com",
    messagingSenderId: "380892168685",
    appId: "1:380892168685:web:e9d217addb7cd07dc2e7e4",
    measurementId: "G-E613RSLWKG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
