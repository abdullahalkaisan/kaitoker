import { Avatar, Badge, Box, CardActionArea, Typography } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
// import { useTheme } from '@emotion/react';

// avatar={true}
// active={"online"}
// title="Abdullah Al Kaisan"
// subTitle={"CEO at Kaitoker"}
// accountType={"varified"}


PeopleCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  avatar: PropTypes.bool.isRequired,
  badge: PropTypes.bool.isRequired,
  accountType: PropTypes.string.isRequired
};



export default function PeopleCard(props) {

  const {title,subTitle, avatar, badge, accountType} = props;

  const PeopleStyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      outline: `3px solid ${theme.palette.background.paper}`,
      right:4,
      bottom:5,
      borderRadius:9999
    },
  }));


  return (
    <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
      <PeopleStyledBadge
        sx={{display:`${avatar?"flex":"none"}`}}
        color="info"
        badgeContent={badge  ? 1 : 0}
        variant="dot"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <CardActionArea
          sx={{ height: "auto", width: "auto", borderRadius: "999px" }}
        >
          <Avatar
            sx={{ width: 32, height: 32 }}
            alt="Remy Sharp"
            src="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"
          />
        </CardActionArea>
      </PeopleStyledBadge>

      <Box display={"flex"} flexDirection={"column"} mx={1}>
        <Typography
          display={"flex"}
          alignItems={"center"}
          variant="subtitle2"
          component="h1"
          sx={{ cursor: "pointer", fontWeight: "bold" }}
        >
          {title}


          <VerifiedIcon
            sx={{ display:`${accountType ==="verified"? "block" :"none"}`, mx: 0.5, fontSize: "medium", color: "#1D9BF0" }}
          />






        </Typography>
        <Typography mt={-0.5} color={"#777"} variant="body2" component="h6">
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
}


