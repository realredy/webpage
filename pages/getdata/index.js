import Link from 'next/link'
import Head from 'next/head'
let Newdata = ({mydata})=>{

    return(
        <>
        <Head>
        <title>Nuevo titulo desde getdata</title>
        <meta name="description" content="la manera de cambiar el estado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <ul>
        {mydata.map((data, y)=>(
            
              <li key={y}>
              <Link href={`getdata/${data.id}`} passHref>
              <a>
               {data.email}
               </a>
              </Link>
              
              </li>

            
        )
             
         )}
         </ul>

        </>
    )
}

export async function getStaticProps() {
   
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const injson = await res.json()
        // console.log(injson) 
    return {
      props: {
        mydata: injson,
      },
    }
  } 
   
export default Newdata