import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjRvqd0KOtotoDl_54A9H7SuiaRZyYLCk",
  authDomain: "prj-blog-8ec40.firebaseapp.com",
  projectId: "prj-blog-8ec40",
  storageBucket: "prj-blog-8ec40.appspot.com",
  messagingSenderId: "499717608230",
  appId: "1:499717608230:web:9d5d7191cbc4c06a87a7e7",
  measurementId: "G-67Y2MM0XR4",
};

const app = initializeApp(firebaseConfig);
export const db = getFireStore(app);
export const auth = getAuth();
