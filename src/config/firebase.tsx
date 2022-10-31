import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBbzM-OQiY3F65qAsbkqy4AjsDcsj9Y9L8",
    authDomain: "queuing-df236.firebaseapp.com",
    projectId: "queuing-df236",
    storageBucket: "queuing-df236.appspot.com",
    messagingSenderId: "475602504574",
    appId: "1:475602504574:web:6c20f70cc710a1455c812f"
};

const app = initializeApp(firebaseConfig)
// const db = firebase.firestore()
const db = getFirestore(app);
const auth = getAuth(app)
export { auth, db }