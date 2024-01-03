import { Box, IconButton } from "@mui/material";

import { 
    UilVideo,
    UilEllipsisV
  } from '@iconscout/react-unicons'
  
import PeopleCard from "./PeopleCard";


export default function PeopleList() {
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

      <PeopleCard/>


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
