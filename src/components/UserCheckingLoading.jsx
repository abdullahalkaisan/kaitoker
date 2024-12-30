import { Box, CircularProgress, 
    // Typography 
} from '@mui/material'



export const UserCheckingLoading = () => {




  return (
<Box
      sx={{
        height:"100vh", 
        width:"100vw",
        position:"absolute", 
        backgroundColor:"background.default", 
        display:"flex", 
        justifyContent:"center", 
        alignItems:"center",
        zIndex:9999999
      }}
    >   
        <Box sx={{display:"flex", alignItems:"center"}}>
        <CircularProgress />
          {/* <Typography variant="h6" ml={2}>
            Checking user
          </Typography> */}

        </Box>
    </Box>
  )
}
