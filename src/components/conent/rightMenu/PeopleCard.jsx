import { Avatar, Badge, Box, CardActionArea, Tooltip, Typography } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import styled from '@emotion/styled';
// import PropTypes from 'prop-types';
import { MdLocationPin, MdOutlineAccessTime, MdOutlineTranslate } from 'react-icons/md';
import { IoMdInfinite } from 'react-icons/io';
// import { HiOutlineLocationMarker } from 'react-icons/hi';
// import { useTheme } from '@emotion/react';
// import { useTheme } from '@emotion/react';

// avatar={true}
// active={"online"}
// title="Abdullah Al Kaisan"
// subTitle={"CEO at Kaitoker"}
// accountType={"varified"}


// PeopleCard.propTypes = {
//   title: PropTypes.string,
//   subTitle: PropTypes.string,
//   subTitleHighLight: PropTypes.string,
//   accountType: PropTypes.string,
//   flag: PropTypes.string,
//   country: PropTypes.string,
//   avatar: PropTypes.bool,
//   badge: PropTypes.bool,
//   avatarUrl: PropTypes.string,
//   isVarified: PropTypes.bool,
//   isOnline: PropTypes.string,
//   avatarSize: PropTypes.number,
//   time: PropTypes.number,
//   lastSeen:PropTypes.string,
//   languages:PropTypes.string,
//   titleSize:PropTypes.number,
//   subTitleSize:PropTypes.number,
//   pro:PropTypes.string,
//   alignItems:PropTypes.string,
// };



export default function PeopleCard(props) {



  // const theme = useTheme();
  // const isDark = theme.palette.mode === "dark";


  const {
    title,
    subTitle,
    subTitleSize,
    subTitle2,
    subTitleSize2,
    subTitleColor2,
    subTitleWeight2,
    avatar,
    avatarUrl,
    badge,
    flag,
    country,
    time,
    isVarified,
    isOnline,
    avatarSize,
    subTitleHighLight,
    lastSeen,
    languages,
    titleSize,
    pro,
    alignItems
  } = props;


  const PeopleStyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      outline: `3px solid ${theme.palette.background.paper}`,
      // outline: `3px solid #fff`,
      right: 4,
      bottom: 5,
      borderRadius: 9999
    },
  }));


  const PeopleOfflineStyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      border: `3px solid ${theme.palette.background.paper}`,
      background: theme.palette.background.paper,
      // background: "red",
      color: "#777",
      // outline: `3px solid #fff`,
      borderRadius: "10px  0 0 10px",
      height: "auto",
      width: "auto",
      right: 15,
      bottom: 5,
      paddingLeft: "5px",
      margin: 0,
    },
  }));



  return (
    <Box display={"flex"} flexDirection={"row"} alignItems={`${alignItems ? alignItems : "center"}`}>
      <CardActionArea
        sx={{ height: "auto", width: "auto", borderRadius: "999px" }}
      >

        {isOnline ?
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
            <Avatar
              sx={
                isOnline
                  ? {
                    width: avatarSize ? avatarSize : 32,
                    height: avatarSize ? avatarSize : 32,
                    borderRadius: "100px 100px 10px 100px",
                  }
                  : {
                    width: avatarSize ? avatarSize : 32,
                    height: avatarSize ? avatarSize : 32,
                    borderRadius: 9999,
                  }
              }
              // alt={title}
              src={avatarUrl}
            />
          </PeopleStyledBadge>

          :

          <PeopleOfflineStyledBadge
            badgeContent={lastSeen}
            variant="string"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar
              sx={{
                width: avatarSize ? avatarSize : 32,
                height: avatarSize ? avatarSize : 32,
                borderRadius: "100px 100px 10px 100px",
              }
              }
              // alt={title}
              src={avatarUrl}
            />
          </PeopleOfflineStyledBadge>

        }















      </CardActionArea>

      <Box display={"flex"} flexDirection={"column"} mx={1}>
        <Box display={"flex"}>
          <Typography
            display={"flex"}
            alignItems={"center"}
            variant="subtitle2"
            component="h1"
            sx={{ cursor: "pointer", fontWeight: "bold", fontSize: titleSize && titleSize }}
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
            {pro &&
              <IoMdInfinite style={{ marginLeft: 2, color: "#33333350", fontSize: 18 }} />
            }




            <Tooltip title={country} placement="top">
              <Box
                sx={
                  flag
                    ? { display: "flex", alignItems: "center", px: 1 }
                    : { display: "none" }
                }
              >
                <img
                  style={{
                    borderRadius: 4,
                    border: "1px solid #77777750",
                    boxShadow: "10px 10px 10px solid black",
                  }}
                  src={`https://flagcdn.com/w20/${flag}.png`}
                />
              </Box>
            </Tooltip>
          </Typography>

          <Typography
            display={time ? "block" : "none"}
            style={{ margin: "0 5px", fontStyle: "italic" }}
            variant="caption"
            color="#999"
          >
            {time}
          </Typography>
        </Box>

        <Typography
          mt={-0.5}
          // color={isDark ? "#999" : "#777"}
          color={subTitleHighLight ? "" : "#777"}
          fontWeight={subTitleHighLight ? "bold" : "normal"}
          variant="body2"
          component="h6"
          fontSize={subTitleSize && subTitleSize}
        >
          {subTitle}
        </Typography>

        {/* subtitle2 */}
        {
          subTitle2 &&
          <Typography
            mt={-0.5}
            // color={isDark ? "#999" : "#777"}
            // color={subTitleHighLight ? "" : "#777"}
            color={subTitleColor2 && subTitleColor2}
            fontWeight={subTitleWeight2 && subTitleWeight2}
            variant="body2"
            component="h6"
            fontSize={subTitleSize2 && subTitleSize2}
          >
            {subTitle2}
          </Typography>
        }


        {/* {!isOnline && lastSeen &&
          <Typography
            mt={-0.5}
            // color={isDark ? "#999" : "#777"}
            color={subTitleHighLight ? "" : "#999"}
            fontWeight={subTitleHighLight ? "bold" : "normal"}
            variant="body2"
            component="h6"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <MdOutlineAccessTime style={{ marginRight: 2 }} />
            {lastSeen}
          </Typography>
        } */}



        {country &&
          <Typography
            mt={-0.5}
            // color={isDark ? "#999" : "#777"}
            color={subTitleHighLight ? "" : "#999"}
            fontWeight={subTitleHighLight ? "bold" : "normal"}
            variant="body2"
            component="h6"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <MdLocationPin style={{ marginRight: 2 }} />
            {/* <HiOutlineLocationMarker style={{ marginRight: 2, fontWeight:"bold" }} /> */}
            {country}
          </Typography>
        }



        {languages &&
          <Typography
            mt={-0.5}
            // color={isDark ? "#999" : "#777"}
            color={subTitleHighLight ? "" : "#999"}
            fontWeight={subTitleHighLight ? "bold" : "normal"}
            variant="body2"
            component="h6"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <MdOutlineTranslate style={{ marginRight: 2 }} />
            {languages}
          </Typography>
        }





      </Box>
    </Box>
  );
}


