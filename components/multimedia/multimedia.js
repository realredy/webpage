import firebase from 'firebase/app'; 
import {db} from '../../firebase/firebase';
import 'firebase/storage'; 
import React,{useEffect, useState} from 'react';
import Image from 'next/image';
//====================================================//
// ---------------🕯 pre visualiuzador 🕯--------------- //
//====================================================// 
var preloader;
let preview_image = (e) =>{ 
    console.log(e)
const image = e.target.files[0];
const IMG_reader = new FileReader(); 
IMG_reader.onload = function(){
const metadata_img = IMG_reader.result;
const output = document.getElementsByClassName('multimedia__wrapper--right-wrapper-preloader')[0];
preloader = output
output.src =  metadata_img;  
};
IMG_reader.readAsDataURL(image);
return e; 
}
//====================================================//
// ---------------🕯 pre visualiuzador 🕯--------------- //
//====================================================// 



//====================================================//
// ---------- - UPLOAD 🦁to⬆ FIREBASE --------------- //
//====================================================// 
let save_image = (e) => {  
    const form = document.getElementsByClassName('multimedia__wrapper--left-form')[0]
    const loading_bar = document.getElementsByClassName('multimedia__wrapper--left-preloader-bar')[0]
    const uploadBTN = document.getElementById('uploadBTN') 
    e.preventDefault();
    const image = e.target[1].files[0];
    const image_type = e.target[1].files[0].type;
    const image_name = e.target[1].files[0].name.split('.')[0]; // for get name and not name.jpg
    const title = e.target[0].value;  
    let extDividida = image_type.split('/')[1]; 
    const dbs = firebase.storage(db);
    const storag =  dbs.ref('all/'+ image_name+'.'+extDividida);
    const metadata = {
        customMetadata: {
          'alt': title
        }
      }
      
    const subio = storag.put(image, metadata);
 subio.on('state_changed', function(snapshot){ 
        // ==== console.log(snapshot) === //
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploadBTN.disabled = true; 
        uploadBTN.value = 'Uploading..'
        loading_bar.style.width = progress + '%';
        console.log(progress) 
        }, function(error){
            console.log("Error al subir imagen",error);
        }, function(){
        dbs.ref('all/').child(image_name+'.'+extDividida).getDownloadURL()
        .then( ur=>{ 
            uploadBTN.disabled = false; 
        uploadBTN.value = 'upload image'
        loading_bar.style.width = 0;
        preloader.src = '';
        form.reset()
        console.log(ur) 
        })
    })
}
//====================================================//
// ---------------- UPLOAD to FIREBASE --------------- //
//====================================================// 

let Multimedia = () => {

    return (
    <>
    <div className="multimedia">
        <div className="multimedia__wrapper">
            <div className="multimedia__wrapper--left">
                <span>Upload multimedia</span>
                <form onSubmit={save_image} className="multimedia__wrapper--left-form">
                    <label htmlFor="mult_alt">Write alt to image</label>
                    <input type="text" name="alt" id="mult_alt" />
                    <label htmlFor="image_upload">Select Image 800 X 325</label>
                    <input onChange={preview_image} type="file" name="image" id="image_upload" />
                    <input id="uploadBTN" type="submit" value="upload image" />
                </form>
                <div className="multimedia__wrapper--left-preloader">
                    <div className="multimedia__wrapper--left-preloader-bar"></div>
                </div>
            </div>
            <div className="multimedia__wrapper--right">
                <div className="multimedia__wrapper--right-wrapper">
                    <img src="/defaultArticle.jpg"  className="multimedia__wrapper--right-wrapper-preloader" alt='ricardo lavour web master' width={300} height={180} />

                     
                    <span>Image preview</span>
                </div>
            </div>
        </div>
    </div>
    </>
   )
}
export default Multimedia