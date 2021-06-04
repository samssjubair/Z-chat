import firebase from 'firebase/app';
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyAomWFfvrWaeOXRrrjIUbO1rW0NMcAHd2Y",
    authDomain: "z-chat-cfb4a.firebaseapp.com",
    projectId: "z-chat-cfb4a",
    storageBucket: "z-chat-cfb4a.appspot.com",
    messagingSenderId: "498711247537",
    appId: "1:498711247537:web:cfd83e60d83c7473378090"
  };

let app;

if(firebase.apps.length === 0){

  app = firebase.initializeApp(firebaseConfig)

}else{
  app = firebase.app();

}

const db = app.firestore();
const auth = firebase.auth();

export {db , auth };

  
