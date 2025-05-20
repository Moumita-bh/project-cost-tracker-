import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqEtCOnpmm_u1Aq79YV7M640gctVAy7R4",
  authDomain: "project-cost-tracker-8df2f.firebaseapp.com",
  projectId: "project-cost-tracker-8df2f",
  storageBucket: "project-cost-tracker-8df2f.firebasestorage.app",
  messagingSenderId: "236381102583",
  appId: "1:236381102583:web:5cf1294a716159506ccef2",
  measurementId: "G-R4VJ2ZRSP0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);