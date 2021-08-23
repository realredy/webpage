import {useState, useEffect} from 'react'

let Innerdata = () => {
 const [innerrest, setInnerrest] = useState([]);
 
 let enviar_datos = async (e)=> {
    e.preventDefault();  
    let fillvalues = {
        id: Math.random(),
        name: e.target[0].value,
        ocupacion: e.target[1].value,
        evaluado: e.target[2].value,
    };
     
       const senddata = await fetch('/api/datafechapi',{
           headers:{
               'Content-Type':'Application/json'
           },
           method: 'POST',
           body: JSON.stringify( fillvalues )
       }); 
       const issaved = await senddata.json();

     
     console.log('issaved ::: ',issaved)

 }


 useEffect(  async () => {
     let predata = await fetch('/api/datafechapi'); 
     let preapi = await predata.json(); 
     setInnerrest(preapi)
 }, [])
    return (
         <>
         {
             innerrest.map((data, r)=>{ 
                 return (
                     <div  style={{ border: 'dashed 1px red' }} key={r}>
                        {data.direccion ? <h3>{data.direccion.telefono} | {data.direccion.calle}</h3> : ''}
                         <p>{data.name}</p>
                         <pre>{data.ocupacion}</pre>
                         </div>
                 )
             })
         }

         <form onSubmit={enviar_datos} id='enviar_datos' noValidate>
             <input type='text' placeholder='nombre' />
             <input ttpe='text' placeholder='ocupacion' />
             <input type='hidden' value='false' placeholder='evaluado' />
             <input type='submit' value='enviar' />
             </form>
         </>
    )
}
export default Innerdata