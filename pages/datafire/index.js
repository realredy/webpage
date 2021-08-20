 import firebase from 'firebase'; 
 import '../../firebase/firebase';
import 'firebase/firestore';
 
    
    
let Home = ({mydata})=> {
 
return (
     <>
    {
      JSON.parse(mydata).map(function(doc, i){  
          return(
            <section key={i}>
              <h3>{doc.title}</h3>
              <section id="textTransform"> {doc.text}</section> 
             <img src={doc.img} />
             
            </section>
             )   
        })
    }
    </>
)
    
  }
  

export async function getStaticProps() {   
     let data = await firebase.firestore().collection('blog-cogigos').get(); 
         let tata = data.docs; 
        let pre = tata.map((fix)=>{ 
          return fix.data();  
         }) 
      return {
        props: {
          mydata: JSON.stringify(pre),
        },
      }
   }



  export default Home

  