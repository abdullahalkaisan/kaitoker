import { Box, IconButton } from "@mui/material";
import LanguageSelect from "../../components/callCard/LanguageSelect";
import Slider_filter from "../../components/filter/Profession_filter";
import Logo from "../../components/topbar/others/Logo";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function ReelPage() {
  return (
    <>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", p:1}}>
            <Logo/>
            
            <LanguageSelect/>

            <IconButton>
                <MoreVertIcon/>
            </IconButton>

        </Box>

        <Slider_filter/>
    </>
  )
}
