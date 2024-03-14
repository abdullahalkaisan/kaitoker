import { Box, IconButton } from '@mui/material'
import { MdCallEnd, MdMicOff, MdOutlineScreenShare, MdOutlineStopScreenShare, MdOutlineVideocamOff } from "react-icons/md";
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
    UilTimesSquare,
    UilTimesCircle,
    UilVolumeUp
  
  
  } from '@iconscout/react-unicons'
import { useState } from 'react';
import { useTheme } from '@emotion/react';


export default function CallAction(props) {

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";


  const [isMuteAction, setIsMuteAction] = useState(false);
  const [isCameraOffAction, setIsCameraOffAction] = useState(false);

  const {setIsScreenSharing, isScreenSharing} = props;

  return (
    <Box>
      <IconButton 
      onClick={()=>{setIsMuteAction(!isMuteAction)}}
      style={isMuteAction ? {backgroundColor:"#0288d1", color:"#fff", marginRight:5}:{backgroundColor:`${isDark ? "#f1f1f130" :"#f1f1f130"}`, color:"", marginRight:5} }
      > 
        <MdMicOff/>
      </IconButton>
      <IconButton 
      onClick={()=>{setIsCameraOffAction(!isCameraOffAction)}}
      style={isCameraOffAction ? {backgroundColor:"#0288d1", color:"#fff", marginRight:5}:{backgroundColor:`${isDark ? "#f1f1f130" :"#f1f1f130"}`, color:"", marginRight:5} }
      >
        <MdOutlineVideocamOff/>

      </IconButton>

      {/* <IconButton style={{marginRight:5}}>
          <UilCameraChange/>
      </IconButton> */}
      <IconButton 
        style={isScreenSharing ? { backgroundColor: "#EA493C", color: "#fff", marginRight: 5, borderRadius:90 } : { backgroundColor: `${isDark ? "#f1f1f130" :"#f1f1f130"}`, color: "", marginRight: 5 }} 
        onClick={() => { setIsScreenSharing(!isScreenSharing) }}>

        {isScreenSharing ? <MdOutlineStopScreenShare /> : <MdOutlineScreenShare />}  
        {isScreenSharing && <p style={{fontSize:"medium", paddingLeft:2}}>Stop</p>}
        {/* <MdOutlineScreenShare /> */}
        
      </IconButton>

      {/* <IconButton>
          <UilVolumeMute/>
      </IconButton> */}






      <IconButton color='error'>
          <MdCallEnd/>
      </IconButton>
  </Box>
  )
}
