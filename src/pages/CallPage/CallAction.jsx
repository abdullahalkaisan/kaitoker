import { Box, IconButton } from '@mui/material'

import { 
    UilMicrophoneSlash,
    UilCameraSlash,
    UilCamera,
    UilHeadphoneSlash,
    UilCameraChange,
    UilVideoSlash,
    UilVolumeMute,
    UilMissedCall,
    UilPresentation,
    UilVolumeUp
  
  
  } from '@iconscout/react-unicons'
import { useState } from 'react';


export default function CallAction() {

  const [isMuteAction, setIsMuteAction] = useState(false);
  const [isCameraOffAction, setIsCameraOffAction] = useState(false);


  return (
    <Box>
      <IconButton 
      onClick={()=>{setIsMuteAction(!isMuteAction)}}
      style={isMuteAction ? {backgroundColor:"#EA493C", color:"#fff", marginRight:5}:{backgroundColor:"", color:"", marginRight:5} }
      > 
        <UilMicrophoneSlash/>
      </IconButton>
      <IconButton 
      onClick={()=>{setIsCameraOffAction(!isCameraOffAction)}}
      style={isCameraOffAction ? {backgroundColor:"#EA493C", color:"#fff", marginRight:5}:{backgroundColor:"", color:"", marginRight:5} }
      >
        <UilVideoSlash/>
        
      </IconButton>

      {/* <IconButton style={{marginRight:5}}>
          <UilCameraChange/>
      </IconButton> */}
      <IconButton style={{marginRight:5}}>
          <UilPresentation/>
      </IconButton>

      {/* <IconButton>
          <UilVolumeMute/>
      </IconButton> */}






      <IconButton color='error'>
          <UilMissedCall/>
      </IconButton>
  </Box>
  )
}
