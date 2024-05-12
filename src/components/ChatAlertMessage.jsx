import { Box, IconButton } from "@mui/material";
import PeopleCard from "./conent/rightMenu/PeopleCard";
import { MdLogout, MdRssFeed } from "react-icons/md";
import { useTheme } from "@emotion/react";

export default function ChatAlertMessage() {

    const theme = useTheme()
    // const isDark = theme.palette.mode = "dark";


    return (
        <Box sx={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", marginY:2}}>

            <Box sx={{ 
            display: "flex", 
            justifyContent:"space-between",
            // width: "max-content", 
            width: "80%", 

            // backgroundColor:"#FFFF0010", border:"1px solid orange",
           
            // backgroundColor:"#F43C1F10", 
            // border:"1px solid tomato",
            
            // backgroundColor:"#00800010", 
            // border:"1px solid green",

            backgroundColor:"#1976d210", 
            border:"1px solid #1976d270",


            borderRadius: 2, p: 1, px:2 }}>

                <PeopleCard
                    time={"6:55 PM"}
                    isVarified
                    avatar
                    // avatarSize={22} 
                    avatarUrl={"https://lh3.googleusercontent.com/a/ACg8ocKjcLQnbqhz1e6GuIXL1IrBSg2pG_FSAtw-vO1ejOyW890"}
                    title={"John Doe"}
                    subTitle={"Web developer"}
                    subTitle2={"Joined"}
                    subTitleSize2={12}
                    subTitleColor2={"primary"}
                    subTitleWeight2={"bold"}
                    flag={"us"}
                />

                <Box>
                    <IconButton color="primary">
                        <MdLogout />
                        {/* <MdRssFeed /> */}
                    </IconButton>
                </Box>
            </Box>

        </Box>
    )
}
