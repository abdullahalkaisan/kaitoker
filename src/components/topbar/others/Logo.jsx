import { Box } from "@mui/material";


export default function Logo() {
  return (
    <Box sx={{fontWeight:"bold", color:"#0ea5e9", cursor:"pointer", userSelect:"none", display:{md:"flex", xs:"none"}, fontSize:"22px", m:"0 20px"}}>
    <Box>
      Kai
    </Box>
    <Box sx={{color:"#f97316"}}>
      toker
    </Box>
  </Box>
  )
}
