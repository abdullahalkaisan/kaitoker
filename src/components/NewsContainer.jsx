import { Box } from "@mui/material";
import PostCard from "../pages/ProfilePage/TabMenuProfile/PostCard";
import PostInput from "../pages/ProfilePage/TabMenuProfile/PostInput";
import PostContext from "../PostContext";
import { useState } from "react";


export default function NewsContainer() {

  const [userPosts, setUserPosts] = useState([
    { id: 1, content: "Hello" },
    { id: 2, content: "What's up?" },
    { id: 3, content: "Hello" },
    { id: 4, content: "What's up?" },
    { id: 5, content: "Hello" },
    { id: 6, content: "What's up?" },
    { id: 7, content: "Hello" },
    { id: 8, content: "What's up?" },
  ])


  return (
    <PostContext.Provider value={{userPosts, setUserPosts}}>
            <Box width={"90%"}><PostInput /></Box>
            <Box sx={{
                display:"flex",
                width:"100%", 

                // flexWrap:"wrap-reverse",
                // justifyContent:"center"

                alignItems:"center", 
                flexDirection:"column-reverse"
                }}>
              {userPosts.map((item) => <PostCard key={item.key} item={item} />)}
            </Box>
          
    </PostContext.Provider>

  )
}
