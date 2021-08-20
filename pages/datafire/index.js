 import firebase from 'firebase'; 
 import '../../firebase/firebase';
import 'firebase/firestore';
import parse from 'html-react-parser';
    
    
let Home = ({mydata})=> {
 
return (
     <>
    {
      JSON.parse(mydata).map(function(doc, i){  
       let htm = parse(doc.text);
          return(
            <section key={i}>
              <h3>{doc.title}</h3>
              <section id="textTransform"> {htm}</section> 
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

  