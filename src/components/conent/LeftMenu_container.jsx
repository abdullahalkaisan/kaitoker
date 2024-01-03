import React from "react";
import { Box, Button, CircularProgress, Dialog,  DialogContent,  IconButton,  Stack, Tooltip, Typography } from "@mui/material";
import { 
  UilSlidersVAlt,
  UilAnalysis,
  UilSignout,
  UilArrowCircleUp,
  UilSetting,
  UilQuestionCircle,
  UilMobileAndroid,
  UilDownloadAlt

} from '@iconscout/react-unicons'

import PropTypes from 'prop-types';
export default function LeftMenu_container(props) {


  const {darkModeToggle, darkIcon} = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  return (
    <Box
    // display={"flex"}
    flexDirection={"column"}
    // justifyContent={"center"}
    alignItems={"center"}
    bgcolor={"background.default"}
    color={"text.primary"}
    width={"100px"}
    height={"100%"}
    overflow={"auto"}
    sx={{display:{md:"flex", xs:"none"}}}


    >





      <IconButton sx={{mt:1}}>
        <UilSlidersVAlt/>
      </IconButton>

      <IconButton >
        <UilAnalysis/>
      </IconButton>

      <IconButton onClick={handleClickOpen} >
        <UilMobileAndroid/>
      </IconButton>


      <Dialog
        display="none"
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >



        <DialogContent>


          

        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>

        <Typography variant="h6" component="h2" fontWeight={"bold"}>
            Scan QR code to download Kaitoker
        </Typography>

        <Box>

        <Box sx={{  display: 'flex', my:10 }}>
          <CircularProgress />
        </Box>

          <img style={{height:180, margin:20}} src="https://www.opendrive.com/s/MjdfMTg0Mjc4NDVfOEJOREc?preview=1&folder_id=MjdfMTMxNDc0OF9oWWp6Uw" alt="" />
        </Box>

        <Typography variant="h6" component="h2">
          Download from app stores
        </Typography>
        
        </Box>



          <Stack flexDirection={"row"} mt={2} justifyContent={"center"}>

            <Button size="small" sx={{bgcolor:"#333",display:"flex", alignItems:"center", justifyContent:"center", color:"#fff",borderRadius:2,m:1,p:1, "&:hover":{bgcolor:"#444", color:"#fff"}}}>
               
               <Box>
                  <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/FFFFFF/mac-os.png" alt="mac-os"/>
               </Box>
               <Box>
                  <Box sx={{px:1}}>Download</Box>
               </Box>
               <Box>
                  <UilDownloadAlt/>
               </Box>
            </Button>

            <Button size="small" sx={{bgcolor:"#333",display:"flex", alignItems:"center", justifyContent:"center", color:"#fff",borderRadius:2,m:1,p:1, "&:hover":{bgcolor:"#444", color:"#fff"}}}>
               <Box>
                <img width="24" height="24" src="https://img.icons8.com/fluency/48/google-play-store-new.png" alt="mac-os"/>
               </Box>
               <Box>
                <Box sx={{px:1}}>Download</Box>
               </Box>
               <Box>
                <UilDownloadAlt/>
               </Box>
            </Button>



          </Stack>

        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>







      <IconButton >
        <UilQuestionCircle/>
      </IconButton>




      <IconButton >
        <UilArrowCircleUp/>
      </IconButton>


      <Tooltip title="Theme" placement="right"  >
          <IconButton onClick={darkModeToggle}>
              {darkIcon}
          </IconButton>
      </Tooltip>




        <Tooltip title="Setting" placement="right"  >
          <IconButton >
            <UilSetting/>
          </IconButton>
        </Tooltip>




      <IconButton >
        <UilSignout/>
      </IconButton>
      </Box>


  )
}

LeftMenu_container.propTypes = {
  darkModeToggle: PropTypes.func,
  darkIcon: PropTypes.string
};
