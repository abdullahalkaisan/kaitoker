import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Avatar, Badge, Box, Button, Card, CardActionArea,  IconButton, Skeleton, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import VerifiedIcon from '@mui/icons-material/Verified';

// import RoomIcon from '@mui/icons-material/Room';
// import TranslateIcon from '@mui/icons-material/Translate';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { 
    // UilInfoCircle,
    // UilPlay,
    // UilLocationPoint,
    // UilEllipsisH
    // UilRssAlt,
    // UilHeart,
    // UilStar,
    // UilLetterJapaneseA,
    // UilUserPlus,
    // UilPlus,
    // UilSkipForwardCircle,
    UilVideo,
    // UilCommentMessage,
    UilCommentLines,
    UilUserPlus,
    UilFavorite,
    UilCheck,
    UilUsersAlt,
    UilCheckCircle
    // UilMoneyBill
    // UilPlusCircle
  
  } from '@iconscout/react-unicons'
// import ChipsCustom from '../ChipsCustom';
import AudioSlider_custom from '../AudioSlider_custom';
// import AboutList from '../../../pages/ProfilePage/TabMenuProfile/AboutList';
// import SubDetails from '../SubDetails';
import AudioPlay_button from '../AudioPlay_button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import { 
//   UilCalender,
//   UilSun,
//   UilMoneyWithdraw,
//   UilLetterJapaneseA
// } from '@iconscout/react-unicons'
import { usersDataLocal } from '../../../usersDataLocal';
import CallCardReel_details from './CallCardReel_details';
import CallCardReelTap from './CallCardReel_Tap';
import { useEffect, useState } from 'react';
import { Tune } from '@mui/icons-material';




