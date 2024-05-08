
import { Box } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
export default function LoadingWithLogo() {

    return (
        <Box
            sx={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                backgroundColor:"#fff",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                zIndex:9999999,

            }}>


            {/* https://web.opendrive.com/api/v1/download/file.json/MjdfMTY5NjUyNjRfc2l2Zlk?inline=1&preview=1  */}


            <img style={{ height: 50 }} src="https://api.asm.skype.com/v1/objects/0-sa-d6-a45863545b43f682afdaf89c389e50f1/views/imgpsh_fullsize_anim" />
            <Box sx={{ width: '100px', margin: "20px", overflow: "cover", borderRadius: 99 }}>
                <LinearProgress />
            </Box>

        </Box>
    )
}
