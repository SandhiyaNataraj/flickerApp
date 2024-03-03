import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDya5mRL-I3VsJEkoqqWu97TsK5fi-S6A0",
  authDomain: "react-flicker-be4bb.firebaseapp.com",
  projectId: "react-flicker-be4bb",
  storageBucket: "react-flicker-be4bb.appspot.com",
  messagingSenderId: "1027136591055",
  appId: "1:1027136591055:web:38bc2acc7b24721d1e13ba",
  measurementId: "G-TEEER2DHFC"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app);