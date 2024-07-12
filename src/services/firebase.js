import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJe36r5LdWmTYMf8fOd1nBSBCuSw_p56Y",
  authDomain: "pokemon-games-4207a.firebaseapp.com",
  projectId: "pokemon-games-4207a",
  storageBucket: "pokemon-games-4207a.appspot.com",
  messagingSenderId: "1011249767570",
  appId: "1:1011249767570:web:303dae9000f0d64728b24b",
  measurementId: "G-LKK11JB3X4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const logOut = () => {
  return signOut(auth);
};

export { auth, firestore };