import { Avatar, Badge, Box, CardActionArea, Typography } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';



export default function PeopleCard() {
  
  const theme = useTheme();

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      outline: `3px solid ${theme.palette.background.paper}`,
      right:4,
      bottom:5,
      // top:15,
      // right:7,
      // height:10,
      // width:10,
      borderRadius:9999
    },
  }));


  return (
    <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>

    <StyledBadge
      color='info'
      badgeContent={1}
      variant="dot"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}

    >
      <CardActionArea sx={{height:"auto", width:"auto", borderRadius:"999px"}}>
          <Avatar
          sx={{ width: 32, height: 32 }}
          alt="Remy Sharp"
          src="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"
          />
      </CardActionArea>
    </StyledBadge>


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
