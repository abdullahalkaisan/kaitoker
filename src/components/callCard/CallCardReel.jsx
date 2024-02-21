import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Avatar, Badge, Box, Button, Card, CardActionArea, CardMedia, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Tooltip, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
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


export default function CallCardReel() {

    const theme = useTheme();

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
    <Card variant="outlined" sx={{ height: 1, width: 800, mb: 2 }}>
      <Box
        width={1}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"start"}
      >
        <Box p={1.5} width={1}>
          <CardActionArea>
            <Avatar
              alt="Remy Sharp"
              src={
                "https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"
              }
              sx={{ width: 1, height: "auto", borderRadius: 2 }}
            />
          </CardActionArea>
          {/* <CardActionArea style={{marginTop:10}}>
                    <Box>
                        <img style={{width:"400px", height:"150px", objectFit:"cover", borderRadius:"8px"}} src="https://cdn3.vectorstock.com/i/1000x1000/85/42/travel-social-media-add-banner-layout-vector-28638542.jpg" />
                    </Box>
                </CardActionArea> */}

<Box
            display={"flex"}
            width={1}
            flexGrow={1}
            flexDirection={"column"}
            alignItems={""}
            ml={4}
          >
            <Typography
              style={{ marginTop: 25 }}
              variant="h5"
              fontWeight={"bold"}
            >
            <Badge color="primary" variant="dot">
              Abdullah Al Kaisan
            </Badge>
            </Typography>
            <Typography
              style={{ marginBottom: 5 }}
              fontSize={"large"}
              marginTop={-1}
              color={"#777"}
              variant="subtitle1"
            >
              Web Developer
            </Typography>
          </Box>






          <Box sx={{ px: 4 }}>
            <AudioSlider_custom />
          </Box>

          <Stack
            sx={{ display: "" }}
            bgcolor={"background.default"}
            color={"text.primary"}
            flexDirection={"row"}
            width={1}
            m={"10px 0"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <IconButton color="primary" size="large">
              <UilPlusCircle />
            </IconButton>

            <IconButton color="primary" size="large">
              <ArrowBackIosIcon />
            </IconButton>

            <AudioPlay_button />

            <IconButton variant="contained" color="primary" size="large">
              <ArrowForwardIosIcon />
            </IconButton>

            <Box>
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
            </Box>
          </Stack>
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


          <SubDetails
            user_followers={32}
            user_rating={32}
            user_language={"English"}
            user_total_call={145}
          />
          <Typography my={2} mx={4} variant="body1" color="#666">
            Hey My name is Kaisan Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Distinctio, magni? Dolorem, aperiam neque pariatur
            dicta iure facilis aliquid odit ea.
          </Typography>

          <Stack
            bgcolor={"background.default"}
            color={"text.primary"}
            direction="row"
            justifyContent={"center"}
            flexWrap={"wrap"}
            px={2}
            overflow={"auto"}
            //   sx={{
            //     maxHeight: { md: "120px", xs: "120px" },
            //     minHeight: { md: "120px", xs: "auto" },
            //   }}
          >
            {/* <CallCardDynamic user_skills={user_skills}/> */}

            <ChipsCustom label="Javascript" />
            <ChipsCustom label="Node js" />
            <ChipsCustom label="React" />
            <ChipsCustom label="MongoDB" />
            <ChipsCustom label="UI/UX design" />
            <ChipsCustom label="UI/UX design" />
            <ChipsCustom label="UI/UX design" />
            <ChipsCustom label="UI/UX design" />
            <ChipsCustom label="UI/UX design" />
          </Stack>
        </Box>
      </Box>
    </Card>
  );
}
