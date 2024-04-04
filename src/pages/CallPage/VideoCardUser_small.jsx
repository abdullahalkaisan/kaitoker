import { Box, IconButton } from '@mui/material'
import './VideoCardUser_small.css'
import VideoUserProPop from './VideoUserProPop'
import { MdMicOff, MdOutlineVideocamOff } from 'react-icons/md'


export default function VideoCardUser_small(props) {



  return (
    <>

    <Box sx={{position:"relative"}}>



        <video
          // height={80}
          // width={80}
          className='videoWithQuery'
          muted
          loop
          autoPlay
          src={props.url}
          style={{ 
          objectFit: "cover", 
          display: "flex", 
          margin:5 , 
          // borderRadius:20,
          borderRadius:5,
          }}
          >
        </video>

        <Box sx={{position:"absolute", bottom:10, left:10}}>
          <Box sx={{backgroundColor:"#00000099", backdropFilter: "blur(8888px)", color:"#fff", borderRadius:2}}>
            <IconButton size='small'>
              <MdMicOff color='#fff' />
            </IconButton>
            <IconButton size='small'>
              <MdOutlineVideocamOff color='#fff' />
            </IconButton>
          </Box>
        </Box>

      </Box>

    
    </>
  )
}
