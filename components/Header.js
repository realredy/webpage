import Image from 'next/image' 
import Link from 'next/link'
import Head from 'next/head' 


  

 let blockScroll = ()=>{
    window.onscroll = ()=>{
         var y = window.scrollY 
    } 
 }



 
let Header = () =>{
    return (
        <>
        <Head>
        <title>Ricardo Lavour, My Full Stack Developer site</title>
        <meta name="description" content="A place for set my portfolios, works, and write about technology topics" />
        <meta name="keywords" content="web developer, web master, dominicano, full stack developer, wordpress developer"/>
        <meta name="author" content="Ricardo Perez Lavour" />
        <meta name="robots" content="index"/>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
         <meta property="og:title" content="Ricardo E. Lavour" />
         <meta property="og:description" content="A place for put my portfolios, works, and write about technology topics" />
         <meta property="og:url" content="https://lavour.es" /> 
         <meta property="og:image" content="./logo.png" />

         <meta name="twitter:card" content="sumary" />
         <meta name="twitter:title" content="Ricardo E. Lavour" />
         <meta name="twitter:description" content="A place for put my portfolios, works, and write about technology topics" />
         <meta name="twitter:image" content="./logo.png" />
         <meta name="twitter:url" content="https://lavour.es" />
      </Head>
        <header className="header">
             <div className="header__wrapper"> 
                 <div className="header__wrapper-logo">
                 <Link href="/"><a>
                 <Image className="header__img" src="/logo.png" alt="ricardo lavour" width="60" height="60" />
                  </a>
                   </Link>
                 </div>
                 
                  <div className="header__wrapper-right-menu">  
                       <ul> 
                   <Link href="/blog" passHref>
                         <li>
                         <a>
                            blog
                        </a>
                        </li>
                   </Link>
                   <Link href="/backend" passHref>
                         <li>
                         <a>
                         backend
                        </a>
                        </li>
                   </Link>
                         </ul>
                         <div className="burger-wrapper">
                            <span onMouseEnter={blockScroll} className="triguer_mn"></span>
                             <li className="burger-wrapper__line-top"></li>
                             <li className="burger-wrapper__line-center"></li>
                             <li className="burger-wrapper__line-bottom"></li>

                             <section className="header__bigpanel">
              <div className="bigpanel_wrapper">
                  <ul className="bigpanel_wrapper__menuLeft">
                      <li><a>Javascript</a></li>
                      <li><a>Base de datos</a></li>
                      <li><a>php</a></li>
                      <li><a>Maquetaci??n</a></li>
                      <li><a>Gitlab</a></li>
                      <li><a>WebPack</a></li>
                  </ul>
                  <ul className="bigpanel_wrapper__menuRight">
                      <li><a>Dise??o Gr??fico</a></li>
                      <li><a>Producci??n</a></li>
                      <li><a>Diagramaci??n</a></li> 
                  </ul>
              </div>
            </section>
            
                         </div>
                    
                  </div>
            </div>   
      </header>   
           </>
    )
}
export default Header