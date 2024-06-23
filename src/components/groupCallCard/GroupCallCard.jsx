
import {   Avatar, Box, Button, Card, IconButton,  Tooltip, Typography } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TranslateIcon from '@mui/icons-material/Translate';
import { UilVideoSlash } from '@iconscout/react-unicons'
import { 
    UilMars
} from '@iconscout/react-unicons'
import { useTheme } from "@emotion/react";
import GroupAvatarBox from "./GroupAvatarBox";
import { IoMdEye } from "react-icons/io";
import { IoEye, IoEyeOutline } from "react-icons/io5";
import { MdChair, MdMoreHoriz, MdStar } from "react-icons/md";
import ChipsCustom from "../callCard/ChipsCustom";

export default function GroupCallCard() {


  const theme = useTheme();
  const isThemeDark = theme.palette.mode === "dark";








  return (
    <Card
      variant="outlined"
      sx={{
        width: { md: 340, xs: 1 },
        height: { md: "max-content", xs: 1 },
        borderRadius: { md: 2, xs: 0 },
        boxShadow:"0px 0px 10px #00000015",
        m: { md: 1, xs: 0 },
        mb: { xs: 1 },
        p: 2,
      }}
      // borderRadius={1}
      m={2}
    >




      <Box sx={{display:"flex", justifyContent:"space-between"}}>
        
        {/* <Typography mb={2} variant="body1" color="#666">
          Reading..
        </Typography> */}
        {/* <Chip label="Javascript"></Chip> */}

          {/* 80%  */}
          <Box width={"85%"} mb={2}>
            <ChipsCustom size={"large"} label={"Javascript array"}/>
          </Box>

          <Box>
            <IconButton>
              <MdMoreHoriz/>
            </IconButton>
          </Box>


      </Box>



      <Box width={"100%"} display={"flex"} justifyContent={"center"}>
        <Box
          sx={{
            display: "flex",
            // width: "max-content",
            width:"100%",
            // paddingX:2,
            justifyContent: "space-evenly",
          }}
        >



        <GroupAvatarBox isPro followers={264} avatarUrl="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg" flag="bd"/>
        <GroupAvatarBox followers={46} avatarUrl="https://pbs.twimg.com/profile_images/1377353524661604356/DIMdJND1_400x400.jpg" flag="us"/>
        <GroupAvatarBox followers={46} avatarUrl="https://lh3.googleusercontent.com/a/ACg8ocL1a-xNIqHHXT9L8DLw8U0OHXt4Gwc7erfvuod3d1V-gjw" flag="ph"/>
        <GroupAvatarBox followers={46} avatarUrl="https://pbs.twimg.com/profile_images/1273225109528961024/FahFysNy_400x400.jpg" flag="in"/>


        {/* <Avatar sx={{height:70, width:70, backgroundColor:"#f1f1f1", border:"1px solid #33333330", borderRadius:5}}>
          <MdChair color="gray" fontSize={30} />
        </Avatar>
        <Avatar sx={{height:70, width:70, borderRadius:5}}>
          <MdChair fontSize={30} />
        </Avatar> */}




          {/* <Box
            sx={{
              borderRadius: "999px",
              border: `2px dotted ${
                isThemeDark ? "skyblue" : "#1976d2"
              }`,
              width: 70,
              height: 70,
              mr: 1,
            }}
          ></Box> */}
          {/* <Box
            sx={{
              borderRadius: "999px",
              border: `2px dotted ${
                isThemeDark  ? "skyblue" : "#1976d2"
              }`,
              width: 70,
              height: 70,
              mr: 1,
            }}
          ></Box> */}


        </Box>




        
      </Box>





      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 3,
          mx: 2,
        }}
      >

        <Box sx={{display:"flex", alignItems:"center"}}>
          <Box>

            {/* <IconButton size="small">
              <MoreHorizIcon />
            </IconButton> */}

            {/* <IconButton sx={{ borderRadius: 2, mr:0, fontWeight:"bold", fontSize:"small"  }} size="small">
              <IoEye sx={{ fontSize: ""}} />
              <Box sx={{ fontSize: "", ml: 0.5 }}>506</Box>
            </IconButton>

            <IconButton sx={{ borderRadius: 2, mr:0, fontWeight:"bold", fontSize:"small", color:"green" }} size="small">
              <MdStar sx={{ fontSize: ""}} />
              <Box sx={{ fontSize: "", ml: 0 }}>54%</Box>
            </IconButton> */}



            <IconButton sx={{ borderRadius: 2, mr:0, fontWeight:"bold", fontSize:"small" }} size="small">
              <TranslateIcon sx={{ fontSize: ""}} />
              <Box sx={{ fontSize: "", ml: 0.2 }}>English</Box>
            </IconButton>


            {/* <IconButton size="small">
              <UilVideoSlash />
            </IconButton> */}
            <Tooltip sx={{display:"none"}} title="Only Male">
              <IconButton color="info">
                <Box
                  sx={{
                    // color: "#ff6f88",
                    display: "inline-flex",
                  }}
                >
                  <UilMars />
                </Box>
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        


        <Box>
          {/* <Button color="error" variant="contained" size="small" sx={{ borderRadius: 2, fontWeight:"bold", textTransform:"capitalize" }}>
            Watch
          </Button> */}
          <Button color="primary" variant="contained" size="small" sx={{ borderRadius: 999, }}>
            Join
          </Button>
        </Box>


      </Box>
    </Card>
  );
}
