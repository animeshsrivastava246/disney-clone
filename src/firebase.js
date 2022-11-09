import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBrH_Q_w9WiR7gjO4ItUqPrQGC0saKf1Zg",
  authDomain: "disney-clone-a5902.firebaseapp.com",
  projectId: "disney-clone-a5902",
  storageBucket: "disney-clone-a5902.appspot.com",
  messagingSenderId: "435989377288",
  appId: "1:435989377288:web:e79975f764a4731b07fcbd",
  measurementId: "G-0XJGKSQ4FS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig).f;
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth , provider, storage };
export default db;