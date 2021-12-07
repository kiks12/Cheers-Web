import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyCM77uS6AFnE3vxji8zTKbC579HbebCxQQ",
	authDomain: "cheers-trial-864f7.firebaseapp.com",
	projectId: "cheers-trial-864f7",
	storageBucket: "cheers-trial-864f7.appspot.com",
	messagingSenderId: "363147479284",
	appId: "1:363147479284:web:feb9059075a6141ae1b6a1",
	measurementId: "G-J2W682MV2H",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();
// googleProvider.addScope("https://www.googleapis.com/auth/contacts.readonly");
// const analytics = getAnalytics(app);
