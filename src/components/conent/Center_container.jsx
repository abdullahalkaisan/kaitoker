import { Autocomplete, Avatar, Box, Button, TextField } from "@mui/material";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
// import { useTheme } from "@emotion/react";
// import LanguageSelect from "./LanguageSelect";
// import CallCardDynamic from "../callCard/CallCardDynamic";
import LanguageSelect from "../callCard/LanguageSelect";
// import CallCardDynamic from "../callCard/CallCardDynamic";
import CallCard from "../callCard/CallCard";
import GroupCallCard from "../groupCallCard/GroupCallCard";
import PostCard from "../../pages/ProfilePage/TabMenuProfile/PostCard";
// import VideoCard from "../VideoCard/VideoCard";
import CourseCard from "../CaurseCard.jsx/CourseCard";
import CallCardReel from "../callCard/CallCardReel/CallCardReel";
import { usersDataLocal } from "../../usersDataLocal";
import CallCard_smallBox from "../CallCard_smallBox";
import CallCard_cardBox from "../CallCard_cardBox";
import LogsCard from "../LogsCard";
// import { useEffect } from "react";

// import CallCardLite from "../callCard/CallCardLite";

// import CallCard3 from "./CallCard3";


export default function Center_container() {


  // const theme = useTheme();
  // const themeSelect = theme.palette.mode;

  return (

    <Box
      display={"flex"}
      flexDirection={"column"}
      bgcolor={"background.default"}
      color={"text.primary"}
      height={"100%"}
      width={"100%"}

    >











      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        sx={{
          width: "100%",
          display: { md: "flex", xs: "none" },
          alignItems: "center",
          justifyContent: "space-betwee",
        }}
      >
        <Autocomplete
          bgcolor={"background.default"}
          color={"text.primary"}
          size="small"
          disablePortal
          id="combo-box-demo"
          options={searchItemsSuggetioins}
          sx={{ width: "70%", m: 1 }}
          renderInput={(params) => <TextField {...params} label="Search 501,246 Users, Profession, Id, Skills" />}
        />


        <LanguageSelect />

        {/* <Button
          variant="contained"
          sx={{ 
            borderRadius: 999, m: "0 15px", 
            bgcolor: themeSelect==="dark" ? "#333" : "#1565C0",
            "&:hover":{bgcolor: themeSelect==="dark" ? "#222" : "#1565C0"},
            color:themeSelect==="dark" ? "#fff" : "#fff"
          }}
          size="small"
        >
          <AllInclusiveOutlinedIcon sx={{ 
            marginRight: 1, 
            color: themeSelect==="dark"?"#fff":"#fff"
          }} 
            />
          534
        </Button> */}


        <Button variant="soft" color="info" size="small" sx={{m:1, borderRadius:999}}>
        <AllInclusiveOutlinedIcon color="info" sx={{marginRight: 1}}/>
            10.16K
        </Button>



      </Box>






      <Box
        sx={{
          // bgcolor: `${themeSelect === "light" ? "#f1f1f1" : "#222"}`,
          // width: "100%",
          flexGrow:1,
          height:"100%",
          // width:"100%",
          overflowY: "auto",
          display:"flex", 
          flexWrap:"wrap",
          justifyContent:"center",
          alignItems:"flex-start",
          p:1,

        }
      }
      >
{/* 
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
        <CallCardLite/>
         */}


         

<Box width={1} display={"flex"} justifyContent={"center"} flexWrap={"wrap"}>

    {/* {usersDataLocal.map((item)=> <CallCardReel key={item.id} item={item}/> )} */}
    

        <CallCardReel />
        {/* <CallCard_smallBox/> */}
        {console.log()}
        <CallCard_cardBox/> 
        

{/* {usersDataLocal.map((item)=> 
  <CallCard_smallBox 
      key={item.id}
      item={item}
  /> )}

{usersDataLocal.map((item)=> 
  <Avatar
      src={item.avatar}
      sx={{height:100, width:100, m:1, borderRadius:9}}
      key={item.id}
      item={item}
  /> )}
 */}

    {/* {usersDataLocal[0]} */}
    {/* <CallCardReel/>
    <CallCardReel/>
    <CallCardReel/>
    <CallCardReel/> */}


  <CourseCard imgUrl="https://img-b.udemycdn.com/course/240x135/4471614_361e_5.jpg" title="The Ultimate React Course 2024: React, Redux & More"/>
  <CourseCard imgUrl="https://img-b.udemycdn.com/course/240x135/3749464_eaea.jpg" title="React and Typescript: Build a Portfolio Project"/>

  {/* <VideoCard/>
  <VideoCard/>
  <VideoCard/>
  <VideoCard/> */}

  <GroupCallCard/>
  <GroupCallCard/>
  <GroupCallCard/>
  <GroupCallCard/>

  <LogsCard/>
  <LogsCard/>
  <LogsCard/>
  <LogsCard/>

 

          <PostCard
            name="Moinuddin chisti"
            profilePicture="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"
            profession="CEO at Kaitoker"
            onlineStatus="success"
            accountType="verified"
            postContent="In today's fast-paced world, where technological advancements continue to shape our daily lives, it's crucial for businesses to adapt and evolve with the ever-changing digital landscape. In this post, we explore the importance of embracing change and provide insights on how to navigate the dynamic world of digital marketing, web development, and user experience."
            topic="Update"
            topicLogoUrl="https://img.icons8.com/?size=512&id=bDkQlpOV2TWB&format=png"
            postTime="Just now"
            likes={20}
            disLikes={10}
            comments={12}
            shares={2}
          />

<PostCard
            name="Moinuddin chisti"
            profilePicture="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"
            profession="CEO at Kaitoker"
            onlineStatus="success"
            accountType="verified"
            postContent="In today's fast-paced world, where technological advancements continue to shape our daily lives, it's crucial for businesses to adapt and evolve with the ever-changing digital landscape. In this post, we explore the importance of embracing change and provide insights on how to navigate the dynamic world of digital marketing, web development, and user experience."
            topic="Update"
            topicLogoUrl="https://img.icons8.com/?size=512&id=bDkQlpOV2TWB&format=png"
            postTime="Just now"
            likes={20}
            disLikes={10}
            comments={12}
            shares={2}
          />


    {usersDataLocal.map((item)=> <CallCard key={item.id} item={item}/> )}


{/* 
        <CallCard 
          user_name="Abullah Al Kaisan"
          user_profetion="Web developer"
          user_profilePicture="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg" 
          user_country="Bangladesh" 
          user_country_flag="in" 
          user_followers={4999}
          user_accoutType="vip"
          user_about="asdfsadf" 
          user_rating="45"
          user_total_call="564" 
          user_perHourCost="4.35"
          user_skills="asdfasdf" 
          user_language="English"
        />

        <CallCard 
          user_name="Abullah Al Kaisan"
          user_profetion="Web developer"
          user_profilePicture="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          user_country="Bangladesh" 
          user_country_flag="jp" 
          user_followers="145"
          user_accoutType="vip"
          user_about="asdfsadf" 
          user_rating="45"
          user_total_call="564" 
          user_perHourCost="4.35"
          user_skills="asdfasdf" 
          user_language="English"
        />


<CallCard 
          user_name="Abullah Al Kaisan"
          user_profetion="Web developer"
          user_profilePicture="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          user_country="India" 
          user_country_flag="id" 
          user_followers="145"
          user_accoutType="vip"
          user_about="asdfsadf" 
          user_rating="45"
          user_total_call="564" 
          user_perHourCost="4.35"
          user_skills="asdfasdf" 
          user_language="English"
        />

        <CallCard 
          user_name="Abullah Al Kaisan"
          user_profetion="Web developer"
          user_profilePicture="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          user_country="Bangladesh" 
          user_country_flag="bd" 
          user_followers="145"
          user_accoutType="vip"
          user_about="asdfsadf" 
          user_rating="45"
          user_total_call="564" 
          user_perHourCost="4.35"
          user_skills="asdfasdf" 
          user_language="English"
        />

<CallCard 
          user_name="Abullah Al Kaisan"
          user_profetion="Web developer"
          user_profilePicture="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          user_country="Bangladesh" 
          user_country_flag="bd" 
          user_followers="145"
          user_accoutType="vip"
          user_about="asdfsadf" 
          user_rating="45"
          user_total_call="564" 
          user_perHourCost="4.35"
          user_skills="asdfasdf" 
          user_language="English"
        />

        <CallCard 
          user_name="Abullah Al Kaisan"
          user_profetion="Web developer"
          user_profilePicture="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          user_country="Bangladesh" 
          user_country_flag="bd" 
          user_followers="145"
          user_accoutType="vip"
          user_about="asdfsadf" 
          user_rating="45"
          user_total_call="564" 
          user_perHourCost="4.35"
          user_skills="asdfasdf" 
          user_language="English"
        /> */}

</Box>











      </Box>
    </Box>
  );
}

const searchItemsSuggetioins = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
];

