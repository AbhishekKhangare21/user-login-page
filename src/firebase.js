import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAh4Zm4oRNwqyLlQtxmwjQBF-Fj5b3dN6U",
  authDomain: "login-page-4c679.firebaseapp.com",
  projectId: "login-page-4c679",
  storageBucket: "login-page-4c679.appspot.com",
  messagingSenderId: "944725320829",
  appId: "1:944725320829:web:d5d50f1c9eeefee2937d14",
  measurementId: "G-SKH3QQPDP1",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
