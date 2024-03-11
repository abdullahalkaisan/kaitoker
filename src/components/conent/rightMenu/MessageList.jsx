
import PeopleCard from "./PeopleCard";
// import { useTheme } from "@emotion/react";
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Badge, Box, CardActionArea } from "@mui/material";

export default function MessageList() {

// const theme = useTheme();
// const isDark = theme.palette.mode === "";



  return (
    <>

    <Box p={3}>
    <CardActionArea  sx={{padding:"10px 10px", marginBottom:"5px", borderRadius:3, backgroundColor:"#0288D110"}} >
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={1}>
                <PeopleCard badge="1" isOnline={"online"} avatar="1"  avatarUrl={"https://lh3.googleusercontent.com/a/ACg8ocKjcLQnbqhz1e6GuIXL1IrBSg2pG_FSAtw-vO1ejOyW890"} title={"Abdullah Al Kaisan"} subTitleHighLight={true} time={"5 minutes"} subTitle={"Hey whatspp?"}/>
                {/* <DoneIcon fontSize="smaller" sx={{color:"#777"}}/> */}
                {/* <DoneAllIcon fontSize="small" color="primary" /> */}
                <Badge variant="dot" badgeContent={1} style={{marginRight:8}} color="primary"/>
            </Box>
        </CardActionArea>
        <CardActionArea mb={2} sx={{padding:"10px 10px",marginBottom:"5px", borderRadius:3, backgroundColor:"#0288D110"}} >
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={1}>
                <PeopleCard badge="1" isOnline={"online"} avatar="1"  avatarUrl={"https://lh3.googleusercontent.com/a/ACg8ocKjcLQnbqhz1e6GuIXL1IrBSg2pG_FSAtw-vO1ejOyW890"} title={"Abdullah Al Kaisan"} subTitleHighLight={true} time={"5 minutes"} subTitle={"Hey whatspp?"}/>
                {/* <DoneIcon fontSize="smaller" sx={{color:"#777"}}/> */}
                {/* <DoneAllIcon fontSize="small" color="primary" /> */}
                <Badge variant="dot" badgeContent={1} style={{marginRight:8}} color="primary"/>
            </Box>
        </CardActionArea>
        <CardActionArea mb={2} sx={{padding:"10px 10px", marginBottom:"5px", borderRadius:3}} >
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={1}>
                <PeopleCard badge="1" isOnline={"online"} avatar="1"  avatarUrl={"https://lh3.googleusercontent.com/a/ACg8ocKjcLQnbqhz1e6GuIXL1IrBSg2pG_FSAtw-vO1ejOyW890"} title={"Abdullah Al Kaisan"} time={"5 minutes"} subTitle={"You: Hey whatspp?"}/>
                <DoneIcon fontSize="small" sx={{color:"#777"}}/>
                {/* <DoneAllIcon fontSize="smaller" color="primary" /> */}
            </Box>
        </CardActionArea>
        <CardActionArea mb={2} sx={{padding:"10px 10px", marginBottom:"5px", borderRadius:3}} >
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={1}>
                <PeopleCard badge="1" isOnline={"online"} avatar="1"  avatarUrl={"https://lh3.googleusercontent.com/a/ACg8ocKjcLQnbqhz1e6GuIXL1IrBSg2pG_FSAtw-vO1ejOyW890"} title={"Abdullah Al Kaisan"} time={"5 minutes"} subTitle={"You: Hey whatspp?"}/>
                {/* <DoneIcon fontSize="smaller" sx={{color:"#777"}}/> */}
                <DoneAllIcon fontSize="small" color="primary" />

            </Box>
        </CardActionArea>

    </Box>

    </>
  )
}
