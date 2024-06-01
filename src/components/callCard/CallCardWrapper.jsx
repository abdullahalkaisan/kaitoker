import { useLoaderData } from "react-router-dom";
import CallCard from "./CallCard";
import React from 'react'
import {  } from "module";
import CallCardProvider from "../../Providers/CallCardProvider";

export default function CallCardWrapper() {

  const userData = useLoaderData()

  return (
    <>
      {userData.map((item, index) => (
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


