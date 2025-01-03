import { Avatar, Badge, Box, Button, CircularProgress, FormControl, IconButton, InputLabel, MenuItem, Select, Skeleton } from "@mui/material";
import Logo from "./others/Logo";
import NavMenu from "./others/NavMenu";
import { Link } from 'react-router-dom';

import {
  UilSearch,
  UilBars,
  UilHistory,
  UilAngleDown
  // UilBell,
  // UilCommentLines,
  // UilSlidersVAlt
} from "@iconscout/react-unicons";




import MunitesAndMoneyPop from "./others/MunitesAndMoneyPop";
import Notification_section from "./notification/Notification_section";
import { useContext, useEffect, useState } from "react";
// import Topbar_mobile_sideNav from "./Topbar_mobile_sideNav";
// import { BiUser } from "react-icons/bi";
// import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import LoadingWithLogo from "../LoadingWithLogo";
// import { MdOutlineLogin } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import SearchMain from "../SearchMain";
// import TicketPop from "../TicketPop";
// import SearchMain from "../SearchMain";
// import firebase from "firebase/compat/app";
// import SignInWithGoogle_Btn from "./SignInWithGoogle_Btn";


export default function TopBar() {

  // const [menu, setMenu] = useState('');

  // const [avatar, setAvatar] = useState();



  // const handleChange = (event) => {
  //   setMenu(event.target.value);
  // };



  const { user, loading, signIn_google, checkAndCreateUser, user_database
   } = useContext(AuthContext);

   const [avatarLoading, setAvatarLoading] = useState(true);

  //  const metadata = user.metadata;
   
   
   {
    // createdAt: user.metadata.createdAt,
    // creationTime: user.metadata.creationTime,
    // lastLoginAt: user.metadata.lastLoginAt,
    // lastSignInTime: user.metadata.lastSignInTime
   }




   


  useEffect(()=> {

    // console.log(user_database);
    

    // const userExists = user_database.find(item => item.userID === user.uid);




    {user &&
      checkAndCreateUser({
        userName: user.displayName,
        email: user.email,
        metadata: {
          createdAt: new Date(), // Set custom createdAt or use other values you want
          creationTime: user.metadata.creationTime,
          lastSignInTime: user.metadata.lastSignInTime,
          lastLoginAt: new Date() // Use current timestamp for lastLoginAt
        },
        userId: user.uid,
        userProfile: user.photoURL
      });

    }




    




    // user_database.find((item)=> {
    //   item.userID !== user.uid
    //   return add_user({
    //        userName: user.displayName,
    //        email: user.email,
    //     //   // metadata:metadata,
    //        metadata: {
    //          createdAt: user.metadata.createdAt,
    //          creationTime: user.metadata.creationTime,
    //          lastSignInTime: user.metadata.lastSignInTime,
    //          lastLoginAt: user.metadata.lastLoginAt
    //         ,
    //        } ,
    //        userId: user.uid,
    //       userProfile: user.photoURL
    //    });
    // } )
    {
      // user &&  !== user.uid &&


      // add_user({
      //   userName: user.displayName,
      //   email: user.email,
      //   // metadata:metadata,
      //   metadata: {
      //     createdAt: user.metadata.createdAt,
      //     creationTime: user.metadata.creationTime,
      //     lastSignInTime: user.metadata.lastSignInTime,
      //     lastLoginAt: user.metadata.lastLoginAt
      //     ,
      //   } ,
      //   userId: user.uid,
      //   userProfile: user.photoURL
      // });
    }


    if(!loading){
      setAvatarLoading(false);

    }
  },[ user, loading, checkAndCreateUser])


    if (loading) {
      return <LoadingWithLogo />
    }




  const loginHandle = ()=>{


    signIn_google()
      .then((result)=> 
      {
        console.log(result);
        // add_user(user);
      }

      )
      .catch((error)=> console.error(error))



  }






  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Box
        sx={{p: {md:0, xs:"10px 0px 0px 10px"} }}
        justifyContent="space-between"
        alignItems="center"
        display={"flex"}
        flexDirection={"row"}
      >

        {/* <Box sx={{ display: { md: "none" } }}>
          <MunitesAndMoneyPop />
        </Box> */}


        <Box sx={{display:"flex", alignItems:"center"}}>
            <Box sx={{display:{md:"flex", xs:"none"}}}>
              <Logo />
            </Box>


            <Box sx={{display:{md:"none", xs:"flex", marginLeft:10}}}>
              <img style={{ height: 35}} src="https://pbs.twimg.com/media/GPkZgRFbkAA-Twt?format=png&name=240x240" />
            </Box>

            
            {/* <FormControl 
            sx={{ ml: 2, minWidth: 100, display:{md:"none", xs:"flex"} }}
            size="small">
              <InputLabel id="demo-select-small-label">Home</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={menu}
                label="Home"
                onChange={handleChange}
              >
                <MenuItem value={10}>Home</MenuItem>
                <MenuItem value={10}>Hire</MenuItem>
                <MenuItem value={20}>Group</MenuItem>
                <MenuItem value={30}>News</MenuItem>
              </Select>
          </FormControl> */}

            
            {/* <div>

              Hire

            </div>
            <div>
              Group
            </div>
            <div>
              News
            </div> */}




            <Box sx={{fontWeight: "bold", display:{md:"none", sm:"flex", xs:"flex"}, alignItems:"center", marginLeft:3, cursor:"pointer"}}>
              Home
                <UilAngleDown/>
            </Box> 




            <NavMenu />
          <SearchMain/>
        </Box>



        <Box display={"flex"}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* , bgcolor:"#F5FAFD"  */}


            <IconButton sx={{ display: { md: "none" } }}>
              <UilSearch />
            </IconButton>

