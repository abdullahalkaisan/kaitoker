import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Avatar, Badge, Box, Button, Card, CardActionArea, CardMedia, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Tooltip, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import RoomIcon from '@mui/icons-material/Room';
import TranslateIcon from '@mui/icons-material/Translate';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
    UilSkipForwardCircle,
    UilVideo,
    UilCommentMessage,
    UilUserPlus,
    UilPlusCircle
  
  } from '@iconscout/react-unicons'
import ChipsCustom from './ChipsCustom';
import AudioSlider_custom from './AudioSlider_custom';
import AboutList from '../../pages/ProfilePage/TabMenuProfile/AboutList';
import SubDetails from './SubDetails';
import AudioPlay_button from './AudioPlay_button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { 
  UilCalender,
  UilSun,
  UilMoneyWithdraw,
  UilLetterJapaneseA
} from '@iconscout/react-unicons'
import { usersDataLocal } from '../../usersDataLocal';
import { useEffect } from 'react';





export default function CallCardReel(props) {

  
  let currentUser = 8;

  const {
    userName,
    profession,
    avatar,
    hourRate,
    followers,
    rating,
    totalCall,
    flag, 
    gigLanguage, 
    languages, 
    country, 
    city, 
    skills,
    id
  } = usersDataLocal[currentUser];
  
  

  console.log(languages.join(", "));

    const theme = useTheme();

    const StyledBadge = styled(Badge)({
        '& .MuiBadge-badge': {

    // curve style 
          height:"15px",
          width:"15px",
          right: 15,
          bottom: 15,
          outline: `15px solid ${theme.palette.background.paper}`,




          

    // round style
          // height:"12px",
          // width:"12px",
          // right: 20,
          // bottom: 25,
          // outline: `8px solid ${theme.palette.background.paper}`,






          borderRadius:444,
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
          <CardActionArea sx={{ width: 150, 
            borderRadius:"100px 100px 10px 100px" 
            // borderRadius: 666 
            }}>
            <StyledBadge
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
              badgeContent={1}
              color="primary"
            >
              <Avatar
                alt={userName}
                src={avatar}
                sx={{ width: 150, height: 150, 
                  borderRadius:"100px 100px 60px 100px" 
                  // borderRadius:999
                }}
              />
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

            <IconButton color="primary" size="large">
              <ArrowBackIosIcon />
            </IconButton>

            <AudioPlay_button />

            <IconButton variant="contained" color="primary" size="large">
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

          <Box display={"flex"} width={300}  alignItems={"center"} justifyContent={"space-between"}> 

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
              <MoreVertIcon/>
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
              <IconButton color="primary" size="large">
                <UilUserPlus />
              </IconButton>
              <IconButton color="primary" size="large">
                <UilCommentMessage />
              </IconButton>
              <IconButton color="primary" size="large">
                <UilVideo />
              </IconButton>

              <Box>
                <Link to={"/callpage"}>
                  <Button
                    size="small"
                    sx={{ borderRadius: 2, textTransform: "none" }}
                    variant="contained"
                    color="primary"
                  >
                    {`$${hourRate}/hr`}
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>

          <Box
            width={1}
            pl={8}
            display={"flex"}
            flexDirection={"column"}
            alignContent={"flex-start"}
            justifyContent={"flex-start"}
          >
            <SubDetails
              user_followers={new Intl.NumberFormat("en-US", {
                useGrouping: true,
                notation: 'compact',
              }).format(followers)}
              user_rating={rating}
              // user_language={languages.join(", ")}
              justifyContent={"flex-start"}
              user_total_call={totalCall}
              // flag={flag}
            />

            <Typography
              sx={{
                color: "#777",
                display: "flex",
                alignItems: "center",
                width: 1,
              }}
              variant="subtitle1"
              mt={1}
              p={0}
              gutterBottom
            >
              <RoomIcon sx={{ fontSize: "medium", mr:0.5 }} />

              {`${city ? city + "," : ""} ${country}`}
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
              sx={{
                color: "#777",
                display: "flex",
                alignItems: "center",
                width: 1,
              }}
              variant="subtitle1"
              mt={0}
              p={0}
              gutterBottom
            >
              <TranslateIcon sx={{ fontSize: "medium", mr:0.5 }} />

              {languages.join(", ")}
            </Typography>
          </Box>

          <Box width={1} display={"flex"} justifyContent={"flex-start"}>

            <Box
              display={'flex'}
              bgcolor={"background.default"}
              color={"text.primary"}
              direction="row"
              justifyContent={"flex-start"}
              flexWrap={"wrap"}
              ml={2}
              mt={2}
              px={2}
              overflow={"auto"}
              //   sx={{
              //     maxHeight: { md: "120px", xs: "120px" },
              //     minHeight: { md: "120px", xs: "auto" },
              //   }}
            >
              {/* <CallCardDynamic user_skills={user_skills}/> */}


              {
                skills.map((skill) => <ChipsCustom key={id} size={"large"} label={skill} />)
              }


              {/* <ChipsCustom size={"large"} label="Javascript" />
              <ChipsCustom size={"large"} label="Node js" />
              <ChipsCustom size={"large"} label="React" />
              <ChipsCustom size={"large"} label="MongoDB" />
              <ChipsCustom size={"large"} label="UI/UX design" />
              <ChipsCustom size={"large"} label="UI/UX design" />
              <ChipsCustom size={"large"} label="UI/UX design" />
              <ChipsCustom size={"large"} label="UI/UX design" />
              <ChipsCustom size={"large"} label="UI/UX design" /> */}
            </Box>

          </Box>

          {/* <Typography my={2} mx={4} variant="body1" color="#666">
            Hey My name is Kaisan Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Distinctio, magni? Dolorem, aperiam neque pariatur
            dicta iure facilis aliquid odit ea.
          </Typography> */}
        </Box>
      </Box>
    </Card>
  );
}
