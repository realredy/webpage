import {fulldata} from '../../../aplicJson/index';
let Handler = (req, res) => {
  
 const typeoff = req.query;

 switch (typeoff.type) {
     case 'sliders':
        var stringType = fulldata.sliders.filter((arri)=> arri.type === typeoff.type  )
        stringType.length > 0 ?  res.status(200).json(stringType) :    res.status(400).json({error:'Not Found!'}) 
         break;
    case 'experiencias':
        var stringType = fulldata.experiencias.filter((arri)=> arri.nombre === typeoff.type  )
        stringType.length > 0 ?  res.status(200).json(stringType) :    res.status(400).json({error:'Not Found!'}) 
         
    break;
     default:
        res.status(400).json({error:'Not Found!'})
         break;
 }
   
}

export default Handler