{/* 
          {
            user &&
            <Box sx={{ display: { md: "flex", xs: "none" } }}>

              {user && <TicketPop/>}
              <MunitesAndMoneyPop />
            </Box>
          } */}


            {
              user &&
              <Notification_section />
            }

          <IconButton sx={{ 
            mx: 1, 
            display: { lg: "none", xs: "flex" } }}>
            <UilBars />
            {/* <UilSlidersVAlt/> */}
          </IconButton>


            {/* <IconButton sx={{ display: { md: "" } }}>
              <Badge badgeContent={10} max={9} color="error">
                <UilBell />
              </Badge>
            </IconButton> */}

            {/* {
              user &&
              <IconButton sx={{ display: { md: "none" } }}>
                <Badge badgeContent={40} max={9} color="error">
                  <UilHistory />
                </Badge>
              </IconButton>
            } */}




            {user ?
              <>
              {/* <Skeleton variant="circular" width={32} height={32} /> */}
              {
                avatarLoading ?
                // <CircularProgress size={32} />
                <Skeleton variant="circular" animation="wave" sx={{m:"0 10px", cursor:"pointer"}} width={32} height={32} />
                :

              <Link to="/abdullahalkaisan">
                <IconButton sx={{ m: "0 10px", display: { md: "flex", xs: "none" } }}>
                  <Avatar
                    src={user.photoURL}
                    sx={{ width: 32, height: 32 }}
                  />
                </IconButton>
              </Link>

              }


              
              
              </>



              : 
              
                // <Button onClick={loginHandle} sx={{ mx: 2, borderRadius:3, textTransform:"none", bgcolor:"#333", "&:hover":{bgcolor:"#444"} }} color="info" variant="contained" >
                //   <MdOutlineLogin size={"18px"} />
                //   <span style={{marginLeft:5}}>
                //       Login
                //   </span>
                // </Button>

                <Button onClick={loginHandle} sx={{ display:{md:"flex", xs:"none"}, alignItems:"center", justifyContent:'center', m:1, borderRadius:3, bgcolor:"#1976D210",}}  >
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



            {/* {user.displayName} */}





          </Box>
        </Box>
      </Box>
    </Box>
  );
}
