import { Alert, Box, CircularProgress, LinearProgress, Snackbar } from "@mui/material";
import PostCard from "../pages/ProfilePage/TabMenuProfile/PostCard";
import PostInput from "../pages/ProfilePage/TabMenuProfile/PostInput";
import PostContext from "../PostContext";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";


export default function NewsContainer() {


  const { userPosts, setUserPosts, openSnackbar, setOpenSnackbar, handleCloseSnackbar, snackBarMessage, loading, user} = useContext(AuthContext);




  




  const sortedUserPost  =   userPosts.sort((a, b) => a.postTime - b.postTime);



  const [postAlert, setPostAlert] = useState(true)



  useEffect(()=>{

    // // Define the interval to update the count
    // const intervalId = setInterval(() => {
    //   setPostAlert(false);
    // }, 3000); // Update every second

    // // Clear the interval on component unmount
    // return () => clearInterval(intervalId);
    console.log("refreh");
    


  },[userPosts])
  


  return (
    <PostContext.Provider value={{userPosts, setUserPosts}}>


<Snackbar
  open={openSnackbar}
  autoHideDuration={3000}
  onClose={handleCloseSnackbar}
  message={snackBarMessage}
/>



            <Box sx={{width:"100%", px:3}} ><PostInput /></Box>

            {/* {postAlert && 
              <Alert sx={{borderRadius:999, mb:4, cursor:"pointer"}} variant="filled" color="info" severity="success">
                Posted successfully
              </Alert>
            } */}




            {userPosts.length ? 
            <Box sx={{
              display:"flex",
              width:"100%", 
              // flexWrap:"wrap-reverse",
              justifyContent:"center",
              alignItems:"center", 
              flexDirection:"column-reverse",
              // px:  6
              }}>
              {sortedUserPost.map((item) => <PostCard key={item.id} item={item} />)}
          </Box>
          : <CircularProgress 
            // size="3rem" 
          />
          }








          
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

