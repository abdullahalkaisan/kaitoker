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
            <Box width={"100%"}><PostInput /></Box>
            <Box sx={{
                display:"flex",
                width:"100%", 

                // flexWrap:"wrap-reverse",
                // justifyContent:"center"

                alignItems:"flex-start", 
                flexDirection:"column-reverse",
                px:6
                }}>
              {userPosts.map((item) => <PostCard key={item.key} item={item} />)}
            </Box>
          
    </PostContext.Provider>

  )
}







// analytics 

// top country user 
// top followers 
// Total User regestered 
// User active now. 
// Total Pro user now.

// top talk count  
// top profile viewed 
// top withdraw
// top fan based 

