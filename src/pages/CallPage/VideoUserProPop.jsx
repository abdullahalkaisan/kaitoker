import { Box } from '@mui/material'
import PropTypes from 'prop-types';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';


export default function VideoUserProPop(props) {
  return (
    <>
        <Box
            sx={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            flexWrap:"wrap",
            height:"auto",
            position: "absolute",
            bottom: 10,
            left: 10,
            p: 1,
            cursor: "pointer",
            userSelect: "none",
            }}
        >




            <Box sx={{display:"flex"}}>
                <Box
                    sx={{
                    display: "none",
                    alignItems: "center",
                    fontSize: "small",
                    borderRadius: "999px",
                    bgcolor: "#00000080 ",
                    backdropFilter: blur("20px"),
                    color: "#ffffff98",
                    width: "max-content",
                    p: 1,
                    cursor: "pointer",
                    userSelect: "none",
                    }}
                >
                    <img
                    style={{
                        borderRadius: 3,
                        // width: "18px",
                        // height: "18px",
                        objectFit: "cover",
                        marginRight: 6,
                    }}
                    src={`https://flagcdn.com/w20/${props.flag}.png`}
                    />
                    {props.title}
                </Box>


                <Box sx={{display:"flex", flexWrap:"wrap"}}>
                    <Box 
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "small",
                        borderRadius: "999px",
                        bgcolor: "#00000080 ",
                        backdropFilter: blur("20px"),
                        color: "#ffffff98",
                        width: "max-content",
                        p: 1,
                        ml:1,
                        cursor: "pointer",
                        userSelect: "none",
                        }}
                    >
                        <VolumeOffIcon fontSize='small'/>
                    </Box>


                    <Box 
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "small",
                            borderRadius: "999px",
                            bgcolor: "#00000080 ",
                            backdropFilter: blur("20px"),
                            color: "#ffffff98",
                            width: "max-content",
                            p: 1,
                            ml:1,
                            cursor: "pointer",
                            userSelect: "none",
                            }}
                        >
                            <VideocamOffIcon fontSize='small'/>
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