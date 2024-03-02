import { Avatar, Badge, Box, CardActionArea, Tooltip, Typography } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
// import { useTheme } from '@emotion/react';

// avatar={true}
// active={"online"}
// title="Abdullah Al Kaisan"
// subTitle={"CEO at Kaitoker"}
// accountType={"varified"}


PeopleCard.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  accountType: PropTypes.string,
  flag: PropTypes.string,
  country: PropTypes.string,
  avatar: PropTypes.bool,
  badge: PropTypes.bool,
  avatarUrl: PropTypes.string,
  isVarified: PropTypes.bool,
  isOnline: PropTypes.string,
};



export default function PeopleCard(props) {

  
  
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  
  
  const {title, subTitle, avatar, avatarUrl,  badge , flag, country, isVarified, isOnline } = props;

  console.log(flag);

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
      <CardActionArea
        sx={{ height: "auto", width: "auto", borderRadius: "999px" }}
      >
        <PeopleStyledBadge
          sx={{ display: `${avatar ? "flex" : "none"}` }}
          color={isOnline === "online" ? "info" : "warning"} 
          badgeContent={badge && isOnline ? 1 : 0}
          variant="dot"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Avatar sx={{ width: 32, height: 32 }} alt={title} src={avatarUrl} />
        </PeopleStyledBadge>
      </CardActionArea>

      <Box display={"flex"} flexDirection={"column"} mx={1}>
        <Typography
          display={"flex"}
          alignItems={"center"}
          variant="subtitle2"
          component="h1"
          sx={{ cursor: "pointer", fontWeight: "bold" }}
        >
          {flag && title.length > 15 ? title.slice(0, 15) + "..." : title}

          <VerifiedIcon
            sx={{
              display: `${isVarified ? "block" : "none"}`,
              mx: 0.5,
              fontSize: "medium",
              color: "#1D9BF0",
            }}
          />

          <Tooltip title={country} placement="top">
            <Box sx={flag ? { display: "flex", alignItems: "center", px: 1 } : {display:"none"}}>
              <img
                style={{
                  borderRadius: 3,
                  border: "1px solid #77777750",
                  boxShadow: "10px 10px 10px solid black",
                }}
                src={`https://flagcdn.com/w20/${flag}.png`}
              />
            </Box>
          </Tooltip>
        </Typography>
        <Typography
          mt={-0.5}
          color={isDark ? "#999" : "#777"}
          variant="body2"
          component="h6"
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
}


