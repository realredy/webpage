// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {fulldata} from '../../aplicJson/index';
export default function handler(req, res) {
  if( req.method === 'GET' ){  
   res.status(200).json(fulldata) }else 
   if(req.method === 'POST') {
  // console.log(req.body)
  let gettingData = {
    id: req.body.id,
    name: req.body.name,
    ocupacion: req.body.ocupacion,
    evaluado: req.body.evaluado
  }; 
       let whath = fulldata.push(gettingData)
       res.status(201).json(whath) 
   }
  
}
