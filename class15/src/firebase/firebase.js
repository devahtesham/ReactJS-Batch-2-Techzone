// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection,getDocs,deleteDoc,doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ1Q7TKHzTEnKfH0wwrP2Vfd7kekJzTN8",
  authDomain: "ecommerce-website-502b9.firebaseapp.com",
  projectId: "ecommerce-website-502b9",
  storageBucket: "ecommerce-website-502b9.appspot.com",
  messagingSenderId: "90995626688",
  appId: "1:90995626688:web:5c3990a0041dfb00f19325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize collection
const db_collection = collection(db,"cartItems")

export {
    db_collection,
    addDoc,
    getDocs,    
    deleteDoc,
    doc,
    db
}