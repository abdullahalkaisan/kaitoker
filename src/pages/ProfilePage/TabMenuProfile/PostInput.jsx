import { Box, Button, IconButton, TextField } from "@mui/material";
import PeopleCard from "../../../components/conent/rightMenu/PeopleCard";
import { useContext, useState } from "react";
import PostContext from "../../../PostContext";
import { MdOutlineImage, MdOutlineSettings } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";
import styled from "styled-components";


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
      








    const [postInput, setPostInput] = useState("")

    const { userPosts, setUserPosts } = useContext(PostContext)


    function inputSubmit(e) {
        e.preventDefault()
        const randomID = new Date();
        setUserPosts([...userPosts, { id: randomID, content:postInput }  ])
        setPostInput("");
    }



    return (

        
        <Box component="form" onSubmit={inputSubmit} sx={{ p: {md:4, sx:1}, pt:{md:4,xs:4},   display: "flex", flexDirection: "column", alignItems: "center",  }}>
                <Box sx={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <Box  sx={{ width:{md:620, xs:1 }, display: "flex",  alignItems:"center", }}>
                        <PeopleCard
                            avatar
                            avatarUrl={"https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"}
                        />


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
                            <Box marginLeft={{md:6,sx:0}}>
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
