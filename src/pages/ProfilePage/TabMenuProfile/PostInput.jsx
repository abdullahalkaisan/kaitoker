import { Box, Button, IconButton, TextField } from "@mui/material";
import PeopleCard from "../../../components/conent/rightMenu/PeopleCard";
import { useContext, useState } from "react";
import PostContext from "../../../PostContext";
import { MdOutlineImage, MdOutlineSettings } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";


export default function PostInput() {

    const [postInput, setPostInput] = useState("")

    const { userPosts, setUserPosts } = useContext(PostContext)


    function inputSubmit(e) {
        e.preventDefault()
        const randomID = new Date();
        setUserPosts([...userPosts, { id: randomID, content:postInput }  ])
        setPostInput("");
    }



    return (

        
        <Box component="form" onSubmit={inputSubmit} sx={{ p: 4, display: "flex", flexDirection: "column", alignItems: "center",  }}>
                <Box sx={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <Box  sx={{ width: "50%", display: "flex",  alignItems:"flex-start", }}>
                        <PeopleCard
                            avatar
                            avatarUrl={"https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"}
                        />


                        <TextField
                            sx={{ width: "100%", borderRadius: "99px", outline: "none" }}
                            id="outlined-textarea"
                            label="Share what are you thinking here"
                            placeholder="What's on your mind?"
                            multiline
                            rows={3}
                            maxRows={8}
                            size=""
                            value={postInput}
                            onChange={(e) => { setPostInput(e.target.value) }}
                        />
                    </Box>
                    <Box sx={{ display: "flex", my: 3, width:"50%", justifyContent:"flex-end" }}>
                        <Box sx={{display:"flex", width:1, alignItems:"center", justifyContent:"space-between"}}>
                            <Box marginLeft={6}>
                                <Button 
                                // sx={{backgroundColor:"#f1f1f1", color:"#333", borderRadius:999, boxShadow:"none", "&:hover":{backgroundColor:"#f1f1f1"}}}
                                sx={{borderRadius:3}}
                                variant="outlined" size="small" disabled={!postInput} >add Topic</Button>
                                <IconButton sx={{marginLeft:1}} disabled={!postInput} color="primary" aria-label="add an alarm">
                                    <MdOutlineImage />
                                </IconButton>
                                <IconButton sx={{marginLeft:0}} disabled={!postInput} color="primary" aria-label="add an alarm">
                                    <IoMdPricetags />
                                </IconButton>
                                <IconButton sx={{marginLeft:0}} disabled={!postInput} color="primary" aria-label="add an alarm">
                                    <MdOutlineSettings />
                                </IconButton>
                            </Box>
                            
                            <Button type="submit" sx={{ mx: 2, borderRadius: 3 }} variant="contained" disabled={!postInput} size="small">Post</Button>

                        </Box>
                        {/* <Box>
                    <Button>Img URL</Button>
                </Box> */}

                    </Box>

                </Box>



        </Box>
    )
}
