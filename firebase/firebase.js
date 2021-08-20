import  firebase from "firebase/app";
import 'firebase/firestore';

const config = { 
    apiKey:process.env.FIRE_APIKEY , 
    authDomain:process.env.FIRE_AUTHDOMAIN  , 
    databaseURL:process.env.FIRE_DATABASE_URL  , 
    projectId:process.env.FIRE_PROJECT_ID , 
    storageBucket:process.env.FIRE_STORAGE_BUCKET, 
    messagingSenderId:process.env.FIRE_MESSAGE_SEND_ID, 
    appId:process.env.FIRE_API_ID
  };

  export default !firebase.apps.length 
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore();