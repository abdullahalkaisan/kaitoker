import { Box, Button, TextField } from "@mui/material";
import PeopleCard from "../../../components/conent/rightMenu/PeopleCard";
import { useContext, useState } from "react";
import PostContext from "../../../PostContext";


export default function PostInput() {

    const [postInput, setPostInput] = useState("")

    const { userPosts, setUserPosts } = useContext(PostContext)


    function inputSubmit(e) {
        e.preventDefault()
        console.log(e);
        const randomID = new Date();
        setUserPosts([...userPosts, { id: randomID, content:postInput }  ])
        setPostInput("");
    }



    return (

        
        <Box component="form" onSubmit={inputSubmit} sx={{ p: 2, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>

                <Box  sx={{ width: "100%", display: "flex", justifyContent: "" }}>
                    <PeopleCard
                        avatar
                        avatarUrl={"https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"}
                    />


                    <TextField
                        sx={{ width: "100%", borderRadius: "99px", outline: "none" }}
                        id="outlined-textarea"
                        label="What's on your mind?"
                        placeholder="What's on your mind?"
                        multiline
                        maxRows={8}
                        size=""
                        value={postInput}
                        onChange={(e) => { setPostInput(e.target.value) }}
                    />
                </Box>
                <Box sx={{ display: "flex", my: 3 }}>
                    <Box>
                        <Button disabled={!postInput} >add Topic</Button>
                    </Box>
                    {/* <Box>
                <Button>Img URL</Button>
            </Box> */}
                    <Box>
                        <Button type="submit" sx={{ mx: 2, borderRadius: 99 }} variant="contained" disabled={!postInput} size="small">Post</Button>
                    </Box>
                </Box>



        </Box>
    )
}
