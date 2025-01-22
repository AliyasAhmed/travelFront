import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC60Lxcz1eJPqvlzrJnT7kOmiofCKxp6pQ",
  authDomain: "travelai-cf1aa.firebaseapp.com",
  projectId: "travelai-cf1aa",
  storageBucket: "travelai-cf1aa.firebasestorage.app",
  messagingSenderId: "834862042786",
  appId: "1:834862042786:web:b82d744bfe430ddad9d1fb",
  measurementId: "G-E4WJ1QCD0E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };

