import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyClHcp79v-DHBbbOMmLVyZLsljZHnNbBxs",
    authDomain: "note-app-bf89e.firebaseapp.com",
    projectId: "note-app-bf89e",
    storageBucket: "note-app-bf89e.appspot.com",
    messagingSenderId: "1059012352536",
    appId: "1:1059012352536:web:07a75a2c086d2ec3c5c16d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);