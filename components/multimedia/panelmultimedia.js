import React,{useEffect,useState} from 'react';
import firebase from 'firebase/app'; 
import {db} from '../../firebase/firebase'; 
import 'firebase/storage'

let Panelmultimedia = ({allImages}) => {
   

      
        return(
            <> 

           { 
            allImages.map((images, e)=>{  
                      return (
                        <img key={e} src={images} />
                      ) 
                })
             
            } 


            </>
        )
    
     
 
    
}

// ===== CALL ALL IMAGES ======= //
 
  
export default Panelmultimedia;