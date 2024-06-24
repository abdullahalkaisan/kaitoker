import {Avatar, AvatarGroup, Box, Button, Card, CardMedia, IconButton, Typography } from "@mui/material";
import PeopleCard from "../conent/rightMenu/PeopleCard";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChipsCustom from "../callCard/ChipsCustom";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import StarIcon from '@mui/icons-material/Star';
import TranslateIcon from '@mui/icons-material/Translate';
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import { Link } from "react-router-dom";
export default function CourseCard({imgUrl="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/5992673/cover_image/retina_1708x683/1005_Design-Patterns-in-React_Cover-44247834a5b31e8d08e5bbbdac4a6750.png", title="The Ultimate React Course 2024: React, Redux & More"}) {

    const videoTitle = title;


  return (
    <Link to={"/coursepage"} style={{ textDecoration: 'none' }}>
    <Card
      sx={{
        // textDecoration: 'none',
        width: { md: 340, xs: 1 },
        height: { md: "max-content", xs: 1 },
        cursor: "pointer",
        borderRadius: { md: 2, xs: 0 },
        m: { md: 1, xs: 0 },
        mb: { xs: 1 },
        p: 2,
      }}
      // borderRadius={1}
      m={2}
      variant="outlined"
      
      
    >

      <Box  display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"}>
          <PeopleCard
            isOnline
            badge="true"
            avatarUrl={"https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"}
            avatar="true"
            title={"Abdullah Al Kaisan"}
            subTitle="Web developer"
          />
          <Typography variant="caption" color="#999">
            1 month
          </Typography>
        </Box>

        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>

      <CardMedia
        component="img"
        // height="194"
        height="auto"
        width={1}
        sx={{
          margin: "10px 0",
          cursor: "pointer",
          objectFit: "cover",
          borderRadius: 2,
          marginTop: 1,
        }}
        image={imgUrl}
        alt="Paella dish"
      />

      <ChipsCustom hashTagStyle={true} label="Web development" />
      <ChipsCustom hashTagStyle={true} label="React" />

      {/* <iframe style={{border:"none", borderRadius:9, flexGrow:1, margin:"10px 0"}} width="100%" height="200" src="https://www.youtube.com/embed/pBzrHxm6mco?si=IwitSnSkiKX73d3o" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen /> */}
      <Typography variant="h6" sx={{ fontSize: "medium", fontWeight: "bold" }}>
        {" "}
        {videoTitle.length >= 40 ? videoTitle.slice(0, 40) + "..." : videoTitle}
      </Typography>


      



      <Typography variant="body2">
        <Box
          color={"#777"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} alignItems={"center"}>
            <PeopleOutlineIcon sx={{ marginRight: 0.5 }} fontSize="small" />
            465
          </Box>

          <Box display={"flex"} alignItems={"center"}>
            <FormatListBulletedIcon
              sx={{ marginRight: 0.5 }}
              fontSize="small"
            />
            650
          </Box>

          <Box display={"flex"} alignItems={"center"}>
            <TranslateIcon sx={{ marginRight: 0.5 }} fontSize="smaller" />
            English
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            sx={{ color: "green", fontWeight: "bold", margin: "0 5px" }}
          >
            <StarIcon sx={{ marginRight: 0 }} fontSize="smaller" />
            56%
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            sx={{ color: "primary", fontWeight: "bold", margin: "0 5px" }}
          >
            {/* <StarIcon sx={{marginRight:0}} fontSize="small"/> */}
            <Button
              sx={{ padding: 0,margin:0, textTransform: "none" }}
              color="primary"
              size="smaller"
            >
              $2.34/hr
            </Button>
          </Box>
        </Box>
      </Typography>
    </Card>

    </Link>


  );
}
