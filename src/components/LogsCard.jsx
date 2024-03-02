import { Avatar, AvatarGroup, Box, Button, IconButton, Typography } from "@mui/material";
import PeopleCard from "./conent/rightMenu/PeopleCard";
import TranslateIcon from '@mui/icons-material/Translate';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
// import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
// import { UilLetterJapaneseA } from '@iconscout/react-unicons'

import HistoryIcon from '@mui/icons-material/History';
import { useTheme } from "@emotion/react";

export default function LogsCard() {

  const theme = useTheme();

  const isDark = theme.palette.mode === "dark";


  return (
    <Box
      backgroundColor={isDark ? "#222" : "#fff"}
      height={"max-content"}
      marginBottom={2}
      border={"1px solid #00000020"}
      width={"90%"}
      borderRadius={2}
    >



      <Box display={"flex"} flexDirection={"column"} padding={3}>





        <Box>
          <Button
            style={{
              marginTop: 6,
              fontSize: "samll",
              textTransform: "none",
              backgroundColor: "#FFA50010",
            }}
            color="warning"
          >
            <HistoryIcon style={{ marginRight: 2.5, fontSize: "large" }} />4
            days 12 hours 45 minutes left
          </Button>
        </Box>

        <Box sx={{ width: "max-content", display: "flex", marginTop: 2 }}>
          <AvatarGroup max={4}>
            <Avatar
              alt="Remy Sharp"
              src="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a/ACg8ocK386pzE7Z-bSFqbGXHYVxxKt5pYh_OAnMnkKWDOPhNabI"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://lh3.googleusercontent.com/a/ACg8ocKjcLQnbqhz1e6GuIXL1IrBSg2pG_FSAtw-vO1ejOyW890"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://lh3.googleusercontent.com/a/ACg8ocKg4H0S4oUQl5TVLe72k5iueHshMcheBvx51rZ_jWm84s4"
            />
          </AvatarGroup>
        </Box>

        <Box display={"flex"} alignItems={"center"} marginTop={2}>
          <Box
            fontSize="smaller"
            color={"#777"}
            display={"flex"}
            alignItems={"center"}
          >
            <AccessTimeIcon sx={{ marginRight: 0.5 }} fontSize="smaller"/>
            30 minutes - 10:45 AM - 10/12/2024
          </Box>
        </Box>

        <Box display={"flex"} alignItems={"center"}>
          <Box
            fontSize="smaller"
            color={"#777"}
            display={"flex"}
            alignItems={"center"}
          >
            <TranslateIcon sx={{ marginRight: 0.5 }} fontSize="smaller" />
            English
          </Box>

          <Box>
            <Button color="success" size="small">
              $1.12
            </Button>
          </Box>
        </Box>




        <Typography style={{ padding: "10px", fontSize: "medium" }} variant="">
          {`Let's discuss about Javascript`}
        </Typography>




        <Box
          sx={{ display: "none", width: 1, mt: 3, justifyContent: "flex-end" }}
        >
          <Button
            color="error"
            size="small"
            style={{ backgroundColor: "#FF000005" }}
          >
            Reject
          </Button>
          <Box>
            <Button size="small" style={{ backgroundColor: "#1976D210" }}>
              Accept
            </Button>
          </Box>
        </Box>


        <Box textAlign={"end"}>
          <Button
              variant="contained"
              size="small"
              sx={{ borderRadius: 999, display:"" }}
            >
              Join
            </Button>
        </Box>



      </Box>
    </Box>
  );
}
