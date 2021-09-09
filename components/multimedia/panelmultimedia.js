 import Image from 'next/image'
 let setImageToForm = (e)=>{
  // console.log(e.target.attributes[0].value)
   if(document.getElementById('imageForArticle')){
     let imageInput = document.getElementById('imageForArticle');
     let backgroundPic = document.getElementsByClassName('SetNewArticle__body-wrapper-form-aside-selectIMG-preview')[0] 
     backgroundPic.style.backgroundImage = 'url('+e.target.currentSrc+')';
     imageInput.value = `${e.target.currentSrc}|${e.target.attributes[0].value}`
     imageInput.value ? document.getElementsByClassName('panelmultimedia')[0].style.display = 'none': alert('no added') 
   } 
 }

 let simpleClossePannel = (e)=>{
  document.getElementsByClassName('panelmultimedia')[0].style.display = 'none' 
}

let Panelmultimedia = ({allImages}) => {
        let arrayOfImages = [];
          for (let itemsImages = 0; itemsImages < allImages.image.length; itemsImages++) {
            arrayOfImages.push(`${allImages.image[itemsImages]}|${allImages.alt[itemsImages]}`) 
           } 
        return(
            <> 
           <div className="panelmultimedia">
               <div className="panelmultimedia__wrapper">
                 <button onClick={simpleClossePannel} className="panelmultimedia__wrapper-btn">
                   cerrar
                 </button>
                 <ul> 
           { 
            arrayOfImages.map((images, e)=>{  
                let imagesSplit = images.split('|');
              return (
                <li  key={e}>
                <Image onClick={setImageToForm} src={imagesSplit[0]} alt={imagesSplit[1]} width={300} height={180} />
                </li>
                ) 
                      }) //images
                  } 
            </ul>
            </div>
            </div>

            </>
        )
    
     
 
    
}

// ===== CALL ALL IMAGES ======= //
 
  
export default Panelmultimedia;