// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBmNq0z8HbGM0XXakBmfnMSjWsqAcklxE",
  authDomain: "login-96a04.firebaseapp.com",
  projectId: "login-96a04",
  storageBucket: "login-96a04.appspot.com",
  messagingSenderId: "250015887722",
  appId: "1:250015887722:web:3a015296921845c6633513",
  measurementId: "G-VNZ1NFYGCX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
