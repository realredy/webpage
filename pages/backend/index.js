 import Image from 'next/image';
import firebase from 'firebase/app'; 
import {db} from '../../firebase/firebase';
import 'firebase/auth'; 
  
 
async  function formMakeLoguin(e){ 

  
  
  let msgBody = document.getElementsByClassName('loguinForm__wrrapper-error-mensaje')[0];
  let errMsg = document.getElementById('loguinForm__errorMessage');
          e.preventDefault();
      let mail = e.target.mail.value;
      let pass = e.target.pass.value;
await   firebase.auth(db).setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(   ()=>{
        return   firebase.auth(db).signInWithEmailAndPassword(mail, pass)
      .then(user=>{ 
           if( user ){ 
           window.location.href= `/backend/admin`;
        }
      })
  }).catch(err=>{
      console.log( err.message )
      msgBody.style.display="inherit";
          errMsg.innerHTML = err.message;
          setTimeout(()=>{
          msgBody.style.display="none";
      }, 7000 ) 
      })

// let aut = await firebase.auth(db).setPersistence(firebase.auth.Auth.Persistence.SESSION);
// let setAut = await aut.firebase.auth(db).signInWithEmailAndPassword(mail, pass);
// console.log('aut::::',setAut)
 }




function Login() { 
      
      const backSt = { backgroundImage: `url('/base_login.jpg')`};
    return (
        <div id="loguinForm" style={backSt} >
                <div className="loguinForm__BoxWrapper">
                <a href="/"><Image src='/logo.png' alt="error Mensaje"  width={90} height={80}/></a>
                  <div className="loguinForm__wrapper"> 
                    <span className="loguinForm__title">
                      Coloque su email y password 
                    </span>
                  <form onSubmit={formMakeLoguin}>
                    <input id="nombre" type="email" name="mail" placeholder="Nombre" />
                    <input id="pass" type="password" name="pass" placeholder="**********" /> 
                    <input type="submit" value="Loguin" />
                    <div className="loguinForm__wrrapper-error-mensaje"> 
                     <span id="loguinForm__errorMessage"></span>
                    </div>
                  </form>
            </div>
          </div>
        </div>
    )
 }

export default Login;
