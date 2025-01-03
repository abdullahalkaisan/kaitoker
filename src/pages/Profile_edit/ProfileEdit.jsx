import { Avatar, Badge, Box, Button, CardActionArea, Chip, Divider, FormControlLabel, IconButton, Switch, TextField, Typography } from "@mui/material";
import TopBar from "../../components/topbar/Topbar";
import Logo from "../../components/topbar/others/Logo";
import { MdArrowBack, MdDelete, MdEditSquare, MdFileUpload, MdMic, MdOutlineTranslate, MdVerifiedUser } from "react-icons/md";
import styled from "styled-components";
import { VoiceRecorder } from "react-voice-recorder-player";
import { Link, useNavigate } from "react-router-dom";
import './ProfileEdit.css';
import HorizontalStepperWithError from "./Stepper";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import LoadingWithLogo from "../../components/LoadingWithLogo";
import { IoMdCloseCircle } from "react-icons/io";
import { LogOut } from "lucide-react";


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });


  const styles = {
    mainContainerStyle: {

    //   border: '1px solid black',
    boxShadow:"none",
      borderRadius: '5px',
      padding: '10px'
    },
    controllerContainerStyle: {
      borderTop:"none",
      backgroundColor: 'transparent',
      backgroundImage:"none",
    //   display: 'flex',
    //   justifyContent: 'space-between',
      marginTop: '10px'
    },
    controllerStyle: {
    //   backgroundColor: '#f1f1f150',
    backgroundColor: '#fff',
    backgroundImage: "none",
    // boxShadow:"none",
    boxShadow:"0px 0px 10px #00000020",
      border: '1px solid #00000010',
      borderRadius: 9999,
      cursor: 'pointer',
      padding: '5px'
    },
    waveContainerStyle: {
      height: '100px',
      marginTop: '10px',
      width: '100%'
    },
    
  };


export default function ProfileEdit() {

  const {user,loading, loginUserData, user_mongo,mongodb_login, checkUserExist, ischeckUserExist_loading} = useContext(AuthContext);





  if(loading && !user){
    return  <LoadingWithLogo/>
  }
  




    // const handleDelete = () => {
    //     console.info('You clicked the delete icon.');
    //   };
    







    return (
        <Box sx={{ 
            height: "100vh", 
            width: "100vw", 
            display: "flex", 
            flexDirection:"column", 
            justifyContent: "flex-start", 
            overflowX:"hidden",  
            alignItems:"center", 
            backgroundColor: "background.default",
            color: "text.primary"
            }}>
            
            
            {/* <Logo/> */}
            <Box sx={{position:"fixed", left: 20, top:20}}>
            <IconButton  component={Link} to="/" 
            // sx={{ backgroundColor:"#ffffff", boxShadow:"0px 0px 10px #00000020"}} 
            size="large"
            color="default"
            >
                <MdArrowBack/>
            </IconButton>
            </Box>

            {/* <Box sx={{position:"fixed", right: 20, top:20}}>
            <Button  component={Link} to="/" 
            // sx={{ backgroundColor:"#ffffff", boxShadow:"0px 0px 10px #00000020"}} 
            size="large"
            color="default"
            >
                Logout
            </Button>
            </Box> */}

            <Button variant="contained" color="error" onClick={mongodb_login} sx={{position:"fixed", right: 20, top:20, px:1, pr:2, borderRadius:6}}>
                {/* <LogOut size={20} style={{marginRight:3}}/> */}
                <Avatar src={user?.photoURL} sx={{width:30, height:30,marginRight:1, borderRadius:9999}}/>
                Logout
            </Button>





            <Box sx={{display:"flex", alignItems:"", flexDirection:"column", mt:10, mb:5}}>
                
            <HorizontalStepperWithError/>

                


                <Box>
                {/* <IconButton sx={{ borderRadius:3, backgroundColor:"#fff", mx:4, "&:hover":{backgroundColor:"#fff"}, boxShadow:"0px 0px 10px #00000050"}}>
                    <MdFileUpload />
                    <span style={{fontSize:"small", fontWeight:"bold"}}>
                        UPLOAD
                    </span>
                </IconButton> */}

                {/* <Button 
                component="label"
                role={undefined}
                tabIndex={-1}
                sx={{ml:4, borderRadius:3}} 
                variant="outlined" 
                startIcon={<MdFileUpload />}>
                <VisuallyHiddenInput type="file" />
                    UPLOAD Profile
                </Button>

                <Button 
                component="label"
                role={undefined}
                tabIndex={-1}
                sx={{ml:4, borderRadius:3}} 
                variant="outlined" 
                startIcon={<MdMic />}>
                <VisuallyHiddenInput type="file" />
                    Record Voice
                </Button>

                <Button 
                component="label"
                role={undefined}
                tabIndex={-1}
                sx={{ml:4, borderRadius:3}} 
                variant="outlined" 
                startIcon={<MdFileUpload />}>
                <VisuallyHiddenInput type="file" />
                    Upload Voice
                </Button> */}





                {/* <IconButton 
                    sx={{ml:2, borderRadius:3}} 
                >
                    <MdDelete />
                </IconButton> */}


                </Box>
            </Box>


            {/* <Box 
            sx={{ mb:10}}
            >
                

                <VoiceRecorder 
                uploadAudioFile
                graphShaded
                mainContainerStyle={styles.mainContainerStyle}
                controllerContainerStyle={styles.controllerContainerStyle}
                controllerStyle={styles.controllerStyle}
                waveContainerStyle={styles.waveContainerStyle}
                />
            </Box> */}




                <Box sx={{width:{md:520, xs:1},}}>










                    {/* <FormControlLabel  sx={{mb:4, color:"#777",}} control={<Switch  />} labelPlacement="start" label="Do you know English?" /> */}







                    {/* <Box sx={{display:"flex", justifyContent:"flex-end", mt:5}} fullWidth>
                        <Box sx={{width:300, display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <Button fullWidth sx={{borderRadius:3,  mt:0, mr:2, py:1}} >
                                Cancel
                            </Button>
                            <Button fullWidth sx={{borderRadius:3, mt:0, py:1}} variant="contained">
                                SAVE
                            </Button>
                        </Box>
                    </Box> */}

                </Box>




        </Box>
    )
}
