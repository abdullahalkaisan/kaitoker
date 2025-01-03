import { Box, Button, Card, CardMedia, IconButton, Typography } from "@mui/material";
import PeopleCard from "../conent/rightMenu/PeopleCard";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChipsCustom from "../callCard/ChipsCustom";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import StarIcon from '@mui/icons-material/Star';
import TranslateIcon from '@mui/icons-material/Translate';
// import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import CourseCard_sectionTitle from "./CourseCard_sectionTitle";
import SimpleParallax from "simple-parallax-js";
import { MdBookmarkBorder, MdDone, MdOutlineArrowBack, MdOutlineSlowMotionVideo } from "react-icons/md";
import { MoreHoriz } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import CourseTitleDetails from "./CourseTitleDetails";
import { IoMdPlayCircle, IoMdRadioButtonOff } from "react-icons/io";
import CourseCard_bookmark from "./CourseCard_bookmark";
import { Link } from "react-router-dom";
export default function CourseCard_details({
    imgUrl="https://ik.imagekit.io/ably/ghost/prod/2023/11/best-react-component-libraries.png?tr=w-1728,q-50", 
    title="The Ultimate React Course 2024: React, Redux & More"
}) {

    const videoTitle = title;


    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
  

  return (
    <Box
      sx={{
        // width: "100",
        // height: "100vh",
        cursor: "pointer",
        borderRadius: { md: 2, xs: 0 },
        m: { md: 1, xs: 0 },
        mb: { xs: 1 },
        p: 2,
      }}
      // borderRadius={1}
      m={2}
      variant="none"
    >





<Box margin={"0px 0px 20px 0"} display={"flex"} justifyContent={"space-between"}>




        <Box display={"flex"}>
            <Box>
                <Link to={"/class"}>
                    <IconButton  sx={{marginRight:3, backgroundColor:`${isDark ? "#252525" :"#f1f1f1"}`}}>
                    <MdOutlineArrowBack />
                    </IconButton>
                </Link>
            </Box>
        </Box>

        <Box sx={{display:"flex", alignItems:"center"}}>
            {/* Bookmark is only avabale if unlock  */}

            <Box>
                <IconButton>
                <MoreHoriz />
                </IconButton>
            </Box>
        </Box>
      </Box>






           
            <Box sx={{
                height:294, 
                width:"100%", 
                overflow:"hidden",
                borderRadius:2
                }}>

        <SimpleParallax
            delay={2}
            // scale={2}
            orientation={"right down"}
            overflow
            // transition='cubic-bezier(0,0,0,1)'
        >

                <CardMedia
                    component="img"
                    height="294"
                    // height="auto"
                    width={"100%"}
                    sx={{
                    // margin: "10px 0",
                    cursor: "pointer",
                    objectFit: "cover",
                    borderRadius: 2,

                    // marginTop: 1,
                    }}
                    image={imgUrl}
                    alt="Can't load"
                />
        </SimpleParallax>

            </Box>















                






    <Box sx={{display:"flex", justifyContent:"space-between"}} padding={3}>

        <Box>
            <PeopleCard
                    isOnline
                    // flag="bd"
                    badge="true"
                    avatarUrl={"https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"}
                    avatar="true"
                    title={"Abdullah Al Kaisan"}
                    subTitle="Web developer"
                    time="12th June 2021"
                />
                <CourseTitleDetails videoTitle={videoTitle}/>
        </Box>




        <CourseCard_bookmark/>





    </Box>




<Box sx={{display:"flex", paddingX:3}}>

    <Button color="primary" sx={{
        display:"flex",           
        marginRight:2, 
        // fontSize:"14px",
        // fontWeight:"bold", 
        // color:"#555", 
        // textTransform:"uppercase"
        }}>
        <IoMdRadioButtonOff size={"20px"}/>
        145 Classes
    </Button>

    <Button color="primary" sx={{
        display:"flex", 
        marginRight:2, 
        alignItems:"center"
        }}>
        <MdDone size={"20px"}/>
        0 Done (0%)
    </Button>


    <Button color="primary" sx={{display:"flex"}}>
    <IoMdPlayCircle size={"20px"} />
        140 videos
    </Button>
</Box>



        <Box sx={{marginTop:"40px"}}>
            <Box sx={{padding:"10px"}}>

                <CourseCard_sectionTitle/>
                <CourseCard_sectionTitle/>
                <CourseCard_sectionTitle/>
                <CourseCard_sectionTitle/>
                <CourseCard_sectionTitle/>
                <CourseCard_sectionTitle/>
                <CourseCard_sectionTitle/>
                <CourseCard_sectionTitle/>
                <CourseCard_sectionTitle/>
                <CourseCard_sectionTitle/>
                <CourseCard_sectionTitle/>
                <CourseCard_sectionTitle/>






            </Box>
            <Box>

            </Box>
        </Box>

      




    </Box>
  );
}
