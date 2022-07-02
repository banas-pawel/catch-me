import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


export const firebaseConfig = {
    apiKey: "AIzaSyDL-MsUgEPhqm27QwWY6ZRoQsO3q9dEemI",
    authDomain: "canucatch-proj.firebaseapp.com",
    projectId: "canucatch-proj",
    storageBucket: "canucatch-proj.appspot.com",
    messagingSenderId: "814147813579",
    appId: "1:814147813579:web:dea3ac122361753e9f1b4e",
    measurementId: "G-HBSN2NLJK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth, db };

