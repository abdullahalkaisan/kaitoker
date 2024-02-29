import { Avatar, Badge, Box, Button, CardActionArea, Divider, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, Tooltip, Typography } from '@mui/material';
import { useState } from 'react'
import AudioPlay_button from '../callCard/AudioPlay_button';
import AudioSlider_custom from '../callCard/AudioSlider_custom';
import SubDetails from '../callCard/SubDetails';
import PeopleCard from '../conent/rightMenu/PeopleCard';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RoomIcon from '@mui/icons-material/Room';

import { 
    UilLocationPoint, 
    UilCommentMessage,
    UilUserPlus,
    UilCalender,
    UilLetterJapaneseA,
} from '@iconscout/react-unicons'


export default function GroupAvatarBox({followers, avatarUrl, flag}) {



    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    const theme = useTheme();
    const themeUse = theme.palette.mode;

    const StyledBadge = styled(Badge)({
        '& .MuiBadge-badge': {
          height:10,
          width:10,
        //   borderRadius:3,
          borderRadius:3,
          right: 15,
          bottom: 8,
        //   4px solid 
          outline: `4px solid ${theme.palette.background.paper}`,
          padding:"0",
          boxShadow:"1px 1px 10px black"
        },
        });




    const BadgeFollowers = styled(Badge)({
        '& .MuiBadge-badge': {
          // color:`${themeUse === "dark" ? "#fff" : "#fff" }`,
          // backgroundColor:`${themeUse === "dark" ? "#3335" : "#3335" }`,
          color:"#fff",
          backgroundColor:"#3335",
          backdropFilter: 'blur(5px)'
          // borderRadius:3,
          // outline: `4px solid ${theme.palette.background.paper}`,
        },
        });


  return (


    <Box
      sx={{
      bgcolor: `${themeUse === "dark" ? "#222" : "#e1e1e1"}`,
      borderRadius: "999px",
      // border: `5px solid ${themeUse === "dark" ? "#333" :"#f1f1f1"}`,
      // border: `4px dotted ${themeUse === "dark" ? "#333" :"#1976d2"}`,
      border: `4px dashed ${themeUse === "dark" ? "#" : "#"}`,
      width: 70,
      height: 70,
      mr: 1,
    }}
  >

    {/* <MenuAvatarClick anchorEl={anchorEl} handleClose={handleClose} id={"account-menu"}/> */}

    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      // onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          // backgroundColor:"#fff1",
          // backdropFilter:"blur(20px)",
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            left: 30,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "left", vertical: "top" }}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
    >
      <Box p={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >

            <PeopleCard
              title={"Abdullah Al Kaisan"}
              subTitle={"CEO at Kaitoker"}
              accountType={"verified"}
            />

          <IconButton>
            <MoreVertIcon />
          </IconButton>



        </Box>


        <SubDetails
              user_followers={134}
              user_rating={50}
              user_language={"English"}
              user_total_call={124}
            />




        <Divider sx={{ mt: 2, display: "none" }} />

        <nav
          style={{ display: "none" }}
          aria-label="main mailbox folders"
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <UilLocationPoint />
                </ListItemIcon>
                <ListItemText size="small" primary="Bangladesh" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <UilLetterJapaneseA />
                </ListItemIcon>
                <Box>
                  <ListItemText primary="Bengali, Hindi, English" />
                </Box>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <UilCalender />
                </ListItemIcon>
                <ListItemText primary="21 Dec 2022 (1y 4m)" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
      <Box sx={{px:3}}>
          <AudioSlider_custom/>
          <Box
              display={"flex"}
              bgcolor={"background.default"}
              color={"text.primary"}
              flexDirection={"row"}
              // width={300}
              // m={"10px 0"}
              mb={2}
              mx={2}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              // justifyContent={"center"}
            >
              {/* <IconButton color="primary" size="large">
                <UilUserPlus />
              </IconButton> */}

              <AudioPlay_button/>

            </Box>



      </Box>

    </Menu>


    <CardActionArea
      onContextMenu={(e) => {
        e.preventDefault()
        handleClick(e);
      }}
      onClick={handleClick}
    >

<BadgeFollowers 
    badgeContent={followers}
    max={99999} 
    color="error"
    anchorOrigin={{
      vertical: "",
      horizontal: "top",
    }}
    >


      <StyledBadge
        badgeContent={
          <img
            style={{
              display: "flex",
              height: "fit-content",
              width: "fit-content",
              // height:"15px",
              // width:"15px",
              // borderRadius:9,
              // border:"4px solid #fff",
              objectFit: "cover",

              // borderRadius: "0px",
            }}
            src={`https://flagcdn.com/w20/${flag}.png`}
          />
        }
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={avatarUrl}
          sx={{ width: 70, height: 70, borderRadius:9999 }}
        />
      </StyledBadge>
    </BadgeFollowers>
    </CardActionArea>
  </Box>
  )
}
