import {Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import PeopleCard from "../conent/rightMenu/PeopleCard";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChipsCustom from "../callCard/ChipsCustom";

export default function VideoCard() {

    const videoTitle = `It was a great Conversation with an amazing English Teacher.`


  return (
    <Card
      sx={{
        width: { md: 340, xs: 1 },
        height: { md: "max-content", xs: 1 },
        borderRadius: { md: 2, xs: 0 },
        m: { md: 1, xs: 0 },
        mb: { xs: 1 },
        p: 2,
      }}
      borderRadius={1}
      m={2}
      variant="outlined"
    >

        <Box display={"flex"} justifyContent={"space-between"}>
            <PeopleCard badge="true" avatar="true" title={"Abdullah Al Kaisan"} subTitle="Web developer"/>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </Box>

      <CardMedia
          component="img"
          // height="194"
          height="auto"
          width={1}
          sx={{ margin:"10px 0", cursor:"pointer", objectFit: "cover", borderRadius: 2, marginTop: 1 }}
          image="https://i3.ytimg.com/vi/-qxklAasPJw/maxresdefault.jpg"
          alt="Paella dish"
        />

        <ChipsCustom hashTagStyle={true} label="English conversation"/>


      {/* <iframe style={{border:"none", borderRadius:9, flexGrow:1, margin:"10px 0"}} width="100%" height="200" src="https://www.youtube.com/embed/pBzrHxm6mco?si=IwitSnSkiKX73d3o" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen /> */}
      <Typography variant="h6" sx={{fontSize:"medium", fontWeight:"bold"}}> {videoTitle.length >= 40 ? videoTitle.slice(0, 40)+"..." : videoTitle }</Typography>
        <Typography variant="body2">
        <Box color={"#777"} display={"flex"} alignItems={"center"}>
            465.46K views 
            <Box sx={{color:"green", fontWeight:"bold", margin:"0 5px"}}>
                56% 
            </Box>
            15 mins ago
        </Box>



        </Typography>
    </Card>
  );
}
