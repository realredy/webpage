import  firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = { 

  apiKey: process.env.PUBLIC_FIRE_APIKEY, 
  authDomain: process.env.PUBLIC_FIRE_AUTHDOMAIN, 
  databaseURL: process.env.PUBLIC_FIRE_DATABASE_URL, 
  projectId: process.env.PUBLIC_FIRE_PROJECT_ID, 
  storageBucket: process.env.PUBLIC_FIRE_STORAGE_BUCKET, 
  messagingSenderId: process.env.PUBLIC_FIRE_MESSAGE_SEND_ID, 
  appId: process.env.PUBLIC_FIRE_API_ID

 
  };
  //  console.log('desde un lado sale::2:',config)

 
   export let db = !firebase.apps.length 
    ? firebase.initializeApp(config)
    : firebase.app();
    
       