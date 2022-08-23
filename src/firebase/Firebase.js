import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyCzeS-9IFv5WnmeL6_0FQTIMXN5JyfnEv8",
    authDomain: "panaderia-react.firebaseapp.com",
    projectId: "panaderia-react",
    storageBucket: "panaderia-react.appspot.com",
    messagingSenderId: "668381267604",
    appId: "1:668381267604:web:1cfe5cee650e275fd2d681"
  };
  
  
  const app = initializeApp(firebaseConfig);
  
  export const db=getFirestore(app)