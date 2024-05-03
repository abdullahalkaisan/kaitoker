import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase/firebase.config";
import { 
  signInWithPopup, 
  signInWithRedirect, 
  onAuthStateChanged, 
  GoogleAuthProvider 
} from "firebase/auth";
import { Unsubscribe } from "@mui/icons-material";

export const AuthContext = createContext(null);


export default function AuthProvider({children}) {
    

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const GoogleProvider = new GoogleAuthProvider();

    // signInWithRedirect 
    // signInWithPopup 
    // signInWithRedirect(auth, GoogleProvider)
    // .then((result)=> console.log(result))
    // .catch((error)=> console.log(error))

    const signIn_google = ()=>{
      setLoading(true)
      return signInWithRedirect(auth, GoogleProvider)
    }

    

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoading(false)
      } )
      return ()=>{
        unSubscribe()
      } 
    },[])

    {console.log("user state", user)}




    const authInfo = {
        user,
        signIn_google,
        loading
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
