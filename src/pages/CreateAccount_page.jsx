import styled from "@emotion/styled";
import { Avatar, Box, Button, IconButton, TextField } from "@mui/material";
import { IoMdCloudUpload } from "react-icons/io";
import { MdOutlineKeyboardVoice } from "react-icons/md";

export default function CreateAccount_page() {

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



  return (
    <>
    <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center",  padding:"60px 10%"}}>
        
        <Box>
            <Avatar sx={{height:100, width:100, margin:3}} alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <TextField style={{margin:5}} id="outlined-basic" label="Name" size="small" variant="outlined" />
            <TextField style={{margin:5}} id="outlined-basic" label="Profetion" size="small" variant="outlined" />

            <IconButton aria-label="delete">
                <MdOutlineKeyboardVoice />
            </IconButton>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<IoMdCloudUpload />}
            >
                Upload Voice
                <VisuallyHiddenInput type="file" />
            </Button>
            <TextField style={{margin:5}} id="outlined-basic" label="Hour rate $"  type="number" size="small" variant="outlined" />


        </Box>


        <Box>
            <TextField style={{margin:5}} id="outlined-basic" label="Skills" rows={4} multiline size="small" variant="outlined" />
            <TextField style={{margin:5}} id="outlined-basic" label="Language" rows={4} multiline size="small" variant="outlined" />
            <TextField style={{margin:5}} id="outlined-basic" label="About" multiline rows={4} size="small" variant="outlined" />

        </Box>






        
        <span>
            <TextField style={{margin:5}} id="outlined-basic" label="Country" size="small" variant="outlined" />
            <TextField style={{margin:5}} id="outlined-basic" label="City" size="small" variant="outlined" />

        </span>






    </Box>



    </>
  )
}
