import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyC35qabJpJf5JX5KZxxYKNKQYh2l73laCg",
  authDomain: "tiktok-clone-894ba.firebaseapp.com",
  projectId: "tiktok-clone-894ba",
  storageBucket: "tiktok-clone-894ba.appspot.com",
  messagingSenderId: "525229300534",
  appId: "1:525229300534:web:be3bda769abc36fda77197"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;