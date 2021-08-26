import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';

let Sliderarticles = ({sliders})=>{
 
 return(
<CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={175}
        totalSlides={7}
        infinite={true}
        isIntrinsicHeight={true}
      > 
      <Slider>
       {
          sliders.map((output)=>{ 
            return(
             <Slide index={output.id}>
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
       <DotGroup />
     </CarouselProvider>
)
}

export default Sliderarticles
