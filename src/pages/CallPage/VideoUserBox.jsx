import { Avatar, Badge, Box, CardActionArea } from '@mui/material'
import VideoUserProPop from './VideoUserProPop'
import PropTypes from 'prop-types';

export default function VideoUserBox(props) {
  return (
    <Box
      position={"relative"}
      display={"flex"}
      width={"50%"}
      height={"50%"}
      sx={{backgroundColor:"#333", justifyContent:"center", alignItems:"center"}}
      // minHeight={"50%"}
      // minHeight={"50%"}
      // height={"50%"}
      // sx={{flexGrow:1}}
    >

      {
        props.isCameraOff ?
          <CardActionArea sx={{ height: "auto", width: "auto", borderRadius: 999 }}>
            <Avatar
              src='https://camblyavatars.s3.amazonaws.com/6109762cd8990f390c8ae294s200?h=149abe8a12a436bc2c2c25a5f746a5e5'
              sx={{ height: 120, width: 120 }} />
          </CardActionArea>
          : <video
            height={"100%"}
            width={"100%"}
            style={{ objectFit: "cover", display: "flex",}}
            muted
            loop
            autoPlay
            src={props.url}></video>
      }

        



        <VideoUserProPop isHost={props.isHost} isCameraOff={props.isCameraOff} title={props.profetion} flag={props.flag} />

    
    </Box>
  );
}

VideoUserBox.propTypes = {
  url: PropTypes.string,
  margin: PropTypes.string,
};