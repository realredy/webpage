import Link from 'next/link'
let Newdata = ({mydata})=>{

    return(
        <>
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