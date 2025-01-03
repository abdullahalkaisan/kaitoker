import { Avatar, Box, Button, Card, CardActionArea, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import {  CircleCheck, CirclePlus, Handshake, Info, MapIcon, MessageCircle, VerifiedIcon } from "lucide-react";
import { IoMdInfinite } from "react-icons/io";
import { Link } from "react-router-dom";
import PeopleCard from "../conent/rightMenu/PeopleCard";
import SubDetails from "./SubDetails";
import CallCard_slot from "./CallCard_slot";
import ChipsCustom from "./ChipsCustom";
import AudioSlider_custom from "./AudioSlider_custom";

import RoomIcon from '@mui/icons-material/Room';
import { useContext, useEffect, useRef, useState } from "react";
import FollowButton from "../FollowBtn";
import { AuthContext } from "../../Providers/AuthProvider";
import { timeAgo } from "../../Formats";
// import { motion } from "motion/react"
import { motion } from "framer-motion"

export default function CallCard_mongo(props) {

  const {user , loginUserData } = useContext(AuthContext);

  const [isFollowing, setIsFollowing] = useState(false);
  const constraintsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const {
    _id,
    fullName, 
    profession,
    profilePic,
    country,
    username,
    createdAt,
    skills,
    isVarified,
    followers
  } = props.item;

  console.log(loginUserData);


  
useEffect(()=>{
},[props.item ])

  return (
    <Box sx={{
      width: { md: "fit-content", xs: 1 },
      maxWidth:{md:350, xs:1},
      // width:"auto",
      // height: { md: "max-content", xs: 1 },
      height:"fit-content",
      borderRadius: { md: 2, xs: 2 },
      m: { md: 2, xs: 0 },
      pb: 2,
      // outline:`20px solid #333333${isPaused ? "00" :"50"}`, 
      // boxShadow:`0px 0px 10px #333333${isPaused ? "00" :"95"}`
    }}>


    <Box sx={{display:"flex"}}>






    {/* <div
      ref={constraintsRef}
      style={{
        // width: "100px",
        // height: "100px",
        // border: "2px solid lightgray",
        // borderRadius: "10px",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        position: "relative",
      }}
    > */}
      {/* <motion.div
        drag
        dragConstraints={constraintsRef} // Constrain to parent area
        // dragElastic={1} // Elastic behavior during drag
        onDragStart={() => setIsDragging(true)} // Handle drag state
        onDragEnd={() => setIsDragging(false)} // Reset drag state
        style={{
          // width: "100px",
          // height: "100px",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          // backgroundColor: "white",
          // borderRadius: "50%",
          // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
        }}
        animate={{
          // scale: isDragging ? 1.2 : 1, // Scale up when dragging
          x: 0,
          y: 0, // Ensure it animates back to the center
        }}
        // whileDrag={{
        //   scale: 1.2, // Slightly grow while dragging
        // }}
        // transition={{
        //   type: "spring", // Spring transition for bounce effect
        //   stiffness: 1000,
        //   damping: 25, // Adjust damping for bounciness
        //   bounce: 30, // Enhance bounce effect
        // }}
      > */}
<CardActionArea sx={{
              width: 100, 
              height: 100, 
              // borderRadius:"40px 40px 20px 40px"
              borderRadius:"40px"
              }}>
          <Avatar
            src={profilePic}
            sx={{ 
              width: 100, 
              height: 100, 
              // borderRadius:"40px 40px 20px 40px"
              borderRadius:"40px",
              pointerEvents:"none",
            }}
          />
        </CardActionArea>
      {/* </motion.div> */}
    {/* </div> */}




    {/* <motion.div
    drag
    exit={{x:0, y:0}}
    >
        <CardActionArea sx={{
              width: 100, 
              height: 100, 
              // borderRadius:"40px 40px 20px 40px"
              borderRadius:"40px"
              }}>
          <Avatar
            src={profilePic}
            sx={{ 
              width: 100, 
              height: 100, 
              // borderRadius:"40px 40px 20px 40px"
              borderRadius:"40px",
              pointerEvents:"none"
            }}
          />
        </CardActionArea>
    </motion.div> */}


      <Box
            bgcolor={"background.default"}
            color={"text.primary"}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // text position 
              // alignItems: "center",

              width: "100%",
              pl: 2,
            }}
          >




            <Link
              style={{
                textDecoration: "none",
              }}
              to={`/${username.toLowerCase()}`}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  width: "max-content",
                  color:"text.primary",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
                textAlign={"center"}
                fontWeight={"bold"}
                variant="h6"
                gutterBottom
              >
                {fullName}

                {/* <VerifiedIcon
                  sx={{ mx: 0.5, fontSize: "large", color: "#1D9BF0" }}
                />  */}

                {/* {isVarified && (
                  <VerifiedIcon
                    sx={{ mx: 0.5, fontSize: "large", color: "#1D9BF0" }}
                  />
                )}
                <IoMdInfinite style={{ marginLeft: 2 }} /> */}
                {/* <Badge sx={{mx:3}} color="primary" badgeContent="Pro"></Badge> */}

              </Typography>
            </Link>


{/* 
  #c3c3c3
  #cdcdcd
  #d5d5d5
*/}


            <Typography
              // sx={{ color: `${isDark ? "#c3c3c3" :"#444" }` }}
              // sx={{ color: `${isDark ? "#c3c3c3" :"#1976d2" }` }}

              // textAlign={"center"}
              variant="subtitle1"
              mt={-2}
              p={0}
              gutterBottom
            >
              {profession}
            </Typography>
            <Typography
              sx={{ color: "#777", display: "flex", alignItems: "center" }}
              // textAlign={"center"}
              variant="subtitle1"
              mt={-1.5}
              p={0}
              gutterBottom
            >
              <RoomIcon sx={{ fontSize: "medium" }} />
              {country.label}
              <Tooltip title={country.label} placement="top">
                <Box sx={{ display: "flex", alignItems: "center", px: 1 }}>
                  <img
                    style={{
                      borderRadius: 3,
                      border: "1px solid #77777750",
                      boxShadow: "10px 10px 10px solid black",
                    }}
                    src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                  />
                </Box>
              </Tooltip>
            </Typography>
            <Typography
              sx={{ color: "#777", display: "flex", alignItems: "center" }}
              // textAlign={"center"}
              variant="subtitle1"
              mt={-2}
              p={0}
              gutterBottom
            >
              {/* <RoomIcon sx={{ fontSize: "medium" }} /> */}
            </Typography>
          </Box>


    </Box>











        <Box
          pl={4}
          pt={1}
          >
          <SubDetails
            // user_followers={new Intl.NumberFormat("en-US", {
            //   useGrouping: true,
            //   notation: "compact",
            // }).format(followers)}
            user_followers={followers.length === 0 ? "0" : followers.length}
            // user_rating={rating}
            user_language={"English"}
            sinceTime={createdAt}
            justifyContent={"flex-start"}
            // user_total_call={new Intl.NumberFormat("en-US", {
            //   useGrouping: true,
            //   notation: "compact",
            // }).format(totalCall)}
            // user_total_call={totalCall}
          // flag={flag}
          />
        </Box>





        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          direction="row"
          flexWrap={"wrap"}
          px={2}
          mt={1}
          mb={1}
          overflow={"auto"}
          textAlign={"center"}
        >
          {skills.map((skill, index) => (
            <ChipsCustom key={index} hashTagStyle={true} label={skill} />
          ))}
        </Box>




          <Stack
                      bgcolor={"background.default"}
                      color={"text.primary"}
                      flexDirection={"row"}
                      m={"10px 0"}
                      alignItems={"center"}
                      justifyContent={"space-evenly"}
                      // justifyContent={"flex-end"}
                    >

                      {/* <IconButton>
                        <Info />
                      </IconButton> */}

                      {/* <IconButton>
                        <CircleCheck />
                      </IconButton>

                      <IconButton color="success">
                        <Handshake />
                      </IconButton>

                      <IconButton color="primary">
                        <CirclePlus/>
                      </IconButton> */}

                      {/* <IconButton color="primary">
                        <MessageCircle/>
                      </IconButton> */}

                      
                      {/* <IconButton onClick={()=> setIsFollowing(!isFollowing)} color={isFollowing ? "" : "primary"}>
                        {isFollowing ?<CircleCheck /> : <CirclePlus/> }
                      </IconButton> */}


                      <FollowButton 
                      currentUserId={loginUserData?._id} 
                      targetUserId={_id} 
                      />

                          <IconButton color="primary">
                            <MessageCircle/>
                          </IconButton>



                      {/* <Button sx={{borderRadius:3, display:"flex", alignItems:"center"}} variant="contained">
                      <MessageCircle style={{marginRight:5, height:20}}/>
                        Chat
                      </Button> */}




      
                    </Stack>





    </Box>
  );
}











