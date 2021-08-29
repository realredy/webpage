import firebase from 'firebase'; 
import {db} from '../../firebase/firebase';
import 'firebase/firestore';
import parse from 'html-react-parser'; 
import Image from 'next/image';
import Head from 'next/head';
import Spacer from '../../components/spacer';
import Link from 'next/link';

import { useRouter } from 'next/dist/client/router';

var out_title;
var out_desc;
var out_date;
var out_img;

let shareFunct = (e) =>{
console.log(e)
}
function Single({datasingle}){

  const router = useRouter();
    //  console.log('datasingle', JSON.parse(datasingle))  

     if(router.isFallback){
       return <pre>Cargando, espera...</pre>
     }

    return(
        <> 
        <Spacer />
        <Head>
         <title>
          {out_title}
         </title>
         <meta property="og:type" content="article" />
         <meta property="og:title" content={out_title} />
         <meta property="og:description" content={out_desc} />
         <meta property="og:url" content={`https://lavour.es/blog/${out_desc}`} />
         <meta property="og:published_time" content={out_date} />
         <meta property="og:image" content={out_img} />

         <meta name="twitter:card" content="sumary" />
         <meta name="twitter:title" content={out_title} />
         <meta name="twitter:description" content={out_desc} />
         <meta name="twitter:image" content={out_img} />
         <meta name="twitter:url" content={`https://lavour.es/blog/${out_desc}`} />
        </Head>
         <div className="single">
           {
             JSON.parse(datasingle).map((single, i)=>{
                 let date = Date(single.date.toString()) 
                 let htm = parse(single.text);
                 out_desc = single.text;
                  out_title = single.title;
                  out_date = date.slice(4,16);
                  out_img = single.img.split(',')[0];
               return(
                 <div key={i} className="single__wrapper">
                <div className="single__wrapper-image-date">
                  <img src={single.img.split(',')[0]} alt={single.img.split(',')[1]} width={800} height={325} quality={100} />
                  <span>{date.slice(4,16)}</span>
                </div> 
                  <h1>{single.title}</h1>
                  <div className="single__wrapper-image-share">
                    <ul>
                     <li>Share this article...</li>
                     <li><Image className="share_web" onClick={shareFunct} src="/web.svg" alt="basd" height={37} width={37} /></li>
                     <li><Image className="share_twt" onClick={shareFunct} src="/twitter.svg" alt="basd" height={37} width={37} /></li>
                     <li><Image className="share_link" onClick={shareFunct} src="/linkedIn.svg" alt="basd" height={37} width={37} /></li>
                     <li><Image className="share_face" onClick={shareFunct} src="/facebook.svg" alt="basd" height={37} width={37} /></li>
                    </ul>
                  </div>
                 <div className="single__wrapper-html">{htm}</div>
                 </div>
               )
             })
           }
          </div>
        </>
    )
}


// path
export async function getStaticPaths() { 
  const getdatafire = await firebase.firestore(db).collection('blog-cogigos').get(); 
  const datafire = getdatafire.docs;  
          
            
 let prams = datafire.map(data=>{
          
    return{  params:{ id: data.data().title} }  
  }) 

   return{
       paths: prams ,
      fallback: 'blocking'
   } 
}

 

 // props 
export async function getStaticProps(context) { 
const dataParams = context.params.id; 
let confirm = dataParams.split("-").join(" ");

     let data = await firebase.firestore(db).collection('blog-cogigos').where("title", "==", confirm).get(); 
         let tata = data.docs; 
        let pre = tata.map((fix)=>{ 
        
          return fix.data();   
         }) 

        //  console.log('rep',pre)
      return {
        props: {
          datasingle: JSON.stringify(pre),
        },
      }
   }
  


 export default Single