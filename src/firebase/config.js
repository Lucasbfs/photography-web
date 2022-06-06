// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import "firebase/storage";
import "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9PPSooXUR3H04Syk0Z_vYglWMYO95UME",
  authDomain: "photo-lbfs.firebaseapp.com",
  projectId: "photo-lbfs",
  storageBucket: "photo-lbfs.appspot.com",
  messagingSenderId: "885002312954",
  appId: "1:885002312954:web:516ba244843cde8d97fd43",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

//initialize two services
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

//exporting services for future use
export { projectStorage, projectFirestore };
