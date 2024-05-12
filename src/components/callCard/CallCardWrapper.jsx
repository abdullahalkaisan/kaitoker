import { useLoaderData } from "react-router-dom";
import CallCard from "./CallCard";

export default function CallCardWrapper() {

    const userData = useLoaderData()


  return (
        <>
        {userData.map((item, index)=> <CallCard key={index} item={item} />)}
        </>
    // {userData.map((item) => <CallCard key={item.id} item={item} />)}
    // <CallCard key={userData.id} item={userData} />
  )
}
