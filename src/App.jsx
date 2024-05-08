
import Profession_filter from "./components/filter/Profession_filter"
import { Box } from "@mui/material"
// import LeftMenu_container from "./components/conent/LeftMenu_container"
// import Center_container from "./components/conent/Center_container"
import RightMenu_container from "./components/conent/rightMenu/RightMenu_container"
import LeftMenu_container from "./components/conent/LeftMenu_container"
import Center_container from "./components/conent/Center_container"
import PropTypes from 'prop-types';
// import TopBar_mobile from "./components/topbar/TopBar_mobile"
import LabelBottomNavigation from "./components/topbar/BottomNavigation"
import TopBar from "./components/topbar/Topbar"
import LoadingWithLogo from "./components/LoadingWithLogo"
// import NavMenu from "./components/topbar/others/NavMenu"


function App() {

  return (
    <Box 
      display={"flex"} 
      flexDirection={"column"} 
      width={"100vw"}
      height={"100vh"}
      overflow={"hidden"}
    >
      

      {/* <Box bgcolor={"gray"} overflow={"auto"}>
      </Box> */}

      <TopBar/>

      {/* <LoadingWithLogo/> */}


      {/* <TopBar_mobile/> */}
      {/* <BottomNavigation/> */}

      <Profession_filter/> 

      <Box 
        display={"flex"} 
        height={"100%"}
        width={"100%"}
        overflow={"hidden"}
        >
          <LeftMenu_container 
            // darkModeToggle={props.darkModeToggle}
            // darkIcon={props.darkIcon}
          />
          <Center_container/>
          <RightMenu_container/>
      </Box>
      
      <LabelBottomNavigation/>

    </Box>
  )
}

export default App




App.propTypes = {
  darkModeToggle: PropTypes.any,
  darkIcon:PropTypes.any,
};
