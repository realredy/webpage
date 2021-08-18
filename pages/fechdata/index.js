import Grid from '../components/grid'
// @22 antes de usar un modulo se debe llamar
let Fech =({mydata})=>{

    return(
        <div id="feching">
            Hits a data!
            {mydata.map((datos,k)=>(
                <div key={k}>
                  <Grid props={datos} />
                  {/* 
                  @22 al usar grid este no se convierte en un
                  link ya que este no tiene un index para entrar 
                  por lo que tiene un objetivo, ser el modulo que 
                  se encargara de pintar los datos, creando con esto 
                  un concepto modular de la app
                  */}
               </div>
            ))}
        </div>
    ) 
}

/*
Por defecto next crea estaticamente la web esto quiere decir que cuando entramos a esta 
pagina llamara al api rest para llamar los datos y estos seran cargados en el servidor
luego antes de pintar la pagina estos estaran previamente cargados por lo tanto 
no se vera el fecto de carga de datos en la web y por lo tanto todos los datos del html
estaran disponibles para que google o motores de busqueda puedan visualizar la web y 
renderizar su contenido
*/
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/')
    const injson = await res.json()
        // console.log(injson)
        /*
        esto se renderiza del lado del servidor por lo que 
        el ersultado se vera en la pantalla en donde se eje
        cuta {npm dev} y no en la consola del navegador
        */
    return {
      props: {
        mydata: injson,
      },
    }
  }
  /*
  Al llamar un getstaticprops lo hacemos al final y 
  y antes de exportar el modulo para que este dentro 
  como un recurso del modulo
  */
  export default Fech