import { Box, IconButton, Stack } from "@mui/material";
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { PropTypes } from 'prop-types';


export default function TeacherInfoCard(props) {

    const {name, pro, flag} = props;


  return (
    <Stack direction={"row"} alignItems={"center"} position={"absolute"} bottom={0} left={0} m={2} bgcolor={"#00000099"} sx={{backdropFilter:"blur(20px)"}} color={"#fff"} p={1} borderRadius={4}>

    <Box mr={1} display={"flex"} sx={{borderRadius:1}} overflow={"hidden"} height={"16px"}>
      <img height={"100%"} width={"100%"} style={{objectFit:"cover", bgColor:"#333", outline:"2px solid #333"}} src={`https://flagcdn.com/${flag}.svg`}/>
    </Box>

    <Box mr={1}>
      <Stack direction={"row"} alignItems={"center"} fontSize={13} color={"#f1f1f1"}>
      {name}
        <VerifiedRoundedIcon fontSize='' sx={{ml:0.5, color:"#0EB9F2"}} />   
        {/*#0863F7*/}
      </Stack> 
      <Box fontSize={13} color={"#999"}>{pro}</Box> 
    </Box>


  {/* <Box sx={{color:"#fff", bgcolor:"#0EB9F2", padding:"2px 5px", margin:"0 5px", borderRadius:1}}>
    BRB
  </Box> */}
  <Box >

    {/* <IconButton color='warning'>
      <VideocamOffOutlinedIcon/>
    </IconButton>

    <IconButton color='warning'>
      <MicOffIcon/>
    </IconButton> */}

    {/* <IconButton color='error'>
      <WifiOffOutlinedIcon />
    </IconButton> */}

    <IconButton sx={{color:"#ebebeb"}}>
      <InfoOutlinedIcon />
    </IconButton>

  </Box>
  </Stack>
  )
}



TeacherInfoCard.propTypes = {
    name: PropTypes.string,
    pro: PropTypes.string,
    flag: PropTypes.string
  };