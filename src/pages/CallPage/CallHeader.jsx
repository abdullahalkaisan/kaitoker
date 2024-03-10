import { Box} from '@mui/material'
import Logo from '../../components/topbar/others/Logo'
import CallAction from './CallAction'
import MunitesAndMoneyPop from '../../components/topbar/others/MunitesAndMoneyPop'
import VideoUserBox from './VideoUserBox';
import Iframe from './Iframe';
import { useTheme } from '@emotion/react';

// import MicOffIcon from '@mui/icons-material/MicOff';
// import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined';
// import WifiOffOutlinedIcon from '@mui/icons-material/WifiOffOutlined';

export default function CallHeader() {

  const theme = useTheme();
  const themeUse = theme.palette.mode;

  const isScreenSraring = 0;





  return (
    <Box
      display={"flex"}
      bgcolor={`${themeUse === "dark"? "#222":"#f1f1f1"}`}
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
        <CallAction />
        <MunitesAndMoneyPop />
      </Box>




      <Box
        sx={{
          minHeight:"50%",
          flexGrow: 1000,
          bgcolor: "#fff",
          display: `${isScreenSraring ? "flex" : "none"}`,
        }}
      >
        <Iframe url="pfrO1uNz00I?si=WYYdWUuaOTNjH3Zw"/>

      </Box>

      <Box
        sx={{
          display:"flex",
          flexDirection:"row",
          width:1,
          flexWrap: `${isScreenSraring ? "no-wrap" : "wrap"}`,
          overflow:"auto"
        }}
      >

          <VideoUserBox flag={"gr"} profetion="Web developer"  url="https://www.cambly.com/api/tutor_profiles/602dacf0f5b3da0cf5b68a05/profile_video#t=0.99"/>
          <VideoUserBox flag={"us"} profetion="English Teacher"  url="https://www.cambly.com/api/tutor_profiles/646a2e16a7123bd29c0d4d74/profile_video#t=0.99"/>
          <VideoUserBox flag={"in"} profetion="Graphics designer" url="https://www.cambly.com/api/tutor_profiles/602dacf0f5b3da0cf5b69079/profile_video#t=0.99"/>
          <VideoUserBox flag={"br"} profetion="Video editor" url="https://www.cambly.com/api/tutor_profiles/602dacf0f5b3da0cf5b693ee/profile_video#t=0.99"/>

      </Box>

    </Box>
  );
}
