import Image from 'next/image' 
import Link from 'next/link'

let active_menu = ()=>{

}

let Header = () =>{
    return (
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
                       <Link href="/getdata">
                         <li>
                         <a>
                               Getdata
                        </a>
                        </li>
                   </Link>
                 

                   <Link href="/fechdata">
                         <li>
                         <a>
                               fechdata
                        </a>
                        </li>
                   </Link>

                   <Link href="/datafire">
                         <li>
                         <a>
                            datafire
                        </a>
                        </li>
                   </Link>
                         </ul>
                         <div onClick={active_menu} className="burger-wrapper">
                             <li className="burger-wrapper__line-top"></li>
                             <li className="burger-wrapper__line-center"></li>
                             <li className="burger-wrapper__line-bottom"></li>
                         </div>
                    
                  </div>
            </div>  
             
      </header>        
    )
}
export default Header