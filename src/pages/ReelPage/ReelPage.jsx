import { Box, IconButton, } from "@mui/material";
import LanguageSelect from "../../components/callCard/LanguageSelect";
import Slider_filter from "../../components/filter/Profession_filter";
// import Logo from "../../components/topbar/others/Logo";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import AudioControlBox from "../../components/callCard/CallCardReel/AudioControlBox";
// import AudioSlider_custom from "../../components/callCard/AudioSlider_custom";
import { Link } from "react-router-dom";
import ReelPage_tab from "./ReelPage_tab";
// import { LuMessageCircle } from "react-icons/lu";
// import { FiMessageCircle } from "react-icons/fi";
import ReelPage_name from "./ReelPage_name";
import ReelPage_action from "./ReelPage_action";
import ReelPage_audioAction from "./ReelPage_audioAction";
import { MdOutlineChat, MdOutlineHistory } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";
import ChipsCustom from "../../components/callCard/ChipsCustom";













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
          {/* <Logo/> */}
          {/* <img height={28} src="https://web.opendrive.com/api/v1/download/file.json/MjdfMTY5NjUyNjRfc2l2Zlk?inline=1&preview=1" ></img> */}
        </Box>

            <Box display={"flex"} alignItems={"center"}>
              <Box sx={{display:{md:"flex", xs:"none"}}}>
                <LanguageSelect/>
              </Box>
              <IconButton style={{marginLeft:30}} >
                  <SearchIcon/>
              </IconButton>
              <IconButton>
                  <IoMdChatbubbles />
              </IconButton>
              <IconButton>
                  <MdOutlineHistory />
              </IconButton>

              <IconButton>
                  <TuneIcon/>
              </IconButton>
              <IconButton>
                  <MoreVertIcon/>
              </IconButton>
            </Box>

        </Box>

      {/* Showing "Web developer" */}
      <Box sx={{px:3}}>
        <ChipsCustom onDelete={true} color=""  size={"large"} label={`Showing "Web develoepr"`}/>
      </Box>


        <Slider_filter/>

        <ReelPage_name/>
        <ReelPage_action/>
          <ReelPage_tab/>
        <ReelPage_audioAction/>



    </>
  )
}
