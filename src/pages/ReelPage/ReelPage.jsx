import { Box, Button, IconButton, Typography } from "@mui/material";
import LanguageSelect from "../../components/callCard/LanguageSelect";
import Slider_filter from "../../components/filter/Profession_filter";
import Logo from "../../components/topbar/others/Logo";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AudioControlBox from "../../components/callCard/CallCardReel/AudioControlBox";
import AudioSlider_custom from "../../components/callCard/AudioSlider_custom";
import { Link } from "react-router-dom";
import ReelPage_tab from "./ReelPage_tab";

import ReelPage_name from "./ReelPage_name";
import ReelPage_action from "./ReelPage_action";
import ReelPage_audioAction from "./ReelPage_audioAction";













export default function ReelPage() {
  return (
    <>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", p:1}}>
            
        <Box display={"flex"} alignItems={"center"}>
          <Link to={"/"}>
            <IconButton style={{marginRight:23}}>
              <ArrowBackIcon/>
            </IconButton>
          </Link>
          <Logo/>
        </Box>

            <Box display={"flex"} alignItems={"center"}>
              <Box sx={{display:{md:"flex", xs:"none"}}}>
                <LanguageSelect/>
              </Box>
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

        {/* <Slider_filter/> */}
























      <ReelPage_tab/>
    




        



    </>
  )
}
