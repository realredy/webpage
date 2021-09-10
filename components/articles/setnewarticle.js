 import React, { useRef, useState } from 'react';
 import dynamic from "next/dynamic";
 import Image from 'next/image';
 import 'suneditor/dist/css/suneditor.min.css'; 
 import firebase from 'firebase'; 
import {db} from '../../firebase/firebase';
import 'firebase/firestore';
import Panelmultimedia from '../multimedia/panelmultimedia';

 const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
  });

   
 function SetNewArticle({categories, collectionsImages}){
     const [pannelMM, setpannelMM] = useState()
     const [dataForm, setDataForm] = useState()


     const categoriesToJson = JSON.parse(categories)
     const categoiesToArray = Object.values(categoriesToJson) 
        
            
   function handleChange(content){ 
      setDataForm(content)
    }

    let selectIMGforArticle = (e)=>{
        e.preventDefault()
        setpannelMM(<Panelmultimedia allImages={collectionsImages} />)
        if(document.getElementsByClassName('panelmultimedia')[0]){
            let showPannelImages = document.getElementsByClassName('panelmultimedia')[0]
            showPannelImages.style.display = 'initial'
        }     
     }

     let setFormInfo =(event)=> {
        event.preventDefault()
         let selected = ['article_title','article_url','article_keyworld','article_image','article_category']
          let formElemetns = [];
             for (let e = 0; e < selected.length; e++) {
                 if(document.getElementsByName(selected[e])){
                    formElemetns.push(document.getElementsByName(selected[e])[0].value)
                 }
             } 
        formElemetns.push(dataForm)
        formElemetns.push(firebase.firestore.Timestamp.fromDate(new Date()) )
        console.log(formElemetns)
             savedataToFirebase(formElemetns) 
     }
   
//====================================================//
// ---------------- SAVE DATA TO URL --------------- //
//====================================================// 
let savedataToFirebase = async (dataForm) =>{
console.log("🚀 ~ file: setnewarticle.js ~ line 56 ~ savedataToFirebase ~ dataForm", dataForm)
    
    let spinner = document.querySelector('.SetNewArticle__body-wrapper-form-SendResset span');
    let form = document.querySelector('.SetNewArticle__body-wrapper-form');
    let preview = document.getElementsByClassName('SetNewArticle__body-wrapper-form-aside-selectIMG-preview')[0]
    
     
    spinner.style.opacity = 1;
        //------------------------------------- 
        let fullfilldata = {
            title:dataForm[0],
      friendlyUrl:dataForm[1],
         category:dataForm[4],
         keyworld:dataForm[2],
            image:dataForm[3].split('|')[0],
         imageAlt:dataForm[3].split('|')[1],
             html:dataForm[5],
             date:dataForm[6]
        }
         
           try{   
             const db = firebase.firestore(db);
             let create_article = db.collection('articles').doc(); 
             const env = await create_article.set(fullfilldata,{merge:true}).then((e)=>{
                spinner.style.opacity = 0;
                form.reset();
                preview.style.backgroundImage = 'unset';
             }) 
         
         } catch (error){
             console.log("Resultados de un error al guardar: ",error) 
         } 
       
        //------------------------------------
}
 
  // documentacion sun editor::https://github.com/mkhstar/suneditor-react
  // article_title article_url article_keyworld article_image article_category falta___body
    return(
        <> 
        {pannelMM}
        <div className="SetNewArticle">
            <div className="SetNewArticle__wrapper-title">
             <span>Create new article</span>
            </div>
            <div className="SetNewArticle__body">
                <div className="SetNewArticle__body-wrapper">
                    <form onSubmit={setFormInfo} className="SetNewArticle__body-wrapper-form">
                        <div className="SetNewArticle__body-wrapper-form-main">
                             <label htmlFor="label-title">insert title for this article</label>
                             <input type="text" name="article_title" id="label-title" />
                             <label htmlFor="label-url">Insert fryendly url</label>
                             <input type="text" name="article_url" id="label-url" />
                            {/* for change textarea */} 
                            
                             
                            <SunEditor onChange={handleChange} setOptions={{
                                 height:200,
                                 buttonList: [['undo', 'redo'],['formatBlock'],
                                 ['font','fontSize', 'align','list','bold', 'underline','hiliteColor','fontColor'], 
                                 ['table', 'link','image']]
                            }}/>
                            
                            <div className="SetNewArticle__body-wrapper-form-keyworl">

                            </div>
                            <input type="text" name="article_keyworld" id="" 
                            placeholder="insert keyworld like keyworld-keyworld2-keyworld3" />
                            <div className="SetNewArticle__body-wrapper-form-SendResset">
                              <input type="reset" value="Reset" />  <input type="submit" value="Save data to firebase" />  
                              <span><Image src="/spiner.svg" height={50} width={50} alt="ricard lavour web master spinner" /></span>
                            </div>
                            
                        </div>
                        <div className="SetNewArticle__body-wrapper-form-aside">
                            <div className="SetNewArticle__body-wrapper-form-aside-selectIMG">
                                <span>Select image</span>
                                <div className="SetNewArticle__body-wrapper-form-aside-selectIMG-preview">

                                </div> 
                                <input type="hidden" name="article_image" id="imageForArticle" />
                                <button onClick={selectIMGforArticle} id="selector-img-artc">Select image article</button>
                            </div>
                            <div className="SetNewArticle__body-wrapper-form-aside-selectCategory">
                                <span>Select Category</span>
                                <select name="article_category" id="category_select">
                                <option value="">-----------------</option>
                                    { 
                                      categoiesToArray.map( (options,i)=>{
                                       return( <option key={i} value={options}>{options}</option>)   
                                     })
                                    }
                                </select>
                                 <div className="SetNewArticle__body-wrapper-form-aside-addNewCategory">
                                     <input type="text" id="newCategory" placeholder="add new category" />
                                     <button id="newCategory-btn">Add new category</button>
                                 </div> 
                            </div>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
        
        </>
    )
}

export default SetNewArticle