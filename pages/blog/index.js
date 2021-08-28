 import firebase from 'firebase'; 
import {db} from '../../firebase/firebase';
import 'firebase/firestore';
import Image from 'next/image';
import Head from 'next/head';
import Spacer from '../../components/spacer';
import Link from 'next/link';
    /*
    http://react-html-parser::: convierte el contenido de un string
    HTML a contenido html normal. Esto porque el texto del post
    viene en formato html convertido en string
    */
let Home = ({mydata})=> {
 
return (
     <>
     <Head>
       <title> 📚 Ricardo lavour Blog</title>
     </Head>
     <Spacer />

     <div className="bodyblog">
       <div className="bodyblog__body">
         <div className="bodyblog__body-wrapper">
         {
      JSON.parse(mydata).map(function(doc, i){   
        let date = Date(doc.date.toString()) 
        let sendLink = doc.title.split(" ").join("-")
          
          return(
            <section key={i}>
              <div className="bodyblog__body-wrapper-link-box">
                <img src={doc.img.split(',')[0]} alt={doc.img.split(',')[1]} /> 
                <div className="bodyblog__body-wrapper-link-box-date">
                  <Image src="/calendar.svg" alt="ricardo lavour calendar icon" width={40} height={40} />
                  <span>{date.slice(4,10)}</span>
                </div>
                

              </div> 
              <div className="bodyblog__body-wrapper-link-title">
                <h3>
                <Link href={`/blog/${sendLink}`}>
                 <a>
                   {doc.title} 
                 </a>
                </Link>
                 | ...leer Más
                </h3>
              </div>
              

              {/* <section id="textTransform"> {htm}</section>   */}
            </section>
             )   
        })
    }
         </div>
       </div>
       <div className="bodyblog__sidebar">
         <div className="bodyblog__sidebar-wrapper">

         </div>
       </div>
     </div>

    

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

  