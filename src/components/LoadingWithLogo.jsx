
import { Box } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
export default function LoadingWithLogo() {

    return (
        <Box
            sx={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute"
            }}>
            <img style={{ height: 50 }} src="https://web.opendrive.com/api/v1/download/file.json/MjdfMTY5NjUyNjRfc2l2Zlk?inline=1&preview=1" />
            <Box sx={{ width: '100px', margin: "20px", overflow: "cover", borderRadius: 99 }}>
                <LinearProgress />
            </Box>

        </Box>
    )
}
