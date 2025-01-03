import {Box} from '@mui/material';
import CallHeader from './CallHeader';
import CallChatNav from './CallChatNav';
import { useState } from 'react';
// import CallChatNav_mobile from './CallChatNav_mobile';





export default function CallPage() {

  const [isNavBoxOpen, setNavBoxOpen] = useState(true)

  return (
    <>

<Box height={"100vh"} width={"100%"} overflow={"hidden"}>

  <Box display={"flex"} height={"100%"} sx={{flexGrow:1}} direction={"row"} justifyContent={"space-between"}>
      <CallHeader isNavBoxOpen={isNavBoxOpen} setNavBoxOpen={setNavBoxOpen}/>
      {/* <CallChatNav_mobile/> */}
      <CallChatNav isNavBoxOpen={isNavBoxOpen}  />
  </Box>

</Box>


















  </>

  )
}




















