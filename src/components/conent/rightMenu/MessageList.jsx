
import { TuneOutlined } from "@mui/icons-material";
import PeopleCard from "./PeopleCard";
// import { useTheme } from "@emotion/react";
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Badge, Box, CardActionArea, IconButton, TextField } from "@mui/material";

export default function MessageList() {

    // const theme = useTheme();
    // const isDark = theme.palette.mode === "";



    return (
        <>

            <Box sx={{ display: "flex", justifyContent: "space-between", p: 2, }}>
                <TextField
                    fullWidth
                    id="filled-search"
                    label="Search"
                    type="search"
                    size="small"
                    variant="outlined"
                // variant="standard"
                />
                <IconButton sx={{marginLeft:1}}>
                  <TuneOutlined />
                </IconButton>
            </Box>

            <Box px={3} py={1}>



                <CardActionArea sx={{ padding: "10px 10px", marginBottom: "5px", borderRadius: 3, backgroundColor: "#0288D130" }} >
                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={1}>
                        <PeopleCard 
                        badge="1" 
                        isOnline={"online"} 
                        avatar="1" 
                        avatarSize={47}
                        avatarUrl={"https://lh3.googleusercontent.com/a/ACg8ocKjcLQnbqhz1e6GuIXL1IrBSg2pG_FSAtw-vO1ejOyW890"} 
                        title={"Abdullah Al Kaisan"} 
                        // subTitleHighLight={true} 
                        time={"5 minutes"} 
                        subTitle={"Web developer"} 
                        subTitle2={"heyy are you there?"}
                        subTitleWeight2="bold"
                        subTitleColor2="royalblue"
                        // flag="br"
                        />
                        <Badge variant="dot" badgeContent={1} style={{ marginRight: 8 }} color="primary" />
                    </Box>
                </CardActionArea>


            </Box>

        </>
    )
}
