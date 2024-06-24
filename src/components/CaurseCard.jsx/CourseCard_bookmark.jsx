import { Box, Button, IconButton } from "@mui/material";
import { IoMdPlayCircle } from "react-icons/io";
import { MdBookmarkBorder } from "react-icons/md";


export default function CourseCard_bookmark() {
  return (
    <Box>
    <Button color="error"  size="small" 
    sx={{borderRadius:3}}
    // sx={{
    //     borderRadius:3, 
    //     backgroundColor:"#333", 
    //     color:"#fff",
    //     "&:hover":{
    //     backgroundColor:"#222", 
    //     }
    //     }} 
        variant="contained">
        <IoMdPlayCircle style={{marginRight:4}} size={"20px"} />
        Unlock 120 videos
        {/* $2.00 */}
    </Button>

    <IconButton sx={{margin:2, borderRadius:3}}>
        <MdBookmarkBorder />
        <Box sx={{fontSize:"medium"}}>
            456
        </Box>
    </IconButton>
</Box>
  )
}
