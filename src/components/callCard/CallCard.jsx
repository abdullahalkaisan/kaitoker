// import styled from "@emotion/styled";
import { Avatar, AvatarGroup, Badge, Box, Button, Card, CardActionArea, IconButton, Stack, Tooltip, Typography } from "@mui/material";
// import { PropTypes } from 'prop-types';
import RoomIcon from '@mui/icons-material/Room';
import 'animate.css';



import {
  // UilInfoCircle,
  // UilPlay,
  // UilLocationPoint,
  UilUserPlus,
  UilStar,
  UilCommentMessage,
  UilCommentLines
  // UilVideo,
  // UilEllipsisH
  // UilRssAlt,
  // UilHeart,
  // UilStar,
  // UilLetterJapaneseA,
  // UilUserPlus,
  // UilPlus,
  // UilPlusCircle

} from '@iconscout/react-unicons'

// import FastForwardIcon from '@mui/icons-material/FastForward';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import FastRewindIcon from '@mui/icons-material/FastRewind';

// import  from '@mui/icons-material/Star';
// import PaymentIcon from '@mui/icons-material/Payment';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';

import VerifiedIcon from '@mui/icons-material/Verified';
// import TranslateIcon from '@mui/icons-material/Translate';
// import RssFeedIcon from '@mui/icons-material/RssFeed';
import styled from "@emotion/styled";
// import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import DoneIcon from '@mui/icons-material/Done';
// import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
// import CableIcon from '@mui/icons-material/Cable';
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
// import CallCardDynamic from "./CallCardDynamic";
import AudioPlay_button from "./AudioPlay_button";
import AudioSlider_custom from "./AudioSlider_custom";
import ChipsCustom from "./ChipsCustom";
import SubDetails from "./SubDetails";
import { IoMdInfinite } from "react-icons/io";
import PeopleCard from "../conent/rightMenu/PeopleCard";
import React, { useContext } from "react";
import { CallCardContext } from "../../Providers/CallCardProvider";
import { MdChair } from "react-icons/md";
import { Tune } from "@mui/icons-material";
import CallCard_slot from "./CallCard_slot";

// import ChipsCustomDynamic from "./ChipsCustomDynamic";
// import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
// import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
// import KeyIcon from '@mui/icons-material/Key';
// import LoopIcon from '@mui/icons-material/Loop';



