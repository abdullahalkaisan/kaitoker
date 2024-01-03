import { Avatar, Box, CardActionArea, Typography } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';


export default function PeopleCard() {
  return (
    <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>

    <CardActionArea sx={{height:"auto", width:"auto", borderRadius:"999px"}}>
        <Avatar
        sx={{ width: 32, height: 32 }}
        alt="Remy Sharp"
        src="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"
        />
    </CardActionArea>


    <Box display={"flex"} flexDirection={"column"} mx={1}>
      <Typography
        display={"flex"}
        alignItems={"center"}
        variant="subtitle2"
        component="h1"
        sx={{cursor:"pointer", fontWeight:"bold"}}
      >
        Abdullah Al Kaisan
        <VerifiedIcon
          sx={{ mx: 0.5, fontSize: "medium", color: "#1D9BF0" }}
        />
      </Typography>
      <Typography mt={-0.5} color={"#777"} variant="body2" component="h6">
        CEO at Kaitoker
      </Typography>
    </Box>
  </Box>
  )
}
