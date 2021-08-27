import {fulldata} from '../../../aplicJson/index';
let Handler = (req, res) => {
  
 const typeoff = req.query;

 switch (typeoff.type) {
     case 'sliders':
        var stringType = fulldata.sliders.filter((arri)=> arri.type === typeoff.type  )
        stringType.length > 0 ?  res.status(200).json(stringType) :    res.status(400).json({error:'Not Found!'}) 
         break;
    case 'works':
        var stringType = fulldata.works.filter((arri)=> arri.type === typeoff.type  )
        stringType.length > 0 ?  res.status(200).json(stringType) :    res.status(400).json({error:'Not Found!'}) 
         
    break;
     default:
        res.status(400).json({error:'Not Found!'})
         break;
 }
   
}

export default Handler