import { Box, IconButton } from '@mui/material'
import PropTypes from 'prop-types';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import PeopleCard from '../../components/conent/rightMenu/PeopleCard';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
export default function VideoUserProPop(props) {
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




                <Box sx={{ display: "flex" }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "small",
                            borderRadius: "20px",
                            bgcolor: "#222 ",
                            backdropFilter: blur("200px"),
                            color: "#ffffff",
                            width: "max-content",
                            p: 1,
                            cursor: "pointer",
                            userSelect: "none",
                            outline:"4px solid #1976d200"
                        }}
                    >

                        <Box>
                        <PeopleCard 
                            isVarified="true" 
                            flag={props.flag} 
                            title={"Kaisan"} 
                            subTitle={props.title} 
                        />
                        </Box>


                    <Box sx={{ display: "flex", alignItems: "center",  }}>
                    <Box>
                            <IconButton sx={{
                                backgroundColor: "#333", 
                                color: "#fff", marginRight: 1,
                                '&:hover': {
                                    backgroundColor: "#444",
                                }
                            }} >
                                <KeyboardArrowLeftIcon fontSize='small' />
                            </IconButton>
                        </Box>

                        <Box>
                            <IconButton sx={{
                                backgroundColor: "#333", 
                                color: "#fff", marginRight: 1,
                                '&:hover': {
                                    backgroundColor: "#444",
                                }
                            }} >
                                <VolumeOffIcon fontSize='small' />
                            </IconButton>
                        </Box>

                        {/* <Box >
                            <IconButton sx={{
                                backgroundColor: "#333", 
                                color: "#fff", marginRight: 1,
                                '&:hover': {
                                    backgroundColor: "#444",
                                }
                            }}>
                                <VideocamOffIcon fontSize='small' />
                            </IconButton>
                        </Box> */}




                        <Box>
                            <IconButton sx={{
                                backgroundColor: "#333", 
                                color: "#fff",
                                '&:hover': {
                                    backgroundColor: "#444",
                                }
                            }} >
                                <MoreHorizIcon fontSize='small' />
                            </IconButton>
                        </Box>
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