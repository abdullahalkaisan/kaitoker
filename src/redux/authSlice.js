import { createSlice } from "@reduxjs/toolkit";


import { 
    signInWithPopup, 
    // signInWithRedirect, 
    onAuthStateChanged, 
    GoogleAuthProvider, 
    signOut,
    // getRedirectResult
  } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";






    const authProvider = ()=>{
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true);

      useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
          setUser(currentUser)
          setLoading(false)
        } )
        return ()=>{
          unSubscribe()
        } 
      },[])


    }



  
      const GoogleProvider = new GoogleAuthProvider();
      
      
    const signIn_google = ()=>{
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
      }


    const signOut_google = ()=>{
      setLoading(true)
      return signOut(auth)
    }



  

      const authInfo = {
        user,
        loading,
        signIn_google,
        signOut_google,
        // signIn_google_redirectResult
    }


export const authSlice = createSlice({
    name:"auth",
    initialState: authInfo,
    reducers:{
        update:(state, action)=>{

        }
    }
});





