import { Avatar, Box, IconButton, Stack } from "@mui/material";
import Logo from "./others/Logo";
import NavMenu from "./others/NavMenu";
// import { Link } from 'react-router-dom';

import { UilSearch, UilBars } from "@iconscout/react-unicons";
import MunitesAndMoneyPop from "./others/MunitesAndMoneyPop";
import Notification_section from "./notification/Notification_section";

export default function Navbar() {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Stack
        sx={{ p: 0 }}
        direction={"row"}
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton sx={{ mx: 1, display: { lg: "none", xs: "flex" } }}>
          <UilBars />
        </IconButton>

        <Logo />
        <NavMenu />

        <Stack>
          <Box>
            {/* , bgcolor:"#F5FAFD"  */}

            <MunitesAndMoneyPop />

            <IconButton sx={{ display: { md: "none" } }}>
              <UilSearch />
            </IconButton>

            <Notification_section />

            {/* <Link to="/profile"> */}
            <IconButton sx={{ m: "0 10px" }}>
              <Avatar
                alt="Remy Sharp"
                src="https://lh3.googleusercontent.com/a/AAcHTtf9QKmULxbKZfhBo3i_oCrpURXUixIwJGHkn9UjIfk8QC0"
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>
            {/* </Link> */}
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
