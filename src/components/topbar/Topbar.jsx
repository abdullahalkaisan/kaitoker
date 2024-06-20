import { Avatar, Badge, Box, Button, IconButton } from "@mui/material";
import Logo from "./others/Logo";
import NavMenu from "./others/NavMenu";
import { Link } from 'react-router-dom';

import {
  UilSearch,
  // UilBars,
  UilHistory,
  // UilBell,
  // UilCommentLines,
  // UilSlidersVAlt
} from "@iconscout/react-unicons";

import MunitesAndMoneyPop from "./others/MunitesAndMoneyPop";
import Notification_section from "./notification/Notification_section";
import { useContext } from "react";
// import Topbar_mobile_sideNav from "./Topbar_mobile_sideNav";
// import { BiUser } from "react-icons/bi";
// import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import LoadingWithLogo from "../LoadingWithLogo";
// import { MdOutlineLogin } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import TicketPop from "../TicketPop";
// import SignInWithGoogle_Btn from "./SignInWithGoogle_Btn";


export default function TopBar() {

  const { user, loading, signIn_google, 
    // signIn_google_redirectResult
   } = useContext(AuthContext);

  if (loading) {
    return <LoadingWithLogo />
  }

  const loginHandle = ()=>{
    signIn_google()
      .then((result)=> console.log(result))
      .catch((error)=> console.log(error))
  }



  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Box
        sx={{ p: 0 }}
        justifyContent="space-between"
        alignItems="center"
        display={"flex"}
        flexDirection={"row"}
      >
        {/* <IconButton sx={{ 
          mx: 1, 
          display: { lg: "none", xs: "flex" } }}>
          <UilBars />
          <UilSlidersVAlt/>
        </IconButton> */}
        <Box sx={{ display: { md: "none" } }}>
          <MunitesAndMoneyPop />
        </Box>

        <Logo />
        
        <NavMenu />

        <Box display={"flex"}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* , bgcolor:"#F5FAFD"  */}

            {user && <TicketPop/>}

            <IconButton sx={{ display: { md: "none" } }}>
              <UilSearch />
            </IconButton>


          {
            user &&
            <Box sx={{ display: { md: "flex", xs: "none" } }}>
              <MunitesAndMoneyPop />
            </Box>
          }


            {
              user &&
              <Notification_section />
            }

            {/* <IconButton sx={{ display: { md: "" } }}>
              <Badge badgeContent={10} max={9} color="error">
                <UilBell />
              </Badge>
            </IconButton> */}

            {
              user &&
              <IconButton sx={{ display: { md: "none" } }}>
                <Badge badgeContent={40} max={9} color="error">
                  <UilHistory />
                </Badge>
              </IconButton>
            }


            {user ?
              <Link to="/abdullahalkaisan">
                <IconButton sx={{ m: "0 10px", display: { md: "flex", xs: "none" } }}>
                  <Avatar
                    src={user.photoURL}
                    sx={{ width: 32, height: 32 }}
                  />
                </IconButton>
              </Link>
              : 
              
                // <Button onClick={loginHandle} sx={{ mx: 2, borderRadius:3, textTransform:"none", bgcolor:"#333", "&:hover":{bgcolor:"#444"} }} color="info" variant="contained" >
                //   <MdOutlineLogin size={"18px"} />
                //   <span style={{marginLeft:5}}>
                //       Login
                //   </span>
                // </Button>

                <Button onClick={loginHandle} sx={{ display:"flex", alignItems:"center", justifyContent:'center', m:1, borderRadius:3, bgcolor:"#1976D210",}}  >
                  <FcGoogle fontSize={24} style={{margin:"0 10px 0 0"}} />
                  <Box sx={{margin:"0 10px 0 0"}}>
                  Sign in With google
                  </Box>
                  {/* with Google */}
                </Button>

                // <SignInWithGoogle_Btn/>


            }




            {/* <Button  size="small"  sx={{mx:2}} variant="contained">
              Login
            </Button> */}


            {/* <Topbar_mobile_sideNav /> */}





          </Box>
        </Box>
      </Box>
    </Box>
  );
}
