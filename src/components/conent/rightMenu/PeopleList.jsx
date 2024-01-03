import { Box, IconButton, Stack } from "@mui/material";

import { 
    UilVideo,
    UilEllipsisV
  } from '@iconscout/react-unicons'
  
import PeopleCard from "./PeopleCard";


export default function PeopleList() {
  return (
    <Stack
      flexDirection={"row"}
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
    </Stack>
  );
}
