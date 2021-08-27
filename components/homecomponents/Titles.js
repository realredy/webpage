function Titles(props) {
      const st = props.posicion === "right" ? {right: 0} : {left: 0};
        
    return (
        <> 
        <div className="redLine">
          <h2 className="redLine__texto" style={st}>{props.texto}</h2>
        </div>
        </>
    )
}

export default Titles