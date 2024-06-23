import { Box, IconButton} from '@mui/material'
import Logo from '../../components/topbar/others/Logo'
import CallAction from './CallAction'
import MunitesAndMoneyPop from '../../components/topbar/others/MunitesAndMoneyPop'
import VideoUserBox from './VideoUserBox';
import Iframe from './Iframe';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import VideoCardUser_small from './VideoCardUser_small';
import { 
  // UilArrowResizeDiagonal,
  // UilExpandArrowsAlt, 
  // UilCompressAltLeft,
  UilCompress,
  UilExpandArrows, 
  // UilArrowsH 
} from '@iconscout/react-unicons'
import { IoTicketOutline } from 'react-icons/io5';
// import MicOffIcon from '@mui/icons-material/MicOff';
// import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined';
// import WifiOffOutlinedIcon from '@mui/icons-material/WifiOffOutlined';

export default function CallHeader(props) {

  const {isNavBoxOpen, setNavBoxOpen} = props;

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";



  // const isScreenSraring = false;

  // const [isCameraOff, setIsCameraOff] = useState(false)

  const [isScreenSharing, setIsScreenSharing] = useState(false)

  return (
    <Box
      display={"flex"}
      bgcolor={`${isDark ? "#222":"#fff"}`}
      flexDirection={"column"}
      width={1}
      // height={1}
    >


      <Box
        display={"flex"}
        width={1}
        bgcolor={"background.default"}
        py={1}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Logo />
        <CallAction isScreenSharing={isScreenSharing} setIsScreenSharing={setIsScreenSharing} />
        
        <Box display={"flex"} alignItems={"center"}>
        <Box sx={{
          backgroundColor:`${isDark?"#222":"#f1f1f1"}`, 
          color:`${isDark?"#f1f1f1":"#333"}`,
          borderRadius:999, 
          p:1, 
          display:"flex", 
          alignItems:"center"
          }}>
          <IoTicketOutline />
          <span style={{margin:"0 5px"}}>
            3
          </span>
        </Box>
          <MunitesAndMoneyPop />
          <IconButton sx={{margin:"0 10px"}} onClick={()=>{setNavBoxOpen(!isNavBoxOpen)}}>
            {/* <UilArrowResizeDiagonal/> */}
            {/* <UilArrowsH/> */}
            {/* < UilCompressAltLeft/> */}
            {/* <UilExpandArrows/> 
            < UilCompress/> */}
            {
              isNavBoxOpen 
                ? <UilExpandArrows/> 
                : < UilCompress/>
            }
            
          </IconButton>

        </Box>


      </Box>




      <Box
        sx={{
          minHeight:"50%",
          height:"max-content",
          flexGrow: 1000,
          // bgcolor: "#fff",
          // borderRadius:"0 0 15px 0",
          // margin:2,
          overflow:"hidden",
          display: `${isScreenSharing ? "flex" : "none"}`,
        }}
      >
        {isScreenSharing && <Iframe url="pfrO1uNz00I?si=WYYdWUuaOTNjH3Zw"/>} 
        {/* pfrO1uNz00I?si=WYYdWUuaOTNjH3Zw  */}
        {/* BpPEoZW5IiY?si=nDIzhtvxRlJ2QT2Q  */}
        {/* HD13eq_Pmp8?si=Av9RD4DbrAA_3eoE  */}
      </Box>

      <Box
        sx={{
          display:`${isScreenSharing ? "none" : "flex"}`,
          flexDirection:"row",
          // justifyContent:"space-evenly",
          // backgroundColor:"red",
          // gap:1,
          // padding:2,
          width:1,
          height:1,
          flexWrap: `${isScreenSharing ? "no-wrap" : "wrap"}`,
          overflow:"auto",
        }}
      >

          {/* <VideoUserBox isHost={true} isCameraOff={true}  flag={"gr"} profetion="Web developer"  url="https://camblyavatars.s3.amazonaws.com/6109762cd8990f390c8ae294s200?h=149abe8a12a436bc2c2c25a5f746a5e5"/> */}
            <VideoUserBox   flag={"us"} profetion="English Teacher"  url="https://www.cambly.com/api/tutor_profiles/646a2e16a7123bd29c0d4d74/profile_video#t=0.99"/>
            <VideoUserBox me  flag={"bd"} profetion="Founder of Kaitoker " url="https://www.cambly.com/api/tutor_profiles/602dacf0f5b3da0cf5b69079/profile_video#t=0.99"/>

          {/* <VideoUserBox isCameraOff={false} flag={"br"} profetion="Video editor" url="https://www.cambly.com/api/tutor_profiles/602dacf0f5b3da0cf5b693ee/profile_video#t=0.99"/> */}

      </Box>




      <Box  display={ isScreenSharing ? "flex" :"none"} sx={{padding:{md:1,xs:0}, width:"100%", justifyContent:{md:"", xs:"center"}}}>
          
            <VideoCardUser_small me url="https://www.cambly.com/api/tutor_profiles/602dacf0f5b3da0cf5b68a05/profile_video#t=0.99"/>
            <VideoCardUser_small url="https://www.cambly.com/api/tutor_profiles/646a2e16a7123bd29c0d4d74/profile_video#t=0.99"/>

          {/* <VideoCardUser_small url="https://www.cambly.com/api/tutor_profiles/602dacf0f5b3da0cf5b69079/profile_video#t=0.99"/> */}
          {/* <VideoCardUser_small url="https://www.cambly.com/api/tutor_profiles/602dacf0f5b3da0cf5b693ee/profile_video#t=0.99"/> */}
      </Box>



    </Box>
  );
}
