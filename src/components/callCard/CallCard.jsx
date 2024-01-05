// import styled from "@emotion/styled";
import { Avatar, Badge, Box, Button, Card, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { PropTypes } from 'prop-types';



import { 
  // UilInfoCircle,
  // UilPlay,
  UilLocationPoint,
  // UilEllipsisH
  // UilRssAlt,
  // UilHeart,
  // UilStar,
  // UilLetterJapaneseA,
  // UilUserPlus,
  // UilPlus,
  UilPlusCircle

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
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import TranslateIcon from '@mui/icons-material/Translate';
// import RssFeedIcon from '@mui/icons-material/RssFeed';
import styled from "@emotion/styled";
// import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import DoneIcon from '@mui/icons-material/Done';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
// import CableIcon from '@mui/icons-material/Cable';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
// import CallCardDynamic from "./CallCardDynamic";
import AudioPlay_button from "./AudioPlay_button";
import AudioSlider_custom from "./AudioSlider_custom";
import ChipsCustom from "./ChipsCustom";

// import ChipsCustomDynamic from "./ChipsCustomDynamic";
// import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
// import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
// import KeyIcon from '@mui/icons-material/Key';
// import LoopIcon from '@mui/icons-material/Loop';



export default function CallCard(props) {

  const theme = useTheme();

  // const PropKeys = Object.keys(props).join();
  // console.log(typeof PropKeys);



  const {
    // id, 
    user_name, 
    user_profetion, 
    user_profilePicture, 
    user_country, 
    user_country_flag, 
    user_followers, 
    user_accoutType, 
    user_about, 
    user_rating, 
    user_total_call, 
    user_perHourCost, 
    // user_skills, 
    user_language
} = props;

  








  const StyledBadge = styled(Badge)({
  '& .MuiBadge-badge': {
    height:"10px",
    width:"10px",
    borderRadius:999,
    right: 15,
    bottom: 15,
    outline: `4px solid ${theme.palette.background.paper}`,
    padding:"0"
  },
  });



  return (



<Box  >
    <Card variant="outlined" 
    sx={{
      width:{md:340, xs:1}, 
      height:{md:"auto", xs:1}, 
      borderRadius:{md:2, xs:0}, 
      m:{md:1, xs:0},
      mb:{xs:1}
      }} 
      borderRadius={1} m={2}>
      


          <Box  bgcolor={"background.default"}  sx={{display:'flex', justifyContent:"center", m:1}}>
            
            <Link to={"./profile"}>
              <IconButton aria-label="delete" size="small">
                <StyledBadge
                  color='info'
                  badgeContent={1}
                  variant="dot"   
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={user_profilePicture}
                    sx={{ width: 110, height: 110 }}
                  />
                </StyledBadge>

              </IconButton>
            </Link>
          </Box>




        <Box  bgcolor={"background.default"} color={"text.primary"} sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"100%"}}>
          
          <Link style={{
            textDecoration:"none", 
            color:`${theme.palette.mode === "light"? "#333" : "#fff"}`, 
            '&:visited': { color: `${theme.palette.mode === "light"? "#333" : "#fff"}`,}

          }} to={"/profile"}>


            <Typography sx={{ display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", width:"max-content", textDecoration:"none",   "&:hover":{textDecoration:"underline"}}} textAlign={"center"} fontWeight={"bold"} variant="h6" gutterBottom>
            {user_name}

            {  user_accoutType === "verified" ? <VerifiedUserIcon sx={{mx:0.5, fontSize:"large", color:"#555"}}/>: ""
            || user_accoutType === "vip" ? <VerifiedIcon sx={{mx:0.5, fontSize:"large", color:"#1D9BF0"}} /> : ""
            || user_accoutType === "pro" ? <VerifiedUserIcon sx={{mx:0.5, fontSize:"large", color:"#F97316"}} /> : ""
            }
              
              
            </Typography>
          </Link>

          <Typography sx={{color:"#777"}} textAlign={"center"} variant="subtitle1" mt={-2}  p={0} gutterBottom>
            {user_profetion}
          </Typography>

          <Typography sx={{color:"#999", mt:"-5px"}} textAlign={"center"} variant="subtitle1" mt={-2}  p={0} gutterBottom>
            <Stack flexWrap={"wrap"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
            <UilLocationPoint/>
            <Box>
              {user_country}
            </Box>

            <Tooltip title={user_country} placement="top">
              <Box sx={{display:"flex", alignItems:"center", px:1}}>
              {/* , border:"1px solid #ebebeb"  */}
                <img style={{borderRadius:3}} src={`https://flagcdn.com/w20/${user_country_flag}.png`} />
              </Box>
            </Tooltip>



            <Box sx={{display:"none", alignItems:"center", pr:1}}>
              <TranslateIcon sx={{fontSize:"medium"}}/>
              {user_language}
            </Box>

            </Stack>

          </Typography>

        </Box>

        <Stack  bgcolor={"background.default"} color={"text.primary"} fontSize={"medium"} mb={0.5} fontWeight={"boldd"} sx={{color:"#777"}} flexDirection={"row"} justifyContent={"center"} pl={0} pt={2} pb={1} alignItems={"center"} >
          <Box sx={{display:"flex", alignItems:"center", pr:1}}> 
            <RssFeedRoundedIcon sx={{fontSize:"medium"}}/> 
            {user_followers}
          </Box>
          <Box sx={{display:"flex", alignItems:"center", pr:1}}>
              <StarIcon sx={{fontSize:"medium", color:"#25c600"}} />
            <Box sx={{fontWeight:"bold", pr:0.5, color:"#25C600"}}>
              {`${user_rating}%`}
            </Box>
            {`(${user_total_call})`}
            </Box>

            <Box sx={{display:"flex", alignItems:"center", pr:1}}>
              <TranslateIcon sx={{fontSize:"medium"}}/>
              {user_language}
            </Box>


          {/* <Box sx={{display:"flex", alignItems:"center", pr:1, color:"#16a34a", fontWeight:"bold"}}>
            $246/hr
          </Box> */}


        </Stack>


          <Box display={"none"}>
            <Typography 
            variant="body2" 
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              color:"#777",
              px:3
            }} gutterBottom>
              {user_about}
            </Typography>
          </Box>

          <Stack 
            bgcolor={"background.default"} 
            color={"text.primary"} 
            direction="row" 
            justifyContent={"center"} 
            flexWrap={"wrap"} 
            px={2}
            overflow={"auto"}
            sx={{
              maxHeight:{md:"80px", xs:"80px"},
              minHeight:{md:"80px", xs:"auto"},
            }}
          >

            {/* <CallCardDynamic user_skills={user_skills}/> */}
            
            <ChipsCustom label="Javascript"/>
            <ChipsCustom label="Node js"/>
            <ChipsCustom label="React"/>
            <ChipsCustom label="MongoDB"/>
            <ChipsCustom label="UI/UX design"/>
            <ChipsCustom label="UI/UX design"/>
            <ChipsCustom label="UI/UX design"/>
            <ChipsCustom label="UI/UX design"/>
            <ChipsCustom label="UI/UX design"/>


          </Stack>



        <Box sx={{px:4,}}>
            <AudioSlider_custom/>
        </Box>




        
        <Stack sx={{display:""}}  bgcolor={"background.default"} color={"text.primary"} flexDirection={"row"} m={"10px 0"} alignItems={"center"} justifyContent={"space-evenly"}>
          
          {/* <IconButton color="info">
            <UilInfoCircle/>
          </IconButton> */}

          <IconButton color="primary">
            {/* <UilHeart/> */}
            {/* <UilStar/> */}
            {/* <UilUserPlus/> */}
            {/* <UilPlus/> */}
            <UilPlusCircle/>
          </IconButton>




          <AudioPlay_button/>






          <Box>
          {/* bgcolor:"#333", color:"#fff", "&:hover":{bgcolor:"#444"}  */}
            <Button size="small" sx={{borderRadius:2, textTransform:"none"}} variant="contained" color="primary">
              {/* <AccessTimeIcon sx={{fontSize:"medium", mr:0.5, display:"block"}}/> */}
              {/* Hire  */}
              {/* $120 Month */}
              {`$${user_perHourCost}/hr`}
            </Button>
          </Box>
        </Stack>


        {/* #48CB8C best color for active user */}

        {/* bgcolor:"#333", "&:hover":{bgcolor:"#444"}  */}


    </Card>
</Box>



  )
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
  user_perHourCost : PropTypes.string,
  user_skills: PropTypes.string,
  user_language: PropTypes.string,
  key: PropTypes.string,
};




