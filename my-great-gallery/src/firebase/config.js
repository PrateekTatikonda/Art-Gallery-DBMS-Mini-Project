// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';



import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoTnjXuBzYVZi4YzBO1WLXK59OTAYkEOI",
  authDomain: "my-great-gallery-2c093.firebaseapp.com",
  projectId: "my-great-gallery-2c093",
  storageBucket: "my-great-gallery-2c093.appspot.com",
  messagingSenderId: "349658811272",
  appId: "1:349658811272:web:ae898f2590fd32bed8483d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();

export {projectStorage , projectFireStore};