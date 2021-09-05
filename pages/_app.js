import Header from '../components/Header'
import '../styles/globals.scss'
// import '../styles/Header.scss'
 
import { useRouter } from "next/router";



function MyApp({ Component, pageProps }) { 
 
function searchBackend(){ 
 return router.asPath.includes("/backend");  
}
const router = useRouter();
// console.log('router::::', searchBackend()) expected true 
  return (
    <>
      { searchBackend() === true ? null : <Header /> }
     
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
