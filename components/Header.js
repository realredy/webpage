import Image from 'next/image' 
import Link from 'next/link'
let active_menu = ()=>{

}

let Header = () =>{
    return (
        <header className="header">
             <div className="header__wrapper">
                 <p>Hola Mundo!</p>
                 <div className="header__wrapper-logo">
                 <Link href="/"><a>
                 <Image className="header__img" src="/lavour_logo.png" alt="ricardo lavour" width="120" height="40" />
                  </a>
                   </Link>
                 </div>
                 
                  <div className="header__right-menu"> 
                    <ul className="header__ul">
                    <li><Link href="/getdata">
                    <a>getdata</a>
                    </Link></li>
                    <li>uno</li>
                    <li>uno</li>
                    <li>uno</li>
                    </ul>
                    <span className="header__burger-menu">
                         <div onClick={active_menu} className="header__burger-wrapper">
                             <li className="header__burger-line-top"></li>
                             <li className="header__burger-line-center"></li>
                             <li className="header__burger-line-bottom"></li>
                         </div>
                    </span>
                  </div>
            </div>  
             
      </header>        
    )
}
export default Header