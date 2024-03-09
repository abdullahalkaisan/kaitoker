import { Box, IconButton } from "@mui/material";
import LanguageSelect from "../../components/callCard/LanguageSelect";
import Slider_filter from "../../components/filter/Profession_filter";
import Logo from "../../components/topbar/others/Logo";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CallCard from "../../components/callCard/CallCard";
import { usersDataLocal } from "../../usersDataLocal";
export default function ReelPage() {
  return (
    <>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", p:1}}>
            <Logo/>
            <IconButton style={{marginRight:23}}>
                  <ArrowBackIcon/>
              </IconButton>

              <LanguageSelect/>

            <Box display={"flex"} alignItems={"center"}>
              <IconButton style={{marginLeft:30}} >
                  <SearchIcon/>
              </IconButton>
              <IconButton>
                  <TuneIcon/>
              </IconButton>
              <IconButton>
                  <MoreVertIcon/>
              </IconButton>
            </Box>

        </Box>

        <Slider_filter/>


        



    </>
  )
}
