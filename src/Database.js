import firebase from "firebase/app";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyCg2qWrBoLhh0aL3avprHI0PHb7X1w4-9g",
  authDomain: "vishal-singh4310.firebaseapp.com",
  databaseURL: "https://vishal-singh4310.firebaseio.com",
  projectId: "vishal-singh4310",
  storageBucket: "vishal-singh4310.appspot.com",
  messagingSenderId: "1084999211716",
  appId: "1:1084999211716:web:7fa3c7df08fe35a3d60791",
  measurementId: "G-S3ECMMJCEY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const analytics = firebase.analytics();
