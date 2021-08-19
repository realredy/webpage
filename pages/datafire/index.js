 
import firebase from 'firebase/app'; 
import 'firebase/firestore';
// import { useCollection } from "react-firebase-hooks/firestore";




let Home = ()=> {


   firebase.firestore().collection('blog-cogigo').add({
    data:'cocola'
  }).then(data=>data.json()).then(datas=>console.log(datas))  
   
     

return (
    <>
    </>
)
    



    }



  export default Home
  