import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCM77uS6AFnE3vxji8zTKbC579HbebCxQQ",
  authDomain: "cheers-trial-864f7.firebaseapp.com",
  projectId: "cheers-trial-864f7",
  storageBucket: "cheers-trial-864f7.appspot.com",
  messagingSenderId: "363147479284",
  appId: "1:363147479284:web:feb9059075a6141ae1b6a1",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// const analytics = getAnalytics(app);