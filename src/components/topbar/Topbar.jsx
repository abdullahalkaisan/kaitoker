import { Avatar, Box, IconButton } from "@mui/material";
import Logo from "./others/Logo";
import NavMenu from "./others/NavMenu";
import { Link } from 'react-router-dom';

import { UilSearch, UilBars } from "@iconscout/react-unicons";
import MunitesAndMoneyPop from "./others/MunitesAndMoneyPop";
import Notification_section from "./notification/Notification_section";

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
        <IconButton sx={{ mx: 1, display: { lg: "none", xs: "flex" } }}>
          <UilBars />
        </IconButton>

        <Logo />
        <NavMenu />

        <Box display={"flex"}>
          <Box>
            {/* , bgcolor:"#F5FAFD"  */}

            <MunitesAndMoneyPop />

            <IconButton sx={{ display: { md: "none" } }}>
              <UilSearch />
            </IconButton>

            <Notification_section />

            <Link to="/profile">
            <IconButton sx={{ m: "0 10px" }}>
              <Avatar
                alt="Remy Sharp"
                src="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>
            </Link>



          </Box>
        </Box>
      </Box>
    </Box>
  );
}
