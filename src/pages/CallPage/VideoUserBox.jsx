import { Avatar, Box, CardActionArea, IconButton } from '@mui/material'
import VideoUserProPop from './VideoUserProPop'
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';
import { useTheme } from '@emotion/react';
import { MdArrowUpward } from 'react-icons/md';


export default function VideoUserBox(props) {



  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";


  return (
    <Box
      position={"relative"}
      width={"50%"}
      // height={"50%"}

      // width={"max-content"}

      sx={{
        backgroundColor:"#222", 
        display:'flex',
        justifyContent:"center", 
        alignItems:"center", 
        overflow:"hidden",
        // outline:`4px solid ${isDark ? "#111" :"#fff"}`
        // borderRadius:3
      }}
      // minHeight={"50%"}
      // minHeight={"50%"}
      // height={"50%"}
      // sx={{flexGrow:1}}
    >



        
<p style={{position:"absolute", bottom:0, right:0, zIndex:1, margin:20, padding:5, borderRadius:8, backgroundColor:"#006B0030", color:"green", fontSize:"small", fontWeight:"bold"}}>
        50ms
</p>


      {
        props.isCameraOff ?
          <CardActionArea sx={{ height: "auto", width: "auto", borderRadius: 999 }}>
            <Avatar
              src='https://camblyavatars.s3.amazonaws.com/6109762cd8990f390c8ae294s200?h=149abe8a12a436bc2c2c25a5f746a5e5'
              sx={{ height: 120, width: 120 }} />
          </CardActionArea>
          : <>
            { props.me ? 
              

              

              <Webcam 
                height={"100%"} 
                width={"100%"}
                style={{ 
                  objectFit: "cover",
                  display: "flex", 
                  // transform:"scale(1.5) translate(0%, 10%) rotateY(180deg)",
                  transform:"scale(1.5) translate(7%, 0%) rotateY(180deg)",
                }}
              /> 
              


              : <video
              height={"100%"}
              width={"100%"}
              style={{ objectFit: "cover", display: "flex",}}
              muted
              loop
              autoPlay
              src={props.url}></video>
            }
          
          </>  
      }



        <VideoUserProPop isHost={props.isHost} isCameraOff={props.isCameraOff} title={props.profetion} flag={props.flag} />


        
    
    </Box>
  );
}

VideoUserBox.propTypes = {
  url: PropTypes.string,
  margin: PropTypes.string,
};