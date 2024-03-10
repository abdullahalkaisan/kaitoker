import { Box } from '@mui/material'
import VideoUserProPop from './VideoUserProPop'
import PropTypes from 'prop-types';

export default function VideoUserBox(props) {
  return (
    <Box
      position={"relative"}
      display={"flex"}
      width={"50%"}
      height={"50%"}
      // minHeight={"50%"}
      // minHeight={"50%"}
      // height={"50%"}
      // sx={{flexGrow:1}}
    >
      <video
        height={"100%"}
        width={"100%"}
        style={{ objectFit: "cover", display: "flex", }}
        muted
        loop
        autoPlay
        src={props.url}
      ></video>
      <VideoUserProPop  title={props.profetion} flag={props.flag} />
    </Box>
  );
}

VideoUserBox.propTypes = {
  url: PropTypes.string,
  margin: PropTypes.string,
};