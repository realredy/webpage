 
import firebase from 'firebase/app'; 
import 'firebase/firestore';
 import { useCollection } from "react-firebase-hooks/firestore";

 
    
let Home = ({mydata})=> {
 
return (
    <div>
    { 
    mydata.map(data=>(
      <p>{data[0].nameLiker}</p>
    ))
    }
    </div>
)
    
  }
  

export async function getStaticProps() {  
    

    let allData = [];

  let data = await firebase.firestore().collection('sistemLikes').get(); 
     data.docs.forEach(da=>{
       
       allData.push(da.data())
    })
   



  // let cocu =  data.data();
  
    //  console.log(cocu)
      
      /*
      esto se renderiza del lado del servidor por lo que 
      el ersultado se vera en la pantalla en donde se eje
      cuta {npm dev} y no en la consola del navegador
      */
  return {
    props: {
      mydata: JSON.stringify(allData),
    },
  }
}



  


  export default Home
  