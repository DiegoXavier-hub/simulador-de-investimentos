
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCHzBV8mU2hUkZ8hLk14AepYDNXQxQLDGE",
    authDomain: "prosperinvest-5cfa1.firebaseapp.com",
    projectId: "prosperinvest-5cfa1",
    storageBucket: "prosperinvest-5cfa1.appspot.com",
    messagingSenderId: "907803179088",
    appId: "1:907803179088:web:85e3c40dc92d341ed87955",
    measurementId: "G-T5Y5FC4MVR"
};
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }