import { Avatar, AvatarGroup, Box, Button, Typography } from "@mui/material";
import { IoMdRadioButtonOff } from "react-icons/io";
import CourseCard_avatarGroup from "./CourseCard_avatarGroup";
import { useTheme } from "@emotion/react";
import { MdBookmarkBorder } from "react-icons/md";



export default function CourseCard_sectionTitle() {

const theme = useTheme();
const isDark = theme.palette.mode === "dark";


  return (
    <Box sx={{
        display:"flex", 
        alignItems:"center", 
        justifyContent:"space-between",
        backgroundColor:   `${isDark ? "#222":"#f1f1f190"}`,
        transition:"easy 0.5s",
        "&:hover":{backgroundColor:`${isDark ? "#333":"#f1f1f1"}`},
        border:"1px solid #33333320",
        padding:2,
        marginBottom:1,
        borderRadius:4
        }}>
        <Typography sx={{display:"flex", alignItems:"center"}}>
        {/* <IoMdRadioButtonOn /> */}
        <IoMdRadioButtonOff  size={"18px"} style={{marginRight:4}}/>
            What is a Dev Environment? (Your First Installation)
        </Typography>


        <Box sx={{display:"flex", alignItems:"center"}}>

  
            <Box marginX={2}>
                <CourseCard_avatarGroup/>
            </Box>
            <Button 
            sx={{borderRadius:3}} 
            // sx={{
            //     borderRadius:3, 
            //     backgroundColor:"#333", 
            //     color:"#fff",
            //     "&:hover":{
            //     backgroundColor:"#222", 
            //     }
            //     }} 
            
            variant="contained" size="small">Book</Button>
        </Box>



        </Box>
  )
}
