import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = { 
    apiKey:process.env.FIRE_APIKEY , 
    authDomain:process.env.FIRE_AUTHDOMAIN  , 
    databaseURL:process.env.FIRE_DATABASE_URL  , 
    projectId:process.env.FIRE_PROJECT_ID , 
    storageBucket:process.env.FIRE_STORAGE_BUCKET, 
    messagingSenderId:process.env.FIRE_MESSAGE_SEND_ID, 
    appId:FIRE_API_ID
  };
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }
  export default firebase;