import { Box, Button } from "@mui/material";
import PeopleCard from "./conent/rightMenu/PeopleCard";
// import TranslateIcon from '@mui/icons-material/Translate';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
// import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';




export default function LogsCard() {
  return (
    <Box>
      <Box padding={3}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
          flexDirection={"row"}
        >
          <PeopleCard
            badge={1}
            flag={"bd"}
            avatar={1}
            avatarUrl={
              "https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"
            }
            title={"Abdulah Al Kaisan"}
            subTitle="Web developer"
          />
          <Button variant="contained" size="small" sx={{ borderRadius: 999 }}>
            Join
          </Button>
        </Box>

        {/* <IconButton sx={{ borderRadius: 2 }} size="small">
            <TranslateIcon fontSize="14px" />
            <Box sx={{ fontSize: "medium", ml: 0.2 }}>English</Box>
          </IconButton>
          <IconButton sx={{ borderRadius: 2 }} size="small">
            <AccessTimeIcon fontSize="14px" />
            <Box sx={{ fontSize: "medium", ml: 0.2 }}>15 Minutes - 1/2/2024</Box>
          </IconButton>
          <IconButton sx={{ borderRadius: 2 }} size="small">
            <AccessTimeIcon fontSize="14px" />
            <Box sx={{ fontSize: "medium", ml: 0.2 }}>12 hours 9 minutes left</Box>
          </IconButton> */}


      </Box>
    </Box>
  );
}
