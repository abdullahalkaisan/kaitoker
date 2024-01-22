import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Avatar, Badge, Box, Button, Card, CardActionArea, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, Typography } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TranslateIcon from '@mui/icons-material/Translate';
import { UilVideoSlash } from '@iconscout/react-unicons'
import { useState } from "react";
import { 
    UilLocationPoint, 
    UilCalender,
    UilLetterJapaneseA
} from '@iconscout/react-unicons'
import PeopleCard from "./conent/rightMenu/PeopleCard";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import SubDetails from "./callCard/SubDetails";

export default function GroupCallCard() {


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
          borderRadius:2,
          right: 15,
          bottom: 8,
        //   4px solid 
          outline: `3px solid ${theme.palette.background.paper}`,
          padding:"0",
          boxShadow:"1px 1px 10px black"
        },
        });





  return (
    <Card
      variant="outlined"
      sx={{
        width: { md: 340, xs: 1 },
        height: { md: "max-content", xs: 1 },
        borderRadius: { md: 2, xs: 0 },
        m: { md: 1, xs: 0 },
        mb: { xs: 1 },
        p: 2,
      }}
      borderRadius={1}
      m={2}
    >
      <Box>
        <Typography mb={2} variant="body1" color="#666">
          Reading..
        </Typography>
        {/* <Chip label="Javascript"></Chip> */}
      </Box>

      <Box width={"100%"} display={"flex"} justifyContent={"center"}>
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            justifyContent: "space-evenly",
          }}
        >
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
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              // onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
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
                    avatar={false}
                    badge={true}
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
            </Menu>

            <CardActionArea onClick={handleClick}>
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
                    src="https://flagcdn.com/w20/in.png"
                  />
                }
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={
                    "https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"
                  }
                  sx={{ width: 70, height: 70 }}
                />
              </StyledBadge>
            </CardActionArea>
          </Box>

          <Box
            sx={{
              bgcolor: `${themeUse === "dark" ? "#222" : "#e1e1e1"}`,
              borderRadius: "999px",
              border: `4px dashed ${themeUse === "dark" ? "#" : "#"}`,
              width: 70,
              height: 70,
              mr: 1,
            }}
          >
            <CardActionArea>
              <StyledBadge
                badgeContent={
                  <img
                    style={{
                      display: "flex",
                      height: "fit-content",
                      width: "fit-content",
                      objectFit: "cover",
                      borderRadius: "0px",
                    }}
                    src="https://flagcdn.com/w20/us.png"
                  />
                }
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  sx={{ width: 70, height: 70 }}
                />
              </StyledBadge>
            </CardActionArea>
          </Box>

          <Box
            sx={{
              borderRadius: "999px",
              border: `2px dotted ${
                themeUse === "dark" ? "skyblue" : "#1976d2"
              }`,
              width: 70,
              height: 70,
              mr: 1,
            }}
          ></Box>

          <Box
            sx={{
              borderRadius: "999px",
              border: `2px dotted ${
                themeUse === "dark" ? "skyblue" : "#1976d2"
              }`,
              width: 70,
              height: 70,
              mr: 1,
            }}
          ></Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 3,
          mx: 2,
        }}
      >
        <Box>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>

          <IconButton sx={{ borderRadius: 2 }} size="small">
            <TranslateIcon fontSize="14px" />
            <Box sx={{ fontSize: "medium", ml: 0.2 }}>English</Box>
          </IconButton>

          <IconButton>
            <UilVideoSlash />
          </IconButton>
        </Box>

        <Box>
          <Button variant="contained" size="small" sx={{ borderRadius: 999 }}>
            Join
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
