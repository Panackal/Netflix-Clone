
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth,
   signInWithEmailAndPassword, 
   signOut} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyDV7L8EYzPAAvi9gd5MqbefjjGtzjiJKBw",
  authDomain: "netflix-clone-9ca7e.firebaseapp.com",
  projectId: "netflix-clone-9ca7e",
  storageBucket: "netflix-clone-9ca7e.firebasestorage.app",
  messagingSenderId: "783116151108",
  appId: "1:783116151108:web:6e08b8df23ef6de5b70f11"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name,email,password)=>{
  try{
    const res = await createUserWithEmailAndPassword(auth,email,password);
    const user = res.user;
    await addDoc(collection(db,'user'),{
      uid:user.uid,
      name,
      authProvider:'local',
      email,
    });

  } catch(error){
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
} 

const login= async(email,password)=>{
 try {
  await signInWithEmailAndPassword(auth,email,password);
 } catch (error) {
  console.log(error);
  toast.error(error.code.split('/')[1].split('-').join(" "))
  
 }
}

const logout = ()=>{
  signOut(auth);
}

export {auth,db,login,signup,logout};