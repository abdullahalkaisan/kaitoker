import { Box, IconButton } from '@mui/material'
import PropTypes from 'prop-types';
import PeopleCard from '../../components/conent/rightMenu/PeopleCard';
import { useState } from 'react';
import { MdMicOff, MdMoreHoriz, MdMoreVert, MdVideocamOff } from 'react-icons/md';
export default function VideoUserProPop(props) {

    const [isNameShow, setIsNameShow] = useState(true);


    console.log(isNameShow);

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "max-content",
                    flexWrap: "wrap",
                    height: "auto",
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                    cursor: "pointer",
                    userSelect: "none",
                }}
            >

                {/* <p style={{position:"absolute", fontSize:"small", maxWidth:"70%", left:17, bottom:50, backgroundColor:"#22222290", color:"#ffffff90", padding:10, borderRadius:"15px 15px 0 0"}}>
                    BUSY 
                </p> */}





                <Box sx={{ display: "flex" }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "small",
                            // borderRadius: 20,
                            borderRadius: 4,
                            bgcolor: "#00000090 ",
                            // bgcolor: "#000000 ",
                            backdropFilter: "blur(8888px)",
                            color: "#ffffff",
                            width: "max-content",
                            p: 1,
                            cursor: "pointer",
                            userSelect: "none",
                            // outline:"4px solid #1976d200"
                        }}
                    >

                        {isNameShow &&
                        <Box sx={{display:{md:"flex", xs:"none"}}}>
                            <PeopleCard 
                                isVarified="true" 
                                flag={props.flag} 
                                title={"Abdullah Al Kaisan"} 
                                subTitle={props.title} 
                            />
                        </Box>
                        }

                    {
                        // props.isHost && <span style={ {backgroundColor:"orangered", padding:2, marginRight:10, borderRadius:6, display:{md:"flex", xs:"none"}}}>HOST</span>    
                    }
                    

                    <Box sx={{ display: "none", alignItems: "center", }}>




                    {/* <Box>
                        <IconButton onClick={()=>{setIsNameShow(!isNameShow)}} sx={{
                                backgroundColor: "#333", 
                                color: "#fff", marginRight: 1,
                                '&:hover': {
                                    backgroundColor: "#444",
                                }
                            }} >

                                {
                                    isNameShow ? 
                                    <KeyboardArrowLeftIcon fontSize='small' /> : 
                                    <KeyboardArrowRightIcon fontSize='small' />
                                }
                                

                            </IconButton>
                        </Box> */}

                        <IconButton style={{color:"#fff", 
                        // backgroundColor: "#333", 
                        margin:"0 3px" }}>
                            <MdMicOff fontSize='medium' />
                        </IconButton>
                        <IconButton style={{color:"#fff", 
                        // backgroundColor: "#333", 
                        margin:"0 3px"}}>
                            <MdVideocamOff fontSize='medium' />
                        </IconButton>
                        {/* <IconButton style={{color:"#fff",backgroundColor: "#333", margin:"0 3px"}}>
                            <MdMoreVert fontSize='medium' />
                        </IconButton> */}


                        {/* <Box>
                            <IconButton sx={{
                                // backgroundColor: "#333", 
                                color: "#fff", marginRight: 1,
                                // '&:hover': {
                                //     backgroundColor: "#444",
                                // }
                            }} >


                            </IconButton>
                        </Box> */}

                        {/* <Box display={props.isCameraOff ? "flex" :"none"}>
                            <IconButton sx={{
                                // backgroundColor: "#333", 
                                color: "#fff", marginRight: 1,
                                // '&:hover': {
                                //     backgroundColor: "#444",
                                // }
                            }}>
                                <MdVideocamOff fontSize='medium' />
                            </IconButton>
                        </Box> */}

  

{/* 
                        <Box>
                            <IconButton sx={{
                                backgroundColor: "#",
                                backdropFilter:"blur(0px)", 
                                color: "#fff",
                                // '&:hover': {
                                //     backgroundColor: "#444",
                                // }
                            }} >
                                <MdMoreVert fontSize='medium' />
                            </IconButton>
                        </Box> */}
                    </Box>
                    </Box>


                </Box>


            </Box>


        </>


    )
}


VideoUserProPop.propTypes = {
    title: PropTypes.string,
    flag: PropTypes.string
};