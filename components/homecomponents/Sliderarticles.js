import { CarouselProvider, 
         Slider, 
         Slide,   
         ButtonBack,
         ButtonNext } from 'pure-react-carousel';

let Sliderarticles = ({data})=>{
  
 return(
   <div className="slid">
   <section className="slid__Wrapper">
     <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={155}
        totalSlides={7}
        infinite={true}
        isIntrinsicHeight={true}
      > 
      <Slider>
       {
          data.map((output)=>{ 
            return(
             <Slide key={output.id} index={output.id}>
              <div className="wrapperSld">
                <h2>{output.title}</h2>
                <span>{output.subtitle}</span>
                <p>{output.text}</p>
              </div>
          </Slide> 
                )
        })
       }
          
       </Slider>
       <div className="wrapper_brn_sld">
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        </div>
     </CarouselProvider>
     </section>
     </div>
)
}

export default Sliderarticles 