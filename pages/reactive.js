import {useEffect, useState} from 'react';
import firebase from 'firebase'; 
import {db} from '../firebase/firebase';
import 'firebase/firestore';
// import parse from 'html-react-parser'; 

const Reactive = () =>{

  const [awaitdata, setAwaitdata] = useState([]);
    console.log(awaitdata)

    useEffect(()=>{
        
      async function trydata(){
         let pixel = await fetch('https://randomuser.me/api/');
         let getpix = await pixel.json();
        setAwaitdata(getpix.results);  
    }

      trydata()

    },[])
return(
  <>
   
    {awaitdata.map((chic,y)=>{


return(
    <p key={y}>
        {chic.email} | {chic.name.title}:{chic.name.first}
    </p>
)
    })}
  </>
)
}

export default Reactive

/**
 * en este modulo de tipo react podemos crear el backend de la 
 * web ya que no estaria siendo cargado ni renderizado jajaja
 * por el mismo problema de react el cual crea app que no pueden 
 * ser leidas por SEO 
 * ===========================================================
 * conectar con firebase arroja error de permisos  que luego seran 
 * eliminados porque env solo pertenece a next
*/