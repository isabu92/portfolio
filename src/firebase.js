import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUYVWdHi3cUYYtXSm9xwy-h5XYII2DUcM",
  authDomain: "share-ebe8d.firebaseapp.com",
  projectId: "share-ebe8d",
  storageBucket: "share-ebe8d.appspot.com",
  messagingSenderId: "51558133031",
  appId: "1:51558133031:web:a8215e5bca7bae1c6c0d02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
const db=getFirestore(app);

export {auth,provider,db};