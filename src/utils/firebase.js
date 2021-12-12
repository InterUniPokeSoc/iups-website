import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import "firebase/firestore";

// This can be committed to GitHub not private
const config = {
  apiKey: "AIzaSyA7Ma3LaEe4TqmVkLGgoBxtrDiUN8fu6rM",
  authDomain: "iups-3db38.firebaseapp.com",
  projectId: "iups-3db38",
  storageBucket: "iups-3db38.appspot.com",
  messagingSenderId: "967044318639",
  appId: "1:967044318639:web:e8224419097c24dbfadb5a",
  measurementId: "G-LYK3RD3R96"
};


const app = initializeApp(config);

const db = getFirestore(app);

export { db };