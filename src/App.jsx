
import { Box } from "@mui/material"
import Profession_filter from "./components/filter/Profession_filter"
// import LeftMenu_container from "./components/conent/LeftMenu_container"
// import Center_container from "./components/conent/Center_container"
import RightMenu_container from "./components/conent/rightMenu/RightMenu_container"
import LeftMenu_container from "./components/conent/LeftMenu_container"
import Center_container from "./components/conent/Center_container"
import PropTypes from 'prop-types';
// import TopBar_mobile from "./components/topbar/TopBar_mobile"
import LabelBottomNavigation from "./components/topbar/BottomNavigation"
import TopBar from "./components/topbar/Topbar"
// import LoadingWithLogo from "./components/LoadingWithLogo"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "./Providers/AuthProvider"
import { useLocation } from "react-router-dom"
import NavMenu from "./components/topbar/others/NavMenu"
import LoginPage from "./pages/LoginPage/LoginPage"
// import { Helmet } from "react-helmet"
// import NavMenu from "./components/topbar/others/NavMenu"




function App() {

  const {user} = useContext(AuthContext);




  const location = useLocation()
  const [isFilterProfetionShow, setIsFilterProfetionShow] = useState(true);
  
  useEffect(()=>{
    if(location.pathname === "/news"){
      setIsFilterProfetionShow(false)
    }else if (location.pathname === "/group"){
      setIsFilterProfetionShow(false)
    }
    
    else{
      setIsFilterProfetionShow(true)
    }
  },[location])


  return (





    <>
    {/* <Helmet>
      <title>{`Kaitoker`}</title>
    </Helmet> */}
    <Box 
      display={"flex"} 
      flexDirection={"column"} 
      width={"100vw"}
      height={"100vh"}
      overflow={"hidden"}
    >

      {!user &&
      <LoginPage/>
      }
      

      {/* <Box bgcolor={"gray"} overflow={"auto"}>
      </Box> */}

      <TopBar/>

      {/* <LoadingWithLogo/> */}


      {/* <TopBar_mobile/> */}
      {/* <BottomNavigation/> */}
      
      { isFilterProfetionShow && <Profession_filter/> } 
      {/* <Profession_filter/> */}

      <Box 
        display={"flex"} 
        height={"100%"}
        width={"100%"}
        overflow={"hidden"}

        >
          <LeftMenu_container/>
          {/* <NavMenu/> */}
          <Center_container/>
          { 
          user &&
            <RightMenu_container/>
          }
      </Box>
      
      <LabelBottomNavigation/>

    </Box>
    </>
  )
}

export default App




App.propTypes = {
  darkModeToggle: PropTypes.any,
  darkIcon:PropTypes.any,
};
