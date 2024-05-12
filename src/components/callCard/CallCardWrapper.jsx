import { useLoaderData } from "react-router-dom";
import CallCard from "./CallCard";

export default function CallCardWrapper() {

    const userData = useLoaderData()
    console.log(userData);

  return (
    // {userData.map((item) => <CallCard key={item.id} item={item} />)}
    <p>hello</p>
    // <CallCard key={userData.id} item={userData} />
  )
}
