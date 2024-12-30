import { useLoaderData } from "react-router-dom";
import CallCard from "./CallCard";
import React, { useContext, useEffect, useState } from 'react'
import {  } from "module";
import CallCardProvider from "../../Providers/CallCardProvider";
import { AuthContext } from "../../Providers/AuthProvider";
import { Skeleton, Stack } from "@mui/material";
import CallCard_firebase from "./CallCard_mongo";
import { axiosInstance } from "../../AxiosInstance";
import { motion } from "framer-motion"

export default function CallCardWrapper() {

  // const userData = useLoaderData();





  const {user, loginMongo,isLogining, userData,  isUserDataLoading, loginUserData, user_mongo,mongodb_login,createAccount_mongo, getLoginUserData,  checkUserExist, ischeckUserExist_loading} = useContext(AuthContext);



  // console.log("userData", userData);

  




  return (
    <>
      { userData.map((item, index) => (
        <React.Fragment key={index}>
          <CallCardProvider>


          <CallCard item={item} />
            
          </CallCardProvider>
        </React.Fragment>
      ))
      }
    </>
    // {userData.map((item) => <CallCard key={item.id} item={item} />)}
    // <CallCard key={userData.id} item={userData} />
  )
}


