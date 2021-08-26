import Image from 'next/image' 
import Spacer from '../components/spacer' 
import Sliderarticles from '../components/homecomponents/Sliderarticles';
import Selectorarticles from '../components/homecomponents/Selectorarticles';
import { useEffect , useState} from 'react';

export default function Home({alldata}) {
  const [pantalla, setPantalla] = useState(900);   

   

  useEffect(()=>{
    window.onresize = ()=>{ 
      setPantalla(window.innerWidth);  
  } 
  },[])

  return (
    <>
    <Spacer />
    <div className="home"> 
      {pantalla >= 550 ? <Selectorarticles />  : <Sliderarticles sliders={alldata} /> }  
    </div>
    </>
  )
}


export async function getStaticProps() {   
  let fetchs = await fetch('http://localhost:3000/api/type/sliders');
  let getdata = await fetchs.json();
  console.log(getdata)
   return {
     props: {
       alldata: getdata,
     },
   }
}