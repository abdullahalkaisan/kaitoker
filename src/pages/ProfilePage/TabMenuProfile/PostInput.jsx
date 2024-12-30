import { Box, Button, CircularProgress, IconButton, Skeleton, Snackbar, TextField } from "@mui/material";
import PeopleCard from "../../../components/conent/rightMenu/PeopleCard";
import { useContext, useEffect, useState } from "react";
import PostContext from "../../../PostContext";
import { MdOutlineImage, MdOutlineSettings } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";


export default function PostInput() {



    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: '#A0AAB4',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#B2BAC2',

        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#E0E3E7',
            borderRadius:16,
          },
          '&:hover fieldset': {
            borderColor: '#B2BAC2',
            
          },
          '&.Mui-focused fieldset': {
            // borderColor: '#6F7E8C',
            borderColor: '#1976D2',
          },
        },
      });
      











    const { userPosts, setUserPosts } = useContext(PostContext)

    const [postInput, setPostInput] = useState("");

    const { 
        user, 
        loading, 
        post_add_news,isPosting, 
        setIsPosting,
        setSnackBarMessage, 
        setOpenSnackbar

    } = useContext(AuthContext);






    function inputSubmit(e) {


        const userData = {             
            userId: user.uid,
            userProfile:user.photoURL,
            userName: user.displayName,
            content:postInput,
            like: 0,
            dislike:0,
            comment:0,
            postTime: Date.now() 
        }



        setIsPosting(true);


        e.preventDefault();
        post_add_news( userData);

        
    //      <Snackbar
    //      open={true}
    //      autoHideDuration={5000}
    //      // onClose={handleClose}
    //      message="This Snackbar will be dismissed in 5 seconds."
    //    />


        // console.log(user.uid);
    
        // const randomID = new Date();
        // setIsPosting(true)

        setUserPosts([...userPosts, userData ])

        // setIsPosting(false)

        setPostInput("");

        // setSnackBarMessage("Posted successfully!");  
        // setOpenSnackbar(true);




    }




    const [avatarLoading, setAvatarLoading] = useState(true);


    useEffect(()=> {
    // console.log(user);
    // useEffect(()=>{
        
    // },[inputSubmit])
    if(!loading){
        setAvatarLoading(false)
    }
    }
    ,[loading, user])





// "https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg" 

    return (

        
        <Box component="form" onSubmit={inputSubmit} sx={{ p: {md:4, sx:1}, pt:{md:4,xs:4},   display: "flex", flexDirection: "column", alignItems: "center",  }}>
                <Box sx={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <Box  sx={{ width:{md:620, xs:1 }, display: "flex",  alignItems:"center", }}>
                        <>
                            {avatarLoading ? 

                            // <CircularProgress sx={{mx:2}} size={32} />
                            <Skeleton animation="wave" variant="circular" sx={{mr:3, cursor:"pointer"}} width={32} height={32} />
                            // "loading" 
                            :
                            
                            <>
                            {/* <CircularProgress sx={{mx:2}} size={32} /> */}
                            {/* <Skeleton variant="circular" sx={{mr:3}} width={32} height={32} /> */}
                            <PeopleCard
                                avatar
                                avatarUrl={user.photoURL}
                            />
                            </>
                            
                            }
                        
                        </>
                        


                        <TextField
                            sx={{ height:"auto", width: "100%", borderRadius: "99px", outline: "none" }}
                            id="outlined-textarea"
                            label="Share what are you thinking here"
                            placeholder="What's on your mind?"
                            multiline
                            // rows={3}
                            // rows={4}
                            minRows={2}
                            maxRows={8}
                            // size=""
                            value={postInput}
                            onChange={(e) => { setPostInput(e.target.value) }}
                        />
                    </Box>


                    <Box sx={{ display: "flex", my: 3, width:{md:620, xs:1 }, justifyContent:"flex-end" }}>
                        <Box sx={{display:"flex", width:1, alignItems:"center", justifyContent:"space-between"}}>

                            <Box sx={{display:"flex", alignItems:"center"}} marginLeft={{md:6,sx:0}}>
                                
                                <IconButton sx={{marginLeft:0, display:{md:"none",xs:"flex"}}} disabled={!postInput} color="primary" aria-label="add an alarm">
                                    <IoMdAddCircleOutline />
                                </IconButton>


                                <Box>
                                    <Button 
                                    // sx={{backgroundColor:"#f1f1f1", color:"#333", borderRadius:999, boxShadow:"none", "&:hover":{backgroundColor:"#f1f1f1"}}}
                                    sx={{borderRadius:3, marginRight:1, display:{md:"block",xs:"none"}}}
                                    variant="outlined" size="small" disabled={!postInput} >add Topic</Button>
                                </Box>


                                <IconButton  disabled={!postInput} color="primary" aria-label="add an alarm">
                                    <MdOutlineImage />
                                </IconButton>
                                <IconButton  disabled={!postInput} color="primary" aria-label="add an alarm">
                                    <IoMdPricetags />
                                </IconButton>
                                <IconButton  disabled={!postInput} color="primary" aria-label="add an alarm">
                                    <MdOutlineSettings />
                                </IconButton>
                            </Box>
                            
                            <Button type="submit" sx={{ mx: 2, borderRadius: 3 }} variant="contained" disabled={!postInput} size="small"> 
                                {isPosting && <CircularProgress  sx={{mr:0.8,color:"white"}} size="15px" />}  
                                {isPosting ? "Posting" : "Post"}
                            </Button>

                        
                            {/* <LoadingButton
                                loading
                                loadingPosition="start"
                                startIcon={<SaveIcon />}
                                variant="outlined"
                            >
                                Posting
                            </LoadingButton> */}


                        </Box>
                        {/* <Box>
                    <Button>Img URL</Button>
                </Box> */}

                    </Box>


                    <Box sx={{color:"#777"}}> <small> {userPosts.length <1 ? "" : userPosts.length} {userPosts.length < 1 ? "Posts is loading..." : "Posts over the world."} </small> </Box>


                </Box>



        </Box>
    )
}
