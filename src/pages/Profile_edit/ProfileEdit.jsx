import { Avatar, Badge, Box, Button, CardActionArea, Chip, Divider, FormControlLabel, IconButton, Switch, TextField, Typography } from "@mui/material";
import TopBar from "../../components/topbar/Topbar";
import Logo from "../../components/topbar/others/Logo";
import { MdArrowBack, MdDelete, MdEditSquare, MdFileUpload, MdOutlineTranslate } from "react-icons/md";
import styled from "styled-components";
import { VoiceRecorder } from "react-voice-recorder-player";
import { Link, Navigate } from "react-router-dom";

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
    }
  };



export default function ProfileEdit() {

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
    



    return (
        <Box sx={{ height: "100vh", width: "100vw", display: "flex", flexDirection:"column", justifyContent: "flex-start", overflowX:"hidden",  alignItems:"center" }}>
            {/* <Logo/> */}
            <Box sx={{position:"fixed", left: 20, top:20}}>
            
            <IconButton  component={Link} to="/" sx={{ backgroundColor:"#ffffff", boxShadow:"0px 0px 10px #00000020"}} size="large">
                <MdArrowBack/>
            </IconButton>
            </Box>
            <Box sx={{display:"flex", alignItems:"center", mt:10, mb:5}}>
                <CardActionArea sx={{ height: "fit-content", width: "fit-content", borderRadius: 999 }}>
                    <Avatar 
                    // src="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg" 
                    sx={{ height: 100, width: 100 }}></Avatar>
                </CardActionArea>
                <Box>
                {/* <IconButton sx={{ borderRadius:3, backgroundColor:"#fff", mx:4, "&:hover":{backgroundColor:"#fff"}, boxShadow:"0px 0px 10px #00000050"}}>
                    <MdFileUpload />
                    <span style={{fontSize:"small", fontWeight:"bold"}}>
                        UPLOAD
                    </span>
                </IconButton> */}

                <Button 
                component="label"
                role={undefined}
                tabIndex={-1}
                sx={{ml:4, borderRadius:3}} 
                variant="outlined" 
                startIcon={<MdFileUpload />}>
                <VisuallyHiddenInput type="file" />
                    UPLOAD
                </Button>

                {/* <IconButton 
                    sx={{ml:2, borderRadius:3}} 
                >
                    <MdDelete />
                </IconButton> */}


                </Box>
            </Box>


            <Box 
            sx={{ mb:10}}
            >
                

                <VoiceRecorder 
                // width="100%"
                uploadAudioFile
                graphShaded
                mainContainerStyle={styles.mainContainerStyle}
                controllerContainerStyle={styles.controllerContainerStyle}
                controllerStyle={styles.controllerStyle}
                waveContainerStyle={styles.waveContainerStyle}

                />
            </Box>




                <Box sx={{width:{md:520, xs:1}, mb:20}}>
                    <TextField required fullWidth sx={{mb:2}} id="outlined-basic" size="small" label="Full Name" variant="outlined" />
                    <TextField required fullWidth sx={{mb:2}} id="outlined-basic" size="small" label="Profession" variant="outlined" />
                    <TextField required fullWidth sx={{mb:2}} id="outlined-basic" size="small" label="Country" variant="outlined" />
                    <TextField rows={3} multiline maxRows={3} fullWidth sx={{mb:2}} id="outlined-basic" size="small" label="About" variant="outlined" />
                    




                    <Divider>Language</Divider>
                    <Box sx={{display:"flex", flexWrap:"wrap", width:{md:1, xs:1}, mt:3, mb:2}}>
                        <Chip icon={<MdOutlineTranslate />} onDelete={handleDelete} sx={{m:0.5, borderRadius:3}} label="English" />
                        <Chip icon={<MdOutlineTranslate />} onDelete={handleDelete} sx={{m:0.5, borderRadius:3}} label="English" />
                        <Chip icon={<MdOutlineTranslate />} onDelete={handleDelete} sx={{m:0.5, borderRadius:3}} label="English" />
                        <Chip icon={<MdOutlineTranslate />} onDelete={handleDelete} sx={{m:0.5, borderRadius:3}} label="English" />
                    </Box>
                    <Typography sx={{color:"red", mb:40}} variant="caption" >
                        You can add upto 4 Language
                    </Typography>
                    <Box sx={{display:"flex"}}>
                        <TextField required rows={3}  maxRows={3} fullWidth sx={{mb:2}} id="outlined-basic" size="small" label="Languages" variant="outlined" />
                    </Box>
                    <FormControlLabel  sx={{mb:4, color:"#777",}} control={<Switch  />} labelPlacement="start" label="Do you know English?" />





                    <Divider>Skills</Divider>
                    <Box sx={{display:"flex", flexWrap:"wrap", mt:3, mb:2, width:{md:1, xs:1}}}>
                        <Chip sx={{m:0.5, borderRadius:3}} onDelete={handleDelete}  label="Web development" />
                        <Chip sx={{m:0.5, borderRadius:3}} onDelete={handleDelete}  label="Node.js" />
                        <Chip sx={{m:0.5, borderRadius:3}} onDelete={handleDelete}  label="Javascript" />
                        <Chip sx={{m:0.5, borderRadius:3}} onDelete={handleDelete}  label="UX UI Designer" />
                        <Chip sx={{m:0.5, borderRadius:3}} onDelete={handleDelete}  label="English" />
                    </Box>
                    <Typography sx={{color:"red", mb:40}} variant="caption" >
                        You can add upto 5 Skills
                    </Typography>

                    <TextField required rows={3}  maxRows={3} fullWidth sx={{mb:2}} id="outlined-basic" size="small" label="Skills" variant="outlined" />
                
                    <Box sx={{display:"flex", justifyContent:"flex-end", mt:5}} fullWidth>
                        <Box sx={{width:300, display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <Button fullWidth sx={{borderRadius:3,  mt:0, mr:2, py:1}} >
                                Cancel
                            </Button>
                            <Button fullWidth sx={{borderRadius:3, mt:0, py:1}} variant="contained">
                                SAVE
                            </Button>
                        </Box>
                    </Box>

                </Box>




        </Box>
    )
}
