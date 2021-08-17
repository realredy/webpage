function Grid({props}){
return(
    <>
    <span>{props.address.city}</span>
      <pre>{props.email}</pre>
    </>
)
}
export default Grid

/*
este componente functiona como un modulo que es 
llamado con la unica intendcion de pintar los 
elementos por lo tanto recibe como nombre pro
ps un objeto que esta siendo mapeado por su 
elemento padre
*/