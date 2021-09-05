 import React, { useRef } from 'react';
 import dynamic from "next/dynamic";
 import 'suneditor/dist/css/suneditor.min.css'; 

 const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
  });
export default function SetNewArticle(){


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
                                 buttonList: [['undo', 'redo'],['font','fontSize', 'align','list'], 
                                              ['image'],['bold', 'underline','hiliteColor','fontColor'],
                                            ['table', 'link','formatBlock']]
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
                                <input className="SetNewArticle__body-wrapper-form-aside-selectIMG-preview-input" type="file" name="imageForNewArticle" id="" />
                                <button id="selector-img-artc">Select image article</button>
                            </div>
                            <div className="SetNewArticle__body-wrapper-form-aside-selectCategory">
                                <span>Select Category</span>
                                <select name="" id="category_select">
                                <option value="">-----------------</option>
                                    <option value="">34 sdf sdf dsf df</option>
                                    <option value="">34 sdf sdf dsf df</option>
                                    <option value="">34 sdf sdf dsf df</option>
                                    <option value="">34 sdf sdf dsf df</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
        
        </>
    )
}