export default function CallCard(props) {

  const {
    isPaused,
    setIsPaused,
  } = useContext(CallCardContext)




  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // const PropKeys = Object.keys(props).join();
  // console.log(typeof PropKeys);



  //   const {
  //     // id, 
  //     user_name, 
  //     user_profetion, 
  //     user_profilePicture, 
  //     user_country, 
  //     user_country_flag, 
  //     user_followers, 
  //     user_accoutType, 
  //     user_about, 
  //     user_rating, 
  //     user_total_call, 
  //     user_perHourCost, 
  //     // user_skills, 
  //     user_language
  // } = props;


  const {
    userName,
    unique_username,
    profession,
    avatar,
    // hourRate,
    followers,
    rating,
    totalCall,
    flag,
    // gigLanguage,
    isVarified,
    isOnline,
    // languages, 
    country,
    // city, 
    skills,
    isUserPro
    // id
  } = props.item;

  // last online is only abilable for pro user
  // const isOnline_isActive = isOnline === "online" || isOnline === "busy";


  {/* "20px 20px 10px 20px"  */ }
  {/* "100px 100px 10px 90px"  */ }
  const isTheUserPro = true;

  // const avatarRadious_circle = "100px 100px 10px 90px";
  // const avatarRadious_square= "30px 30px 30px 30px";



  
  // 70 || 100
  const avatarSiseList = {
    small: 70,
    large: 100
  }
  // avatar readious 
   const avatarRadiousList = {
    circle: "100px 100px 10px 90px",
    square: "40px 40px 20px 40px",
    squareEx: "30px 30px 10px 30px"
  }


  const avatarRadious = avatarRadiousList.square;
  const avatarSize = avatarSiseList.large;


  






  const StyledBadge = styled(Badge)({
    '& .MuiBadge-badge': {

      // height: "10px",
      // width: "10px",
      // outline: `8px solid ${theme.palette.background.paper}`,



      // online idle but not in a room  
      height: "15px",
      width: "15px",
      outline: `4px solid ${theme.palette.background.paper}`,
      border:`4px solid ${isDark ? "#90CAF9" : "#1976D2"}`,
      background:`${theme.palette.background.paper}`,



      
      right: 8,
      bottom: 8,
      borderRadius: 999,
      
      padding: "0",
    },
  });



  const StyledBadge2 = styled(Badge)({
    '& .MuiBadge-badge': {
      height: "10px",
      width: "auto",
      outline: `8px solid ${theme.palette.background.paper}`,
      backgroundColor: `${theme.palette.background.paper}`,
      color: "#777",
      // right: 10, 
      right: 15,
      bottom: 10,
      borderRadius: "9px 0 0 9px",
      padding: 0,
    },
  });






  // height: "10px",
  // width: "auto",
  // right: 12,
  // bottom: 10,
  // borderRadius: "9px 0 0 9px",







  return (
    <Box
      // bgcolor={"yellow"} 
      sx={{ marginBottom: { md: 0, xs: 1 } }}>

{/* animate__bounceIn animate__jello */}

      <Card
        // className="animate__animated  animate__jello"
        variant=""
        sx={{
          width: { md: 340, xs: 1 },
          // width:"auto",
          height: { md: "auto", xs: 1 },
          borderRadius: { md: 2, xs: 2 },
          m: { md: 2, xs: 0 },
          p: 2,
          // outline:`20px solid #333333${isPaused ? "00" :"50"}`, 
          // boxShadow:`0px 0px 10px #333333${isPaused ? "00" :"95"}`
        }}
        // borderRadius={1}
        // 1976D2 
        m={2}
      >
        <Box display={"flex"}
          flexDirection={"row"}
        // alignItems={"flex-start"}

        >
          <Box
            bgcolor={"background.default"}
            sx={{ display: "flex", justifyContent: "center", m: 1 }}
          >
            {/* <Link to={`/${unique_username}`}> */}
            {/* ${isPaused ? " animate__jello" : "animate__rubberBand"}  */}

            <CardActionArea
              sx={{borderRadius: avatarRadious}}
              // className={`animate__animated  ${isPaused ? " animate__jello" : "animate__rubberBand"}`}
              onClick={() => setIsPaused(!isPaused)}
              // sx={{ borderLeft: `3px solid #1976D2${isPaused ? "00" : "90"}`, borderTop: `3px solid #1976D2${isPaused ? "00" : "90"}`, borderRadius: avatarRadious }}
              size="small"
              >


              {/* ED6C02  orange*/}
              {/* 1976D2  blue*/}
              {/* 50 || 70 || 90  opacity */}

              {/* "20px 20px 10px 20px"  */}
              {/* "100px 100px 10px 90px"  */}

              {isOnline === "" && isTheUserPro ?
                <StyledBadge2
                  badgeContent={"12m"}
                  variant="string"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  {/* {
                    isUserPro &&
                      <img style={{height:24, position:"absolute", bottom:0, zIndex:1}} src="https://media.tenor.com/F3xUrsjCSzUAAAAi/fire.gif" alt="can't load image" />
                  } */}

                  <Avatar
                    src={avatar}
                    sx={{ width: avatarSize, height: avatarSize, borderRadius: avatarRadious }}
                  />
                </StyledBadge2>
                :
                <StyledBadge
                  color={isOnline === "online" ? "info" : "warning"}
                  badgeContent={isOnline === "online" || isOnline === "busy" ? 1 : 0}
                  variant={"dot"}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  {/* {
                    isUserPro &&
                      <img style={{height:24, position:"absolute", bottom:0, zIndex:1}} src="https://media.tenor.com/F3xUrsjCSzUAAAAi/fire.gif" alt="can't load image" />
                  } */}
                  <Avatar
                    src={avatar}
                    sx={
                      isOnline === ""
                        ? { width: avatarSize, height: avatarSize, borderRadius: avatarRadious }
                        : { width: avatarSize, height: avatarSize, borderRadius: avatarRadious }
                    }
                  />
                </StyledBadge>
              }


            </CardActionArea>
            {/* </Link> */}
          </Box>

          <Box
            bgcolor={"background.default"}
            color={"text.primary"}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // text position 
              // alignItems: "center",

              width: "100%",
              pl: 1,
            }}
          >




            <Link
              style={{
                textDecoration: "none",
                color: `${isDark ? "#fff" : "#333"}`,
                "&:visited": {
                  color: `${isDark ? "#fff" : "#333"}`,
                },
              }}
              to={`/${unique_username.toLowerCase()}`}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: `${isDark ? "#fff" : "#333"}`,
                  width: "max-content",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
                textAlign={"center"}
                fontWeight={"bold"}
                variant="h6"
                gutterBottom
              >
                {userName}

                {/* <VerifiedIcon
                  sx={{ mx: 0.5, fontSize: "large", color: "#1D9BF0" }}
                />  */}

                {isVarified && (
                  <VerifiedIcon
                    sx={{ mx: 0.5, fontSize: "large", color: "#1D9BF0" }}
                  />
                )}
                <IoMdInfinite style={{ marginLeft: 2, color: `${isDark ? "#777" : "#33333370"}` }} />
                {/* <Badge sx={{mx:3}} color="primary" badgeContent="Pro"></Badge> */}

              </Typography>
            </Link>

            <Typography
              sx={{ color: "#777" }}
              // textAlign={"center"}
              variant="subtitle1"
              mt={-2}
              p={0}
              gutterBottom
            >
              {profession}
            </Typography>

            <Typography
              sx={{ color: "#777", display: "flex", alignItems: "center" }}
              // textAlign={"center"}
              variant="subtitle1"
              mt={-1.5}
              p={0}
              gutterBottom
            >
              <RoomIcon sx={{ fontSize: "medium" }} />

              {country}

              <Tooltip title={country} placement="top">
                <Box sx={{ display: "flex", alignItems: "center", px: 1 }}>
                  <img
                    style={{
                      borderRadius: 3,
                      border: "1px solid #77777750",
                      boxShadow: "10px 10px 10px solid black",
                    }}
                    src={`https://flagcdn.com/w20/${flag}.png`}
                  />
                </Box>
              </Tooltip>
            </Typography>



            <Typography
              sx={{ color: "#777", display: "flex", alignItems: "center" }}
              // textAlign={"center"}
              variant="subtitle1"
              mt={-2}
              p={0}
              gutterBottom
            >
              {/* <RoomIcon sx={{ fontSize: "medium" }} /> */}
            </Typography>

            {/* 
          <Typography
            sx={{ color: "#999", mt: "-5px" }}
            textAlign={"center"}
            variant="subtitle1"
            mt={-2}
            p={0}
            gutterBottom
          >
            <Stack
              flexWrap={"wrap"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <UilLocationPoint />
              <Box>{user_country}</Box>

              <Tooltip title={user_country} placement="top">
                <Box sx={{ display: "flex", alignItems: "center", px: 1 }}>
                  <img
                    style={{ borderRadius: 3, boxShadow:"1px 1px 1px solid #00000050" }}
                    src={`https://flagcdn.com/w20/${user_country_flag}.png`}
                  />
                </Box>
              </Tooltip>

              <Box sx={{ display: "none", alignItems: "center", pr: 1 }}>
                <TranslateIcon sx={{ fontSize: "medium" }} />
                {user_language}
              </Box>
            </Stack>
          </Typography> */}
          </Box>
        </Box>

        <Box
          display={"none"}
          p={1} pl={3} justifyContent={""}>
          <PeopleCard
            languages="English, Bengali, Hindi"
          />
        </Box>


        <Box
          // display="none"
          pl={4}>


          <SubDetails
            // user_followers={new Intl.NumberFormat("en-US", {
            //   useGrouping: true,
            //   notation: "compact",
            // }).format(followers)}
            user_followers={followers}
            user_rating={rating}
            user_language={"En"}
            sinceTime="1.2y"
            justifyContent={"flex-start"}
            // user_total_call={new Intl.NumberFormat("en-US", {
            //   useGrouping: true,
            //   notation: "compact",
            // }).format(totalCall)}
            user_total_call={totalCall}
          // flag={flag}
          />
        </Box>





        





        {/* <Box display={"none"}>
          <Typography
            variant="body2"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              color: "#777",
              px: 3,
            }}
            gutterBottom
          >
            {user_about}
          </Typography>
        </Box> */}


