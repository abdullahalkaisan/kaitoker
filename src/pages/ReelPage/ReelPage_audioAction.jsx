import { Box } from "@mui/material";
import AudioSlider_custom from "../../components/callCard/AudioSlider_custom";
import AudioControlBox from "../../components/callCard/CallCardReel/AudioControlBox";

export default function ReelPage_audioAction() {
  return (
    <Box sx={{width:"100%", margin:"0% 0", display:"flex", flexDirection:"column", justifyContent:"center"}}>
    <Box sx={{ width: "100", margin: "0px 10%" }}>
      <AudioSlider_custom />
      </Box>
      <AudioControlBox width="100%"/>
    </Box>

  )
}
