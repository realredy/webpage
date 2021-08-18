let Onlydata = ({mydata})=>{
 // obtenemos la variable creada por el fetch
    return(
            <>
             <p>{mydata.email}</p>
             <p>{mydata.name}</p>
             <hr />
             
            </>
    )
}

/*
getStaticPaths le dice a next que existen varias 
posibilidades de que sean pasado estos parametros 
en una lista que debemon indicar, esto en caso 
de que no enviemmos parametros el puede considerar 
usar uno de estos
*/
export async function getStaticPaths() {


  const allrest = await fetch('https://jsonplaceholder.typicode.com/users')
  const predata = await allrest.json() 
  predata.map(data=>{
    return{
      paths:{
        params:{dataid: data.id }
      }
    } 
  })

    return {
      // paths: [
      //     { params: { dataid : '1'  } },
      //     { params: { dataid : '2'  } },
      //     { params: { dataid : '3'  } },
      //   ],
     /*
     en el pre render el parametro fallback le indica a next
      que si no encuentra uno de estos parametros creados en '
      esta lista retorne una pagina de error, siendo esto un 
      filtro de seguridad en caso de que no querramos que entren 
      datos en caso de no estar registrados unos de estos paramentros
      en la lista 
     */
       paths:[allrest],
      fallback: true
    }
  }

export async function getStaticProps(context) {
    /*
     la convencion dice que debemos llamar a este 
     parametro context pero podemos llamarlo de la 
     manera que querramos!

     Esto posee el props que obtendremos a traves de  
     la url para poder ser inyecta en la peticion de 
     los datos aca debajo
    */
    const data = context.params.dataid; 
    /**
     esta constante estaria generando el siguiente array
    params:{
        dataid: '1'
    }
    por haber encontrado uno de estos parametros
    */
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${data}`)
    const injson = await res.json() 
    return {
      props: {
        mydata: injson,
      },
    }
  } 
export default Onlydata



// https://blog.jarrodwatts.com/the-ultimate-guide-to-firebase-with-nextjs