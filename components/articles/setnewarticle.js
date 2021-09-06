 import React, { useRef } from 'react';
 import dynamic from "next/dynamic";
 import 'suneditor/dist/css/suneditor.min.css'; 
 import firebase from 'firebase'; 
import {db} from '../../firebase/firebase';
import 'firebase/firestore';

 const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
  });
 function SetNewArticle({categories}){
     const categoriesToJson = JSON.parse(categories)
     const categoiesToArray = Object.values(categoriesToJson) 
        
            
   function handleChange(content){
        console.log('Sun editor::::;',content); //Get Content Inside Editor
    }
 
  // documentacion sun editor::https://github.com/mkhstar/suneditor-react
    return(
        <>
        <div className="SetNewArticle">
            <div className="SetNewArticle__wrapper-title">
             <span>Create new article</span>
            </div>
            <div className="SetNewArticle__body">
                <div className="SetNewArticle__body-wrapper">
                    <form className="SetNewArticle__body-wrapper-form">
                        <div className="SetNewArticle__body-wrapper-form-main">
                             <label htmlFor="label-title">insert title for this article</label>
                             <input type="text" name="title" id="label-title" />
                             <label htmlFor="label-url">Insert fryendly url</label>
                             <input type="text" name="url" id="label-url" />
                            {/* for change textarea */} 
                            
                             
                            <SunEditor onChange={handleChange} setOptions={{
                                 height:200,
                                 buttonList: [['undo', 'redo'],['formatBlock'],
                                 ['font','fontSize', 'align','list','bold', 'underline','hiliteColor','fontColor'], 
                                 ['table', 'link','image']]
                            }}/>
                            
                            <div className="SetNewArticle__body-wrapper-form-keyworl">

                            </div>
                            <input type="text" name="keyworld" id="" 
                            placeholder="insert keyworld like keyworld-keyworld2-keyworld3" />
                            <div className="SetNewArticle__body-wrapper-form-SendResset">
                              <input type="reset" value="Reset" />  <input type="submit" value="Save data to firebase" />  
                            </div>
                            
                        </div>
                        <div className="SetNewArticle__body-wrapper-form-aside">
                            <div className="SetNewArticle__body-wrapper-form-aside-selectIMG">
                                <span>Select image</span>
                                <div className="SetNewArticle__body-wrapper-form-aside-selectIMG-preview">

                                </div> 
                                <button id="selector-img-artc">Select image article</button>
                            </div>
                            <div className="SetNewArticle__body-wrapper-form-aside-selectCategory">
                                <span>Select Category</span>
                                <select name="" id="category_select">
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