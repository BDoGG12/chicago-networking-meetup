import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnMYW1K8S8JjUwG0e_02FeSdnmn19RujY",
  authDomain: "chicago-networking-meetup.firebaseapp.com",
  projectId: "chicago-networking-meetup",
  storageBucket: "chicago-networking-meetup.firebasestorage.app",
  messagingSenderId: "91724314366",
  appId: "1:91724314366:web:157652ac5c25ed485017af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const db = getFirestore(app);

export {auth, db};