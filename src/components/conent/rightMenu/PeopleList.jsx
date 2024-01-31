import { Box, IconButton } from "@mui/material";

import { 
    UilVideo,
    UilEllipsisV
  } from '@iconscout/react-unicons'
  
import PeopleCard from "./PeopleCard";

import { PropTypes } from "prop-types";

PeopleList.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  accountType: PropTypes.string,
  avatar: PropTypes.bool,
  badge: PropTypes.bool,
};




export default function PeopleList(props) {

  const {title, subTitle,accountType, avatar, badge } = props;


  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"max-content"}
      // flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      mb={2}
    >

      <PeopleCard  
        title={title} 
        subTitle={subTitle} 
        accountType={accountType} 
        avatar={avatar} 
        badge={badge}  
      />


      <Box>
      {/* F5FAFD  */}
      {/* sx={{bgcolor:"#F5FAFD"}}  */}
        <IconButton color="info" >
          <UilVideo />
        </IconButton>
        <IconButton>
          <UilEllipsisV />
        </IconButton>
      </Box>
    </Box>
  );
}
