import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAt6kGwT4ZDHZBzpHHLYzWTzj-f3xUc_Ho",
  authDomain: "baisiyou-86e08.firebaseapp.com",
  projectId: "baisiyou-86e08",
  storageBucket: "baisiyou-86e08.appspot.com",
  messagingSenderId: "745715474423",
  appId: "1:745715474423:web:377e0b406a847e9f1dd8f2",
  measurementId: "G-8F4J1FM8QF"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
