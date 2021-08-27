import Image from 'next/image'; 
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';



// // window.onload = function(){
   
// document.addEventListener('click', (e)=>{
     
//     if(e.target.classList[0] === 'SelectedTipePortfolios'){
//         let allClear = document.getElementsByClassName('SelectedTipePortfolios');
//         // allClear.classList.remove('default');
//         // e.target.classList.add('default');
//         //  console.log(allClear);
//          for (let index = 0; index < allClear.length; index++) {
//              const element = allClear[index].classList[1];
//              let botones = document.querySelector('.'+ element);
//             if(botones){
//                 botones.classList.remove('SelectedPortfolio');
//             }
//          }
//             // let objeto = document.getElementsByClassName(allClear.classList)[0];
//                e.target.classList.add('SelectedPortfolio');
        
//     }
    
// });
// // }

function Portfolios({dataw}) {
   


 

    return (
        <>
            <section id="works" className="boxed">
              <nav id="workSelector">
                  <ul>
                      <li><a onClick={(e)=>{e.preventDefault()}} className="SelectedTipePortfolios SelectedPortfolio">web</a> </li>
                      <li><a onClick={(e)=>{e.preventDefault()}} className="SelectedTipePortfolios">Logotipos</a> </li>
                      <li><a onClick={(e)=>{e.preventDefault()}} className="SelectedTipePortfolios">Print</a> </li>
                      </ul>
                   </nav>
                   <div className="boxShow">
                   <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={175}
        totalSlides={5}
        infinite={true}
        isIntrinsicHeight={true}
      >
            <Slider>
                {dataw.map((works)=>{



            // let video = works.img === '/mobileApp.mp4' ? <video controls="" width="200"><source src="./media/mobileApp.mp4" type="video/mp4">Your browser does not support HTML video.</video>:    
                


                    return(
                        <Slide key={works.id} index={works.id}>
                          <div className="wrapperWeb">
                              <div className="wrapperImage">  

                             { works.img !== '/mobileApp.mp4' ? 
                              <Image src={works.img} alt={works.alt} width={550} height={400} /> : 
                                <div className="wrapper_videowork"> <video controls="true"  width="210px">
                                  <source src={works.img} type="video/mp4" />
                                  Your browser does not support HTML video.</video></div> }  
                           
                           </div>

                           <section id="innerTextWeb">
                           <ul>
                           <li><b>Base: </b>{works.base}</li> 
                           <li><b>Integraciones: </b>{works.integ}</li>
                           </ul>
                           <div className="wrapperTextWorks">
                               <p>
                                   {works.desc}
                               </p>
                           </div>
                           
                           </section>
                          </div>
                        </Slide>
                    )
                })
              }
            </Slider>
            <div className="wrapperButtonWorks">
            <ButtonBack>Back</ButtonBack>
           <ButtonNext>Next</ButtonNext>
            </div>
             
     </CarouselProvider> 
                   </div>
            </section> 
        </>
    )
}

export default Portfolios;