{isOnline && 
!isPaused && 
        <Box sx={{
        // display:"none",
        margin:"30px 30px 15px 30px", 
        border:`1px solid ${isDark ? "#ffffff10" : "#00000010"}`, 
        borderRadius:3,  
        backgroundColor:`${isDark ? "#222" : "#f1f1f1"}`
        }}>
{/* 
#f1f1f170
#f1f1f180
#f1f1f190
#f1f1f1 
*/}
          <Box sx={{margin:"10px 10px 0 20px"}}>
            {/* <ChipsCustom label={"Reading"}/> */}
            <Typography 
              variant="body2" 
              color={isDark ? "#f1f1f195" : "#555"} >
              Javascript array class
            </Typography>
          </Box>
          <CallCard_slot 
          avatarHeight={30}
          />
        </Box>
      }




        {/* 
pro user functonality 
user can add 5 skills 
pro user can add 10 skills



*/}

{!isPaused &&
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          direction="row"
          // justifyContent={"center"}
          flexWrap={"wrap"}
          px={2}
          mt={2}
          mb={1}
          overflow={"auto"}
          // fontWeight={"bold"}
          textAlign={"center"}
        // sx={{
        //   maxHeight: { md: "56px", xs: "56px" },
        //   minHeight: { md: "56px", xs: "auto" },
        // }}
        >
          {/* <CallCardDynamic user_skills={user_skills}/> */}
          {skills.map((skill, index) => (
            <ChipsCustom key={index} hashTagStyle={true} label={skill.name} />
          ))}
        </Box>

}
















        {/* animate__rubberBand  animate__headShake animate__bounceIn*/}
        
        {!isPaused &&
          <Box 
            // className={`animate__animated  ${isPaused ? "  " : "  "}`}
            sx={{
              px: 4,
              // backgroundColor: `${!isPaused && "#1565C030"} `,
              borderRadius:3
              // display:"none" 
          }}>
            <AudioSlider_custom />
          </Box>
        }



        <Stack
          // sx={{ display: "none" }}
          bgcolor={"background.default"}
          color={"text.primary"}
          flexDirection={"row"}
          m={"10px 0"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          {/* <IconButton color="info">
            <UilStar />
          </IconButton> */}



          <IconButton color="primary">
            {/* <UilHeart/> */}
            {/* <UilStar/> */}
            {/* <UilUserPlus/> */}
            {/* <UilPlus/> */}
            <UilUserPlus />
          </IconButton>

          <IconButton color="info">
            <UilCommentLines />
          </IconButton>



          <AudioPlay_button />




          {/* <IconButton color="primary" size="large">
              <UilVideo />
          </IconButton> */}

          <Box>
            {/* bgcolor:"#333", color:"#fff", "&:hover":{bgcolor:"#444"}  */}
            {/* #ED6C02  */}
            {/* #1D9BF0  */}
            <Link to={"/callpage"}>
              <Button
                // disabled={isOnline ? false : true}
                size="small"
                sx={{
                  borderRadius: 3, textTransform: "none",
                  // opacity:`${isOnline ? "100%" :"30%"}`,
                  // outline :2px || 3px|| 4px 
                  // opacity : 70 || 80 || 90
                  // outline: `3px solid #1D9BF0${isPaused ? "00" : "90"}`, outlineOffset: "4px"
                  // backgroundColor:`${isOnline ? "#1565C0":"#333"}`
                }}
                variant="contained"
                // color=""
              >
                {/* <AccessTimeIcon sx={{fontSize:"medium", mr:0.5, display:"block"}}/> */}
                {/* Hire  */}
                {/* $120 Month */}
                {/* {`$2.00/hr`} */}
                {/* Free */}
                {/* Join */}
                {isOnline ? "Join" : "Book"}
              </Button>
            </Link>
          </Box>
        </Stack>






        {/* #48CB8C best color for active user */}

        {/* bgcolor:"#333", "&:hover":{bgcolor:"#444"}  */}
      </Card>
    </Box>
  );
}




// CallCard.propTypes = {
//   user_name: PropTypes.string,
//   user_profetion: PropTypes.string,
//   user_profilePicture: PropTypes.string,
//   user_country: PropTypes.string,
//   user_country_flag: PropTypes.string,
//   user_followers: PropTypes.string,
//   user_accoutType: PropTypes.string,
//   user_about: PropTypes.string,
//   user_rating: PropTypes.string,
//   user_total_call: PropTypes.string,
//   user_perHourCost: PropTypes.string,
//   user_skills: PropTypes.string,
//   user_language: PropTypes.string,
//   key: PropTypes.string,
// };




