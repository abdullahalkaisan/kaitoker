import { Box, IconButton, Stack } from "@mui/material";
import TabMenuProfile from "./TabMenuProfile";
import SideControlPic from "./SideControlProfile";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";




export default function ProfilePage() {
  const theme = useTheme();
  return (
    <Box bgcolor={"background.default"} color={"text.primary"} height={"100vh"}>



      <Stack direction={"row"} bgcolor={""} height={"100%"}>

        <Box 
        sx={{
          display:{md:"block", xs:"none"},
        }


          } height={"100%"} width={"30%"} overflow={"auto"} borderRight={"1px solid rgba(0, 0, 0, 0.12)"}>
          
          <Stack direction={"row"} justifyContent={"space-between"}>

          {/* {theme.palette.mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />} */}
            
            <Link to="/">
              <IconButton sx={{m:2, bgcolor:`${theme.palette.mode === 'light' ? "#f1f1f1" : "#222"}`}}>
                <ArrowBackIcon/>
              </IconButton>
            </Link>

            <IconButton sx={{m:2}}>
              <MoreHorizIcon/>
            </IconButton>
          </Stack>


          <SideControlPic/>

        </Box>


        <Box height={"100vh"} 
        sx={{
          width:{md:"70%", xs:"100%"}
        }}
        >
          <TabMenuProfile/>
        </Box>

      </Stack>
    </Box>
  )
}
