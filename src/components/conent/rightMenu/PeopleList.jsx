import { Box, IconButton } from "@mui/material";

import { 
    UilVideo,
    UilEllipsisV, 
    UilVideoSlash
  } from '@iconscout/react-unicons'
  
import PeopleCard from "./PeopleCard";

import { PropTypes } from "prop-types";
import { useTheme } from "@emotion/react";

PeopleList.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  accountType: PropTypes.string,
  avatar: PropTypes.bool,
  badge: PropTypes.bool,
  avatarUrl: PropTypes.string,
  isOnline: PropTypes.string,
};




export default function PeopleList(props) {

  // const {title, subTitle,accountType, avatar, avatarUrl,  badge , isVarified } = props;


  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";




  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"max-content"}
      // flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      // mb={2}

      sx={{ 
        borderRadius:"16px", 
        transition:"ease .3s", 
        cursor:"pointer", 
        // padding:0.5, 
        // paddingY:0.5, 
        paddingY:1, 
        "&:hover":{backgroundColor:`${isDark ? "#222" :"#f1f1f1"}`}
      }}

    >
      <PeopleCard {...props} />

      <Box>
        {/* sx={{bgcolor:"#F5FAFD"}}   */}
        {/* F5FAFD  */}
        <span
          style={props.isOnline === "" ? { display: "none" } : { display: "" }}
        >
          <IconButton
            style={
              props.isOnline === "online"
                ? { backgroundColor: "#0288D110" }
                : { backgroundColor: "#FFA50010" }
            }
            color={props.isOnline === "online" ? "info" : "warning"}
          >
            {props.isOnline === "online" ? <UilVideo /> : <UilVideoSlash />}
          </IconButton>
        </span>

        <IconButton>
          <UilEllipsisV />
        </IconButton>
      </Box>
    </Box>
  );
}
