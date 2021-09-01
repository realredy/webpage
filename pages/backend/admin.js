import firebase from 'firebase/app'; 
import {db} from '../../firebase/firebase';
import 'firebase/auth'; 
import React,{useEffect, useState} from 'react';
import StatusBar from '../../components/Statusbar';
// import All from '../allArticles/All';
// import Media from '../media/Media'
// import {is_loged} from '../login/loged';
// import './homeadmin.css';  
 
 
const Admin = () => { 

// const [menuk, setmenuk] = useState(<All />)
//     let menu_select = (menutype)=>{  
//       switch (menutype.target.id) {
//         case 'all':
//           setmenuk( <All />);
//           break;
//           case 'media':
//           setmenuk( <Media />);
//           break;
//           case 'new':
//             setmenuk(<p>No menu</p>);
//             break; 
//             default:
             
//               break;
//       }  
//     }
  useEffect(()=>{ 
    // firebase.auth(db).onAuthStateChanged( auth => { 
    //     if( auth === null){ 
    //         window.location.href="/backend";
    //       }  
    //    });
  },[]);




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
                    <li>nueva categoria</li>
                    </ul>
                {/* </li> */}
                {/* <li id="media" onClick={menu_select} >Multimedia</li> */}
            <li>Maquetacion</li>
            <li>JavaScript</li>
            <li>PhP&MySQL</li>
            <li>Mobile app</li>
            </ul>
        </div>
        </section>
        <section className="BackendBody__wrapper-body">
            <div className="BackendBody__wrapper-inner">
                {/* {menuk} */}
            </div>  
            </section>
        </div>
    </main>
    </>
   ) 
  }


export default Admin;