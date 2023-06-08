// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD_Q32WS1qKJWBRTTjP_Dw0eDmw3WO-c-k",
//   authDomain: "ecashier-999ef.firebaseapp.com",
//   projectId: "ecashier-999ef",
//   storageBucket: "ecashier-999ef.appspot.com",
//   messagingSenderId: "53791784243",
//   appId: "1:53791784243:web:0af0c086e55e26031fd246",
// };

const firebaseConfig = {
  apiKey: "AIzaSyD_Q32WS1qKJWBRTTjP_Dw0eDmw3WO-c-k",
  authDomain: "ecashier-999ef.firebaseapp.com",
  projectId: "ecashier-999ef",
  storageBucket: "ecashier-999ef.appspot.com",
  messagingSenderId: "53791784243",
  appId: "1:53791784243:web:0af0c086e55e26031fd246",
}

// Initialize Firebase
const FIREBASE = initializeApp(firebaseConfig)

export default FIREBASE