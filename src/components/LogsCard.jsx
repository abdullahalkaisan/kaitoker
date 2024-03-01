import { Box, Button, IconButton, Typography } from "@mui/material";
import PeopleCard from "./conent/rightMenu/PeopleCard";
// import TranslateIcon from '@mui/icons-material/Translate';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
// import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
// import { UilLetterJapaneseA } from '@iconscout/react-unicons'

import HistoryIcon from '@mui/icons-material/History';
import { useTheme } from "@emotion/react";

export default function LogsCard() {

  const theme = useTheme();

  const isDark = theme.palette.mode === "dark";


  return (
    <Box backgroundColor={isDark ? "#333" : "#fff"} height={"max-content"} marginBottom={2} border={"1px solid #00000020"} width={"90%"} borderRadius={2}>
      <Box display={"flex"} flexDirection={"column"} padding={3}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
          flexDirection={"row"}
        >
          <PeopleCard
            badge={1}
            // flag={"bd"}
            avatar={1}
            avatarUrl={
              "https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"
            }
            title={"Abdulah Al Kaisan"}
            subTitle="Web developer"
          />
          <Button disabled variant="contained" size="small" sx={{ borderRadius: 999 }}>
            Join
          </Button>
        </Box>

        <Box display={"flex"} alignItems={"center"} marginTop={2}>


        {/* backgroundColor:"#F5F5F5"  */}
        {/* marginRight:1  */}
        <Box>
          <IconButton  sx={{ borderRadius: 2,  }} size="small">
            {/* <AccessTimeIcon fontSize="14px" /> */}
            <Box sx={{ fontSize: "medium", display: "flex", ml: 0.2 }}>
              {/* <i className="fi fi-rr-clock-three"></i> */}
              <Typography  variant="caption">
              15 Minutes - 1/2/2024
              </Typography>
            </Box>
          </IconButton>
        </Box>
  
        <Box>
          <Button color="success" size="small">$0.14</Button>
        </Box>
        </Box>
            <Typography style={{padding:"10px", fontSize:"large"}} variant="body" >
              {`Let's discuss about Javascript`}
            </Typography>

        <Box>

        <Button style={{fontSize:"samll", textTransform:"none", backgroundColor:"#FF000010"}} color="error">
          <HistoryIcon style={{marginRight:2.5, fontSize:"large"}}/>
            4 days 12 hours 45 minutes left
        </Button>

        </Box>
      </Box>
    </Box>
  );
}