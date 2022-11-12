import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrH_Q_w9WiR7gjO4ItUqPrQGC0saKf1Zg",
  authDomain: "disney-clone-a5902.firebaseapp.com",
  projectId: "disney-clone-a5902",
  storageBucket: "disney-clone-a5902.appspot.com",
  messagingSenderId: "435989377288",
  appId: "1:435989377288:web:e79975f764a4731b07fcbd",
  measurementId: "G-0XJGKSQ4FS"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export {auth , provider, storage };
export default db;