import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase/firebase.config";
import { 
  // signInWithPopup, 
  signInWithRedirect, 
  onAuthStateChanged, 
  GoogleAuthProvider, 
  signOut
} from "firebase/auth";


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

    const signOut_google = ()=>{
      setLoading(true)
      return signOut(auth)
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
        loading,
        signIn_google,
        signOut_google
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
