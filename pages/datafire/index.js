 import firebase from 'firebase'; 
import {db} from '../../firebase/firebase';
import 'firebase/firestore';
import parse from 'html-react-parser'; 
import Spacer from '../../components/spacer';
    /*
    http://react-html-parser::: convierte el contenido de un string
    HTML a contenido html normal. Esto porque el texto del post
    viene en formato html convertido en string
    */
    
let Home = ({mydata})=> {
 
return (
     <>
     <Spacer />
    {
      JSON.parse(mydata).map(function(doc, i){  
       let htm = parse(doc.text);
          return(
            <section key={i}>
              <h3>{doc.title}</h3>
              <section id="textTransform"> {htm}</section> 
             <img src={doc.img} alt="Vercel Logo" /> 
            </section>
             )   
        })
    }
    </>
)
    
  }
  

export async function getStaticProps() {   
     let data = await firebase.firestore(db).collection('blog-cogigos').get(); 
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

  