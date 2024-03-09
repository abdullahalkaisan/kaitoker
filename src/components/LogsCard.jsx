import { Avatar, AvatarGroup, Badge, Box, Button, IconButton } from "@mui/material";
// import PeopleCard from "./conent/rightMenu/PeopleCard";
import TranslateIcon from '@mui/icons-material/Translate';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
// import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
// import { UilLetterJapaneseA } from '@iconscout/react-unicons'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HistoryIcon from '@mui/icons-material/History';
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import ChipsCustom from "./callCard/ChipsCustom";
import ChairIcon from '@mui/icons-material/Chair';
const BadgeAvatar = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    height: 20,
    width: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: 5,
    bottom: 10,
    fontSize: "10px",
    border: `3px solid ${theme.palette.background.paper}`,
    backgroundColor: "#fff",
    color: "tomato"
    // padding: '0 4px',
  },
}));





export default function LogsCard() {

  const theme = useTheme();

  const isDark = theme.palette.mode === "dark";


  return (
    <Box
      backgroundColor={isDark ? "#222" : "#fff"}
      height={"max-content"}
      // marginBottom={2}
      margin={1}
      border={"1px solid #00000020"}
      width={"320px"}

      borderRadius={2}
    >
      <Box display={"flex"} flexDirection={"column"} padding={3}>
        
      <Box>
            {/* <ChipsCustom label="Let's talk about Javascript Object and Arary" /> */}
            <ChipsCustom label="Graphics desgin" />
            {/* <ChipsCustom label="UX UI desgin" /> */}
          </Box>

      

        <Box display={"flex"} alignItems={"center"} marginTop={2}>
          <Box
            fontSize="smaller"
            color={isDark ? "#f1f1f1" : "#777"}
            display={"flex"}
            alignItems={"center"}
          >
            <AccessTimeIcon sx={{ marginRight: 0.5 }} fontSize="smaller" />
            1 hour - 10:45 AM - 10/12/2024
          </Box>
        </Box>

        <Box display={"flex"} alignItems={"center"} flexWrap={"wrap"}>
          <Box
            fontSize="smaller"
            color={isDark ? "#999" : "#777"}
            display={"flex"}
            alignItems={"center"}
          >
            <TranslateIcon sx={{ marginRight: 0.5 }} fontSize="smaller" />
            English
          </Box>

          <Box>
            <Button sx={{textTransform:"none"}} color="success" size="small">
              $1.12/hr
            </Button>
          </Box>

        </Box>


        <Box display={"flex"} width={1} justifyContent={"center"}>
          <Button
            style={{
              marginTop: 6,
              fontSize: "samll",
              textTransform: "none",
              backgroundColor: "#FFA50010",
            }}
            color="warning"
          >
            <HistoryIcon style={{ marginRight: 3, fontSize: "large" }} />
            {/* 4 days 12 hours   */}
            4 Days 12 hours 55 minutes left.
          </Button>
        </Box>





        <Box sx={{ width: 1, display: "flex", justifyContent: "center", marginTop: 2 }}>
          <AvatarGroup max={4}>
            <BadgeAvatar
              // color="error"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              // color="error"
              badgeContent={<StarsRoundedIcon />}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://i.pravatar.cc/300?img=10"
              />
            </BadgeAvatar>
            <Avatar
              alt="Travis Howard"
              src="https://lh3.googleusercontent.com/a/ACg8ocK386pzE7Z-bSFqbGXHYVxxKt5pYh_OAnMnkKWDOPhNabI"
            />
            {/* <Avatar
              alt="Cindy Baker"
              src="https://lh3.googleusercontent.com/a/ACg8ocKjcLQnbqhz1e6GuIXL1IrBSg2pG_FSAtw-vO1ejOyW890"
            /> */}
            {/* <Avatar
              alt="Agnes Walker"
              src="https://lh3.googleusercontent.com/a/ACg8ocKg4H0S4oUQl5TVLe72k5iueHshMcheBvx51rZ_jWm84s4"
            /> */}
          </AvatarGroup>
          
          <Box sx={{display:"flex", alignItems:"center", ml:1}}>
            <Avatar sx={{mr:1, cursor:"pointer"}}>
              <ChairIcon />
            </Avatar>
            <Avatar sx={{mr:1, cursor:"pointer"}}>
              <ChairIcon />
            </Avatar>
          </Box>



        </Box>



        {/* <Typography style={{ padding: "20px 0", fontSize: "medium", color:"777" }} variant="">
          {`Topic: Let's discuss about Javascript`}
        </Typography> */}

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          marginTop={2}
        >
          <Box
            sx={{
              display: "none",
              width: 1,
              mt: 3,
              justifyContent: "flex-end",
            }}
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

          <Box>
            <IconButton>
              <InfoOutlinedIcon />
            </IconButton>
          </Box>

          <Button color="error" variant="contained" size="small" sx={{ borderRadius: 999 }}>
            Join
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
