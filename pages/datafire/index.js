 
import firebase from 'firebase/App'; 
import 'firebase/firestore';
 import { useCollection } from "react-firebase-hooks/firestore";

 
    
let Home = ({mydata})=> {
 
    // console.log('mydata >🧐<', [mydata] )
  
    
return (
     <>
    {
      [mydata].map(function(dif){
        
        console.log('map >🧐<',dif )
 


        })
    }
    </>
)
    
  }
  

export async function getStaticProps() {  
     
      let getAlldata = [];

     let data = await firebase.firestore().collection('sistemLikes').get(); 
     data.forEach(function(doc) { 
      let datosGet = doc.data(); 
      //    console.log('doc:::',doc.id)
      getAlldata.push({data:datosGet, id:doc.id}) 
     }) 
      return {
        props: {
          mydata: JSON.stringify(getAlldata),
        },
      }
      }

    // })
   



  // let cocu =  data.data();
  
    //  console.log(cocu)
      
      /*
      esto se renderiza del lado del servidor por lo que 
      el ersultado se vera en la pantalla en donde se eje
      cuta {npm dev} y no en la consola del navegador
      */
//   return {
//     props: {
//       mydata: JSON.stringify(allData),
//     },
//   }
// }



  


  export default Home
  