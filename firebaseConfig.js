// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCFJtay8LOVlIfjsOTdYYyXbKW7Jfy4v8A',
  authDomain: 'admin-tool-89565.firebaseapp.com',
  projectId: 'admin-tool-89565',
  storageBucket: 'admin-tool-89565.appspot.com',
  messagingSenderId: '968547394159',
  appId: '1:968547394159:web:5b8e5b3f21f1dc3c2c239a',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
