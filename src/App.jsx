
import { Box, LinearProgress } from "@mui/material"
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
import {  useLocation } from "react-router-dom"
import NavMenu from "./components/topbar/others/NavMenu"
import LoginPage from "./pages/LoginPage/LoginPage"
// import { Helmet } from "react-helmet"
// import NavMenu from "./components/topbar/others/NavMenu"
import { useNavigate } from 'react-router-dom';
import LoadingWithLogo from "./components/LoadingWithLogo"
import { axiosInstance } from "./AxiosInstance"
import { UserCheckingLoading } from "./components/UserCheckingLoading"



function App() {

  const navigate = useNavigate();

  const {user, getUserData, isUserDataLoading, loginMongo,isLogining, loginUserData, user_mongo,mongodb_login,createAccount_mongo, getLoginUserData,  checkUserExist, ischeckUserExist_loading} = useContext(AuthContext);


  console.log("login user data", getUserData);

  
  isUserDataLoading && <div>loading users...</div>;


  // useEffect(()=>{
  //   if(isLogining){
  //     console.log("isLogining...");
  //   }else{
  //     console.log("login data ", loginUserData);
  //   }
  // },[isLogining])



  // if(user){
  //   checkUserExist(user);
  // }

  // if (!mongodb_login) {
  //   checkUserExist(user);
  // }


  const location = useLocation()
  const [isFilterProfetionShow, setIsFilterProfetionShow,] = useState(true);
  



  // if(loginUserData){
  //   if(loginUserData?.completeProfile === false){
  //     navigate('/profile/edit');
  //   }
  // }
  

  useEffect(() => {
    if(!ischeckUserExist_loading){
      if(user_mongo){
          if(user_mongo.exists === false){
            navigate('/profile/edit');
          }
      }
    }

}, [user_mongo, navigate]);




// if(!isLogining){
//   if(loginUserData.completeProfile){
//     navigate('/');
//   }
// }


  useEffect(()=>{
    if(location.pathname === "/news"){
      setIsFilterProfetionShow(false)
    }else if (location.pathname === "/group"){
      setIsFilterProfetionShow(false)
    }
    
    else{
      setIsFilterProfetionShow(true)
    }


  },[location, checkUserExist])


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

      {/* {!user && 
      <LoginPage/>
      } */}

      {ischeckUserExist_loading && <UserCheckingLoading/>}

      {isLogining && <Box sx={{ width: '100%' }}><LinearProgress /> </Box>}
      

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
