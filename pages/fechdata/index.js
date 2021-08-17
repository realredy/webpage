let Fech =({mydata})=>{

    return(
        <div id="feching">
            Hits a data!
            {mydata.map((datos,k)=>(
              <p key={k}>{datos.address.city}</p>
            ))}
        </div>
    )

}


export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const injson = await res.json()
        console.log(injson)
    return {
      props: {
        mydata: injson,
      },
    }
  }
  
  export default Fech