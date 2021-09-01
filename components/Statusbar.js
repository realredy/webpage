import React, { useState, useEffect }  from 'react' 
import firebase from 'firebase/app';
import {db} from '../firebase/firebase';
 
 
     function nata (){
        firebase.auth(db).signOut().then(() => {
            window.location.href="/backend";
          }).catch((error) => {
            // An error happened.
          });
     }  


const StatusBar = () => {
     
    const [Logued, setLogued] = useState();
     
    useEffect(()=>{ 
        firebase.auth(db).onAuthStateChanged( auth => { 
            if( auth !== null){
                setLogued(auth.email)
                } else {
                    console.log('not loged')
                } 
           });
    },[]);


return (
      <>
        <nav className="StatusBar">
            <div className="StatusBar_wrapper">
                <ul>
                    <li className="salir" onClick={nata}>salir</li>
                    <li>{Logued}</li>
                </ul>
            </div>
            
        </nav>
      </>
)
}


export default StatusBar;