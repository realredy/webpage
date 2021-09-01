import  firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = { 

  apiKey: 'AIzaSyBVAlL57jaeb3wIaAOQw4rfO41nZBBEs9g' , 
    authDomain: 'logoteca-864c2.firebaseapp.com' , 
    databaseURL: 'https =//logoteca-864c2.firebaseio.com'  , 
    projectId: 'logoteca-864c2' , 
    storageBucket: 'logoteca-864c2.appspot.com' , 
    messagingSenderId: '6657771714' , 
    appId: '1 =6657771714 =web =cae48f474ca120f497535b' 


    // apiKey: process.env.FIRE_APIKEY, 
    // authDomain: process.env.FIRE_AUTHDOMAIN, 
    // databaseURL: process.env.FIRE_DATABASE_URL, 
    // projectId: process.env.FIRE_PROJECT_ID, 
    // storageBucket: process.env.FIRE_STORAGE_BUCKET, 
    // messagingSenderId: process.env.FIRE_MESSAGE_SEND_ID, 
    // appId: process.env.FIRE_API_ID

    // FIRE_APIKEY =  'AIzaSyBVAlL57jaeb3wIaAOQw4rfO41nZBBEs9g'   
    // FIRE_AUTHDOMAIN =  'logoteca-864c2.firebaseapp.com'   
    // FIRE_DATABASE_URL =  'https =//logoteca-864c2.firebaseio.com'   
    // FIRE_PROJECT_ID =  'logoteca-864c2'   
    // FIRE_STORAGE_BUCKET =  'logoteca-864c2.appspot.com'   
    // FIRE_MESSAGE_SEND_ID =  '6657771714'   
    // FIRE_API_ID =  '1 =6657771714 =web =cae48f474ca120f497535b' 
  };
  //  console.log('desde un lado sale::2:',config)

 
   export let db = !firebase.apps.length 
    ? firebase.initializeApp(config)
    : firebase.app();
    
       