export default function CallCardReel() {

  const [currentUser, setCurrentUser] = useState(Math.floor(Math.random() * usersDataLocal.length) )
  const [isFollowing, setIsFollowing] =  useState(false);
  const [isFriend, setIsFriend] =  useState(false);
  const [isFevorate, setIsFevorate] =  useState(false);

  const [isLoading, setIsLoading] = useState(false)

  const {
    userName,
    profession,
    avatar,
    hourRate,
    isOnline,
    skills,
    isVarified
  } = usersDataLocal[currentUser];
  
  // Math.floor(Math.random() * usersDataLocal.length) 


  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 39) {
        setCurrentUser(Math.min(usersDataLocal.length - 1, currentUser + 1))
      } else if (event.keyCode === 37) {
        setCurrentUser(Math.max(0, currentUser - 1))
      }
    }

    // Attach event listener when the component mounts
    window.addEventListener('keyup', handleKeyPress);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('keyup', handleKeyPress);
    };

  }, [currentUser]);





    const theme = useTheme();

    const StyledBadge = styled(Badge)({
        '& .MuiBadge-badge': {

    // curve style 
          // height:"15px",
          // width:"15px",
          height:12,
          width:12,
          // right: 15,
          // bottom: 15,
          right: 22,
          bottom: 22,
          outline: `10px solid ${theme.palette.background.paper}`,


    // round style
          // height:"12px",
          // width:"12px",
          // right: 20,
          // bottom: 25,
          // outline: `8px solid ${theme.palette.background.paper}`,

          borderRadius:"10px",
          padding:"0"
        },
        });


  return (
    <Card variant="none" sx={{ height: 1, width: 800, mb: 2, mt: 5 }}>
      <Box
        width={1}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"start"}
      >
        <Box
          p={1.5}
          width={1}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <CardActionArea
            sx={ isOnline === "online" || isOnline === "busy" ?  {
              height:150,
              width: 150,
              borderRadius: "100px 100px 100px 100px",
            } : {
              height:150,
              width: 150,
              borderRadius: 999,
            }}
          >
            <StyledBadge
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
              badgeContent={isOnline === "online" || isOnline === "busy" ? 1 : 0}
              color={isOnline === "online" ? "info" : "warning"}
            >
              

              {isLoading ? <Skeleton variant="circular" width={150} height={150} />  : <Avatar
                src={avatar}
                sx={ isOnline === "online" || isOnline === "busy" ?  {
                  height:150,
                  width: 150,
                  // borderRadius: "100px 100px 50px 100px",
                  borderRadius: "100px 100px 100px 100px",
                } : {
                  height:150,
                  width: 150,
                  borderRadius: 999,
                }}
              />}
              
            </StyledBadge>
          </CardActionArea>
          {/* <CardActionArea style={{marginTop:10}}>
                    <Box>
                        <img style={{width:"400px", height:"150px", objectFit:"cover", borderRadius:"8px"}} src="https://cdn3.vectorstock.com/i/1000x1000/85/42/travel-social-media-add-banner-layout-vector-28638542.jpg" />
                    </Box>
                </CardActionArea> */}

          {/* width: 280,  */}
          <Box sx={{ width: 240, marginTop: 5 }}>
            <AudioSlider_custom />
          </Box>

          <Box
            display={"flex"}
            bgcolor={"background.default"}
            color={"text.primary"}
            flexDirection={"row"}
            width={300}
            m={"10px 0"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            {/* <IconButton color="primary" size="large">
              <UilPlusCircle />
            </IconButton> */}

            <IconButton onClick={() => setCurrentUser(Math.max(0, currentUser - 1))} color="primary" size="large">
              <ArrowBackIosIcon />
            </IconButton>

            <AudioPlay_button />

            <IconButton onClick={() => setCurrentUser(Math.min(usersDataLocal.length - 1, currentUser + 1))} variant="contained" color="primary" size="large">
              <ArrowForwardIosIcon />
            </IconButton>

            {/* <Box>
              <Link to={"/callpage"}>
                <Button
                  size="small"
                  sx={{ borderRadius: 2, textTransform: "none" }}
                  variant="contained"
                  color="primary"
                >
                  {`$${"2.24"}/hr`}
                </Button>
              </Link>
            </Box> */}
          </Box>
        </Box>

        <Box
          width={800}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          p={2}
        >
          {/* <Typography sx={{ color: "#999" }} variant="subtitle1">
            <Box display={"flex"} flexWrap={"wrap"}>
              <UilLocationPoint />
              <Box>{"Bangladesh"}</Box>

              <Tooltip title={"Bangladesh"} placement="top">
                <Box sx={{ display: "flex", alignItems: "center", px: 1 }}>
                  <img
                    style={{ borderRadius: 3 }}
                    src={`https://flagcdn.com/w20/${"bd"}.png`}
                  />
                </Box>
              </Tooltip>
            </Box>
          </Typography> */}

          {/* <List  >
            <ListItem >
                <ListItemIcon>
                  <UilLocationPoint />
                </ListItemIcon>
                <Box>
                  <ListItemText primary="Dhaka, Bangladesh" />
                </Box>
            </ListItem>
            <ListItem >
                <ListItemIcon>
                  <UilLetterJapaneseA />
                </ListItemIcon>
                <Box>
                  <ListItemText primary="Bengali, Hindi, English" />
                </Box>
            </ListItem>
            <ListItem >
                <ListItemIcon>
                  <UilCalender />
                </ListItemIcon>
                <ListItemText primary="1 year 4 months (21 Dec 2022)" />
            </ListItem>
          </List> */}

          <Box
            display={"flex"}
            width={300}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              display={"flex"}
              width={1}
              flexGrow={1}
              flexDirection={"column"}
              // alignItems={"center"}
              // ml={8}
            >
              <Typography
                style={{ marginTop: 25 }}
                variant="h5"
                fontWeight={"bold"}
              >
                {userName}
                {isVarified && (
                  <VerifiedIcon
                    sx={{ mx: 0.5, fontSize: "large", color: "#1D9BF0" }}
                  />
                )}


              </Typography>
              <Typography
                style={{ marginBottom: 5 }}
                fontSize={"large"}
                marginTop={-1}
                color={"#777"}
                variant="subtitle1"
              >
                {profession}
              </Typography>

              {/* <Box display={"flex"} alignItems={"center"} flexDirection={"row"}   >
            <Badge
                color="primary"
                variant="dot"
                sx={{margin:1.4}}
              />
            <Typography
              style={{ marginBottom: 5 }}
              fontSize={"large"}
              color={"#777"}
              variant="subtitle1"
            >
              Online now
            </Typography>
          </Box> */}
            </Box>
            <Box>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Box>
          </Box>

          <Box width={1} display={"flex"} justifyContent={"center"}>
            <Box
              display={"flex"}
              bgcolor={"background.default"}
              color={"text.primary"}
              flexDirection={"row"}
              width={300}
              // m={"10px 0"}
              mb={2}
              mx={2}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              // justifyContent={"center"}
            >
              <IconButton onClick={()=>{ setIsFollowing(!isFollowing)}} color={isFriend ? "warning" : isFollowing ? "" : "primary"   } size="large">
                {
                  isFollowing ? < UilCheckCircle /> : <UilUserPlus />
                }
                {/* <UilUsersAlt /> */}
              </IconButton>
              <IconButton onClick={()=>{setIsFevorate(!isFevorate)}} color={isFevorate ? "warning" : "primary"} size="large">
                <UilFavorite  />
              </IconButton>
              <IconButton color="primary" size="large">
                <UilCommentLines />
              </IconButton>
              <IconButton color="primary" size="large">
                <UilVideo />
              </IconButton>

              <Box>
                <Link to={"/callpage"}>
                  <Button
                    size="small"
                    sx={{ borderRadius: 2, textTransform: "none", marginLeft:2 }}
                    variant="contained"
                    color="primary"
                  >
                    {`$${hourRate}/hr`}
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>


          <CallCardReelTap 
            CallCardReel_details={<CallCardReel_details 
                                    usersDataLocal={usersDataLocal} 
                                    currentUser={currentUser} />}
            />





        </Box>
      </Box>
    </Card>
  );
}
