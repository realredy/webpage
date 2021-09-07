import firebase from 'firebase/app'; 
import {db} from '../../firebase/firebase';
import 'firebase/auth'; 
import 'firebase/storage'
import React,{useEffect, useState} from 'react';
import StatusBar from '../../components/Statusbar';
import SetNewArticle from '../../components/articles/setnewarticle';
import Allarticles from '../../components/articles/allarticles';
import Multimedia from '../../components/multimedia/multimedia';
// import Media from '../media/Media'
// import {is_loged} from '../login/loged';
// import './homeadmin.css';  
 
 
const Admin = ({categories}) => { 
const [imagecollection, setImagecollection] = useState([])
const [adminbody, setAdminbody] = useState(<Allarticles />)
    let menu_select = (menutype)=>{  
      switch (menutype.target.id) {
        case 'new':
            setAdminbody( <SetNewArticle categories={categories} conoo={imagecollection}  />);
          break;
          case 'media':
            setAdminbody( <Multimedia />);
           break;
        //   case 'new':
        //     setmenuk(<p>No menu</p>);
        //     break; 
        //     default:
             
        //       break;
      }  
    }


    

    useEffect( async ()=>{
        let collect = []; 
        await   firebase.storage(db).ref("all/").listAll()  
        .then((imagesComming)=>{
            imagesComming.items.map( (filterImages)=>{ 
                filterImages.getDownloadURL().then((imageResult)=>{ 
                             collect.push(imageResult)
                })   
            }) 
        }) 
        setImagecollection(collect)
    },[])




    return (
    <>
    <StatusBar />
    <main className="BackendBody">
        <div className="spacer"></div>
        <div className="BackendBody__wrapper">
        <section className="BackendBody__wrapper-leftcontroller">
            <div>
            <ul>
            {/* <li id="all" onClick={menu_select} className="Backend__hassChild"> */}
                Articulos
                <ul>
                    {/* <li id="new" onClick={menu_select} >anadir nuevo</li> */}
                    <li id="new" onClick={menu_select}>Nuevo Articulo</li>
                    <li>nueva categoria</li>
                    </ul>
                {/* </li> */}
                {/* <li id="media" onClick={menu_select} >Multimedia</li> */}
             <li id="media" onClick={menu_select}>Multimedia</li>
            <li>Maquetacion</li>
            <li>JavaScript</li>
            <li>PhP&MySQL</li>
            <li>Mobile app</li>
            </ul>
        </div>
        </section>
        <section className="BackendBody__wrapper-body">
            <div className="BackendBody__wrapper-inner">
                {adminbody}
            </div>  
            </section>
        </div>
    </main>
    </>
   ) 
  }


  

export async function getStaticProps() {  
     // ===== CALL ALL CATEGORY ======= //
     let categorias = await firebase.firestore(db)
     .collection('categoria').doc('todas').get(); 
      let getCategorias = JSON.stringify(categorias.data()); 
       
      return {
        props: {
          categories: getCategorias
        },
      }
   }



export default Admin;