import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography'


export default function Loading_PeaseWait() {
  return (
            <Box 
              sx={{
                height:"100vh", 
                width:"100vw", 
                display:"flex", 
                flexDirection:"column",
                justifyContent:"center", 
                alignItems:"center"}}>
              <CircularProgress  />
              <Typography variant="body1" sx={{margin:"20px"}} >Please wait!</Typography>
          </Box>
  )
}
