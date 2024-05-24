import {Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import PeopleCard from "../conent/rightMenu/PeopleCard";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChipsCustom from "../callCard/ChipsCustom";
import { MdOutlineRemoveRedEye, MdOutlineStar } from "react-icons/md";

export default function VideoCard() {

    const videoTitle = `It was a great Conversation with an amazing English Teacher.`


  return (
    <Card
    // 340 
      sx={{
        width: { md: 340, xs: 1 },
        height: { md: "max-content", xs: 1 },
        // height:"100%",
        cursor:"pointer",
        borderRadius: { md: 2, xs: 0 },
        m: { md: 1, xs: 0 },
        mb: { xs: 1 },
        p: 2,
      }}
      // borderRadius={1}
      m={2}
      variant="outlined"
    >

        <Box display={"flex"} justifyContent={"space-between"}>
            <PeopleCard 
            time={"15 mins"} 
            badge="true" 
            avatar="true" 
            avatarUrl={"https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"}
            title={"Abdullah Al Kaisan"} 
            subTitle="Web developer"/>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </Box>

      <CardMedia
          component="img"
          height="auto"
          width={1}
          sx={{ display:"", margin:"10px 0", cursor:"pointer", objectFit: "cover", borderRadius: 2, marginTop: 1 }}
          image="https://i3.ytimg.com/vi/-qxklAasPJw/maxresdefault.jpg"
          alt="Paella dish"
        />

      {/* <iframe style={{border:"none", borderRadius:9, margin:"10px 0"}} height={"500"} width="100%" src="https://www.youtube.com/embed/pBzrHxm6mco?si=IwitSnSkiKX73d3o" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
       */}

    <ChipsCustom hashTagStyle={true} label="English conversation"/>

      <Typography variant="h6" sx={{fontSize:"medium", fontWeight:"bold"}}> {videoTitle.length >= 40 ? videoTitle.slice(0, 40)+"..." : videoTitle }</Typography>
        <Typography variant="body2">
        <Box color={"#777"} display={"flex"} alignItems={"center"}>
            <MdOutlineRemoveRedEye style={{marginRight:3}} />
            465.46K
            {/* views  */}
            <Box sx={{display:"flex", alignItems:"center", color:"green", fontWeight:"bold", margin:"0 5px"}}>
            <MdOutlineStar style={{marginRight:3}} />
                56% 
            </Box>
            {/* 15 mins ago */}
        </Box>



        </Typography>
    </Card>
  );
}
