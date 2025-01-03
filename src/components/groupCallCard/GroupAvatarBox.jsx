import { Avatar, Badge, Box, CardActionArea, Divider, IconButton,  List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu } from '@mui/material';
import { useState } from 'react'
import AudioPlay_button from '../callCard/AudioPlay_button';
import AudioSlider_custom from '../callCard/AudioSlider_custom';
import SubDetails from '../callCard/SubDetails';
import PeopleCard from '../conent/rightMenu/PeopleCard';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import RoomIcon from '@mui/icons-material/Room';

import { 
    UilLocationPoint, 
    UilCommentMessage,
    UilUserPlus,
    UilCalender,
    UilLetterJapaneseA,
} from '@iconscout/react-unicons'
import ChipsCustom from '../callCard/ChipsCustom';


export default function GroupAvatarBox({followers, avatarUrl, flag}) {

 const skills = [
    { name: "Javascript", icon: "https://img.icons8.com/color/48/adobe-premiere-pro--v1.png" },
    { name: "React", icon: "https://img.icons8.com/color/48/adobe-premiere-pro--v1.png" },
    { name: "MongoDB", icon: "https://img.icons8.com/color/48/adobe-premiere-pro--v1.png" },
    { name: "Photoshop", icon: "https://img.icons8.com/color/48/adobe-premiere-pro--v1.png" },
    { name: "Premiere pro", icon: "https://img.icons8.com/color/48/adobe-premiere-pro--v1.png" },
    { name: "Graphic design", icon: "https://img.icons8.com/color/48/adobe-premiere-pro--v1.png" },
    { name: "UX UI Design", icon: "https://img.icons8.com/color/48/adobe-premiere-pro--v1.png" },
    { name: "English", icon: "https://img.icons8.com/color/48/adobe-premiere-pro--v1.png" },
  ]



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
          borderRadius:3,
          border:"1px solid #00000020",


          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            // ml: -0.5,
            // mr: 1,
          },
          // "&::before": {
          //   content: '""',
          //   display: "block",
          //   position: "absolute",
          //   top: 0,
          //   left: 30,
          //   width: 10,
          //   height: 10,
          //   bgcolor: "background.paper",
          //   transform: "translateY(-50%) rotate(45deg)",
          //   zIndex: 0,
          // },
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
                avatar
                avatarUrl={avatarUrl}
                accountType={"verified"}
                title={"Abdullah Al Kaisan"}
                subTitle={"CEO at Kaitoker"}
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
              flag={flag}
              Avatar
            />





        {/* <Divider sx={{ m: 2,  }} /> */}

          <Box sx={{width:300, marginTop:2}}>
            {skills.map((skill, index) => (
                <ChipsCustom key={index} hashTagStyle={true} label={skill.name} />
              ))}
          </Box>


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
              // justifyContent={"space-evenly"}
              justifyContent={"space-between"}
              // justifyContent={"center"}
            >

              {/* <IconButton color="primary" size="large">
                <UilUserPlus />
              </IconButton> */}

              <IconButton color="primary" size="large">
                <UilUserPlus />
              </IconButton>

              <AudioPlay_button/>

              <IconButton color="primary" size="large">
                <UilCommentMessage />
              </IconButton>



            </Box>



      </Box>

    </Menu>


    <CardActionArea
      sx={{
        // outline:"2px solid orangered", 
        // borderRadius:"100px 100px 50px 100px"
      }}
      onContextMenu={(e) => {
        e.preventDefault()
        handleClick(e);
      }}
      onClick={handleClick}
    >

<BadgeFollowers 
    // badgeContent={followers}
    badgeContent={followers}
    max={99999} 
    color="error"
    anchorOrigin={{
      vertical: "",
      horizontal: "top",
    }}
    >


      <StyledBadge

        // badgeContent={
        //   <img
        //     style={{
        //       display: "flex",
        //       height: "fit-content",
        //       width: "fit-content",
        //       objectFit: "cover",
        //     }}
        //     src={`https://flagcdn.com/w20/${flag}.png`}
        //   />
          
        // }

        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={avatarUrl}
          sx={{ width: 70, height: 70, 

            // borderRadius:9999
            // 7 8 
            borderRadius:8
            // borderRadius:"100px 100px 50px 100px"
          }}
        />
{/* {isPro &&
<img style={{height:24, position:"absolute", bottom:0}} src="https://media.tenor.com/F3xUrsjCSzUAAAAi/fire.gif" alt="can't load image" />
} */}

{/* kire shalar pola thikmoto kam koros na ken */}  

      </StyledBadge>
    </BadgeFollowers>
    </CardActionArea>
  </Box>
  )
}
