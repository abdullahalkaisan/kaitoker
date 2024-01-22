import {Box} from '@mui/material';
import CallHeader from './CallHeader';
import CallChatNav from './CallChatNav';



export default function CallPage() {

  return (
    <>

<Box height={"100vh"} width={"100%"} overflow={"hidden"}>

  <Box display={"flex"} height={"100%"} sx={{flexGrow:1}} direction={"row"} justifyContent={"space-between"}>
      <CallHeader/>
      
      <CallChatNav/>
  </Box>

</Box>


















  </>

  )
}




















