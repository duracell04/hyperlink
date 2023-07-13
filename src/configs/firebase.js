import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAFbZc9ln8hD_lY9Yr42U4ej1Lv7cIZRA",
  authDomain: "hyperlink-9585b.firebaseapp.com",
  projectId: "hyperlink-9585b",
  storageBucket: "hyperlink-9585b.appspot.com",
  messagingSenderId: "73773902197",
  appId: "1:73773902197:web:b7179c4d95cdf904b1cb3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
