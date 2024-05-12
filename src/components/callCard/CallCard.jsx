// import styled from "@emotion/styled";
import { Avatar, Badge, Box, Button, Card, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { PropTypes } from 'prop-types';
import RoomIcon from '@mui/icons-material/Room';

import {
  // UilInfoCircle,
  // UilPlay,
  // UilLocationPoint,
  UilUserPlus,
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

// import ChipsCustomDynamic from "./ChipsCustomDynamic";
// import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
// import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
// import KeyIcon from '@mui/icons-material/Key';
// import LoopIcon from '@mui/icons-material/Loop';



export default function CallCard(props) {

  const theme = useTheme();
  const isDark = theme.palette.mode==="dark";

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
    // id
  } = props.item;




  const StyledBadge = styled(Badge)({
    '& .MuiBadge-badge': {


      // curved style
      height: "10px",
      width: "10px",
      right: 8,
      bottom: 8,
      outline: `8px solid ${theme.palette.background.paper}`,


      // round shape 
      // height:"8px",
      // width:"8px",
      // outline: `4px solid ${theme.palette.background.paper}`,
      // right: 10,
      // bottom: 10,


      borderRadius: 999,
      padding: "0"
    },
  });


  const avatarSize = 70;

  return (
    <Box
      // bgcolor={"yellow"} 
      sx={{ marginBottom: { md: 0, xs: 1 } }}>
      <Card
        variant=""

        sx={{
          width: { md: 340, xs: 1 },
          // width:"auto",
          height: { md: "auto", xs: 1 },
          borderRadius: { md: 2, xs: 2 },
          m: { md: 2, xs: 0 },
          p: 2
        }}
        borderRadius={1}
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
            <Link to={`/${unique_username}`}>
              <IconButton aria-label="delete" size="small">
                <StyledBadge
                  color={isOnline === "online" ? "info" : "warning"}
                  badgeContent={
                    isOnline === "online" || isOnline === "busy" ? 1 : 0
                  }
                  variant="dot"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  {/* 110  */}
                  <Avatar
                    src={avatar}
                    sx={
                      isOnline === ""
                        ? { width: avatarSize, height: avatarSize, borderRadius: 999 }
                        : { width: avatarSize, height: avatarSize, borderRadius: "100px 100px 10px 90px" }
                    }
                  />
                </StyledBadge>
              </IconButton>
            </Link>
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
                color: `${isDark? "#fff" : "#333"}`,
                "&:visited": {
                  color: `${isDark? "#fff" : "#333"}`,
                },
              }}
              to={`/${unique_username}`}
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
                <IoMdInfinite style={{ marginLeft: 2, color: "#33333350" }} />
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
            user_followers={new Intl.NumberFormat("en-US", {
              useGrouping: true,
              notation: "compact",
            }).format(followers)}
            user_rating={rating}
            user_language={"En"}
            sinceTime="1.2y"
            justifyContent={"flex-start"}
            user_total_call={new Intl.NumberFormat("en-US", {
              useGrouping: true,
              notation: "compact",
            }).format(totalCall)}
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




{/* 
pro user functonality 
user can add 5 skills 
pro user can add 10 skills

*/}
        <Box
          // display={"none"}
          bgcolor={"background.default"}
          color={"text.primary"}
          direction="row"
          // justifyContent={"center"}
          flexWrap={"wrap"}
          px={2}
          mt={2}
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
          {/* <ChipsCustom hashTagStyle={true} label="Javascript" />
          <ChipsCustom hashTagStyle={true} label="Node js" />
          <ChipsCustom hashTagStyle={true} label="React" />
          <ChipsCustom hashTagStyle={true} label="MongoDB" />
          <ChipsCustom hashTagStyle={true} label="Photoshop" />
          <ChipsCustom hashTagStyle={true} label="Video editor" />
          <ChipsCustom hashTagStyle={true} label="Premire Pro" />
          <ChipsCustom hashTagStyle={true} label="Graphics designer" />
          <ChipsCustom hashTagStyle={true} label="Mern stack developer" /> */}
        </Box>

        <Box sx={{
          px: 4,
          // display:"none" 
        }}>
          <AudioSlider_custom />
        </Box>

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
            <UilInfoCircle/>
          </IconButton> */}

          <IconButton color="primary">
            {/* <UilHeart/> */}
            {/* <UilStar/> */}
            {/* <UilUserPlus/> */}
            {/* <UilPlus/> */}
            <UilUserPlus />
          </IconButton>

          <AudioPlay_button />

          {/* <IconButton color="primary" size="large">
              <UilVideo />
          </IconButton> */}

          <Box>
            {/* bgcolor:"#333", color:"#fff", "&:hover":{bgcolor:"#444"}  */}

            <Link to={"/callpage"}>
              <Button
                size="small"
                sx={{ borderRadius: 2, textTransform: "none" }}
                variant="contained"
                color="primary"
              >
                {/* <AccessTimeIcon sx={{fontSize:"medium", mr:0.5, display:"block"}}/> */}
                {/* Hire  */}
                {/* $120 Month */}
                {/* {`$${hourRate}/hr`} */}
                Call
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




CallCard.propTypes = {
  user_name: PropTypes.string,
  user_profetion: PropTypes.string,
  user_profilePicture: PropTypes.string,
  user_country: PropTypes.string,
  user_country_flag: PropTypes.string,
  user_followers: PropTypes.string,
  user_accoutType: PropTypes.string,
  user_about: PropTypes.string,
  user_rating: PropTypes.string,
  user_total_call: PropTypes.string,
  user_perHourCost: PropTypes.string,
  user_skills: PropTypes.string,
  user_language: PropTypes.string,
  key: PropTypes.string,
};




