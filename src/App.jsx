import TopBar from "./components/topbar/Topbar"
import Profession_filter from "./components/filter/Profession_filter"
import { Box } from "@mui/material"
// import LeftMenu_container from "./components/conent/LeftMenu_container"
// import Center_container from "./components/conent/Center_container"
import RightMenu_container from "./components/conent/rightMenu/RightMenu_container"
import LeftMenu_container from "./components/conent/LeftMenu_container"
import Center_container from "./components/conent/Center_container"
import PropTypes from 'prop-types';
// import NavMenu from "./components/topbar/others/NavMenu"


function App(props) {


  return (
    <Box 
      display={"flex"} 
      flexDirection={"column"} 
      width={"100%"}
      height={"100vh"}
      overflow={"hidden"}
    >


      {/* <Box bgcolor={"gray"} overflow={"auto"}>
      </Box> */}

      <TopBar/>

      <Profession_filter/> 

      <Box 
        display={"flex"} 
        bgcolor={"red"} 
        height={"100%"}
        overflow={"auto"}
        >
          <LeftMenu_container 
            darkModeToggle={props.darkModeToggle}
            darkIcon={props.darkIcon}
          />
          <Center_container/>
          <RightMenu_container/>
      </Box>


    </Box>
  )
}

export default App




App.propTypes = {
  darkModeToggle: PropTypes.any,
  darkIcon:PropTypes.any,
};
