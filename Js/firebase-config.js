import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCRc5TiagemDmKML3_yO5hJL9sL4qRG0tY",
  authDomain: "noor-portfolio-e7ade.firebaseapp.com",
  projectId: "noor-portfolio-e7ade",
  storageBucket: "noor-portfolio-e7ade.firebasestorage.app",
  messagingSenderId: "264005681283",
  appId: "1:264005681283:web:bc812f3b0889d85799dbb6"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);