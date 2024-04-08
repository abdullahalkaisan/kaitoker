import { Avatar, Badge, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Logo from "./others/Logo";
import NavMenu from "./others/NavMenu";
import { Link } from 'react-router-dom';

import {
  UilSearch,
  // UilBars,
  UilHistory,
  UilBell,
  UilCommentLines,
  // UilSlidersVAlt
} from "@iconscout/react-unicons";

import MunitesAndMoneyPop from "./others/MunitesAndMoneyPop";
import Notification_section from "./notification/Notification_section";
import React, { useState } from "react";
import Topbar_mobile_sideNav from "./Topbar_mobile_sideNav";



export default function TopBar() {


  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Box
        sx={{ p: 0 }}
        justifyContent="space-between"
        alignItems="center"
        display={"flex"}
        flexDirection={"row"}
      >
        {/* <IconButton sx={{ 
          mx: 1, 
          display: { lg: "none", xs: "flex" } }}>
          <UilBars />
          <UilSlidersVAlt/>
        </IconButton> */}
        <Box sx={{ display: { md: "none" } }}>
          <MunitesAndMoneyPop />
        </Box>

        <Logo />
        <NavMenu />

        <Box display={"flex"}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* , bgcolor:"#F5FAFD"  */}


            <IconButton sx={{ display: { md: "none" } }}>
              <UilSearch />
            </IconButton>

            <Box sx={{ display: { md: "flex", xs: "none" } }}>
              <MunitesAndMoneyPop />
            </Box>

            <Notification_section />

            {/* <IconButton sx={{ display: { md: "" } }}>
              <Badge badgeContent={10} max={9} color="error">
                <UilBell />
              </Badge>
            </IconButton> */}

            <IconButton sx={{ display: { md: "none" } }}>
              <Badge badgeContent={40} max={9} color="error">
                <UilHistory />
              </Badge>
            </IconButton>





            <Link to="/profile">
              <IconButton sx={{ m: "0 10px", display:{md:"flex", xs:"none"} }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"
                  sx={{ width: 32, height: 32 }}
                />
              </IconButton>
            </Link>

          <Topbar_mobile_sideNav />





          </Box>
        </Box>
      </Box>
    </Box>
  );
}
