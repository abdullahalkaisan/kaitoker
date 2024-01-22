import { Box, IconButton } from '@mui/material'

import { 
    UilMicrophoneSlash,
    UilCameraSlash,
    UilHeadphoneSlash,
    UilMissedCall
  
  
  } from '@iconscout/react-unicons'


export default function CallAction() {
  return (
    <Box>
    <IconButton>
        <UilMicrophoneSlash/>
      </IconButton>
      <IconButton>
        <UilCameraSlash/>
      </IconButton>
      <IconButton>
          <UilHeadphoneSlash/>
      </IconButton>
      <IconButton color='error' variant="contained">
          <UilMissedCall/>
      </IconButton>
  </Box>
  )
}
