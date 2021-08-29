 import Spacer from '../components/spacer';
import Sliderarticles from '../components/homecomponents/Sliderarticles';
import Selectorarticles from '../components/homecomponents/Selectorarticles';
import { useEffect , useState} from 'react';
import Titles from '../components/homecomponents/Titles';
import Printsoftware from '../components/homecomponents/Printsofware';
import WebProducer from '../components/homecomponents/Webproducer';
import Timeline from '../components/homecomponents/Timeline';
import TimelineMobile from '../components/homecomponents/Timelinemobile';
import Portfolios from '../components/homecomponents/Portfolios';
import About from '../components/homecomponents/About';


export default function Home() { 
  
   

  const [pantalla, setPantalla] = useState('');   
  let resize = ()=>{
    if(document !== 'undefined'){
      window.onresize = ()=>{ 
        setPantalla(window.innerWidth); 
       } 
    } 
 };


 


  useEffect(()=>{ 
      setPantalla(window.innerWidth);  
      resize() 
  },[])

//  if(pantalla){
//    return(
//      <>
//      <p>Loading..</p>
//      </>
//    )
//  }
  return (
    <>
    <Spacer />
    <div className="home"> 
      { pantalla >= 550 ? <Selectorarticles />  : <Sliderarticles /> }  
      <Titles texto="Pints Software" posicion="left" />
      <Printsoftware />
      <Titles texto="Web Developer" posicion="right" />
      <WebProducer />
      <Titles texto="Work TimeLine" posicion="left" />
      { pantalla >= 550 ? <Timeline /> : <TimelineMobile /> }
      <Titles texto="Some Works" posicion="right" />
      <Portfolios />
      <Titles texto="Litle info about me" posicion="left" />
      <About />
    </div>
    </>
  )
 

} 




// export async function getStaticProps() {   
//   let fetchs = await fetch('http://localhost:3000/api/type/sliders');
//   let getdata = await fetchs.json(); 
//   //================================================
//   let fetchsw = await fetch('http://localhost:3000/api/type/works');
//   let miworks = await fetchsw.json(); 

//   // console.log('sin parameters::',works)
//    return {
//      props: {
//       sliders: getdata,
//       works: miworks
//      },
//    }
// }