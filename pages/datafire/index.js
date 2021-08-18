 
import firebase from "../../firebase/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
let Home = ()=> {


  const [img] = useCollection(
    firebase.firestore().collection("blog-cogigos"),
    {}
  );
  console.log(img)
  
  if (!img) {
    img.docs.map((doc) => console.log(doc.data()));
  }


return (
    <>
    </>
)
    



    }



  export default Home
  