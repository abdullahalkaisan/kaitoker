import { Box, Chip, IconButton, Typography } from "@mui/material";
import PeopleCard from "./PeopleCard";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TypeMessageBox from '../../TypeMessageBox';
import ChatCard from "./ChatCard";
import ChatCard_for_group from "./ChatCard_for_group";
import { UilEllipsisH } from '@iconscout/react-unicons'
import ChatBubble from "./ChatBubble/ChatBubble";
import { IoMdClose } from "react-icons/io";
import { MdClose, MdReply } from "react-icons/md";
import { useTheme } from "@emotion/react";
import ChipsCustom from "../../callCard/ChipsCustom";


export default function ChatList() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";


  return (
    <>
      <Box sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "column" }}>





        <Box sx={{ display: "flex", alignItems: "cetner", justifyContent: "space-between", p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "cetner" }}>
            <Box marginRight={2}>
              <IconButton>
                <ArrowBackIcon />
              </IconButton>
            </Box>
            <PeopleCard
              title="John Doe"
              subTitle="Web deloper"
              avatar={1}
              badge={1}
              avatarUrl={"https://lh3.googleusercontent.com/a/ACg8ocKjcLQnbqhz1e6GuIXL1IrBSg2pG_FSAtw-vO1ejOyW890"}
              flag={"ph"}
              isOnline={"online"}
            />
          </Box>
          <Box>
            {/* <IconButton>
              <UilVideo />
            </IconButton> */}
            <IconButton>
              <UilEllipsisH />
            </IconButton>
          </Box>
        </Box>




        <Box sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>


          <Box sx={{ height: "100%", width: "100%", overflow: "auto", display: "flex", flexDirection: "column-reverse" }}>
{/*             
            <Box sx={{display:"flex", width:"97%"}}>
              <Bo x sx={{maxWidth:"70%"}}>
                  <ChipsCustom 
                    color="primary" 
                    size="large" 
                    whiteSpace
                    label="How are you?"
                  />
              </Bo>
    
            </Box> */}

            
            <Box px={2} >
              <ChatCard type="me" content="Hi" />
              <ChatCard content="heyhowareyouiseverythingioodifnothencallmeI'mhereasdfasdf:)" />
              <ChatCard type="me" content="I'm here forever for you what the " />
              <ChatCard type="" content="Hi, how are you is  everything good? " />
              <ChatCard type="me" content="Hi, how are everything everything good? " />
              <ChatCard type="me" content="Hi last" />
              <ChatCard_for_group title="Abdullah Al Kaisan" subTitle="Founder of Kaitoker" isVarified="1" avatarUrl="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg" />
              <ChatCard_for_group title="Jhon Doe" subTitle="Software Engineer" avatarUrl="https://lh3.googleusercontent.com/a/ACg8ocKjcLQnbqhz1e6GuIXL1IrBSg2pG_FSAtw-vO1ejOyW890" />
              <ChatCard type="me" content="Hi last" />
            </Box>
          </Box>

          <Box sx={{ marginY: 2 }}>


            <Typography
              variant="caption"
              sx={{
                margin: "0px 30px 15px 30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }} >

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <PeopleCard
                  avatar
                  avatarSize={20}
                  avatarUrl={"https://lh3.googleusercontent.com/a/ACg8ocKjcLQnbqhz1e6GuIXL1IrBSg2pG_FSAtw-vO1ejOyW890"}
                />

                {/* <Box>
                  Typing...
                </Box> */}
                <Box sx={{ marginLeft: -1, display: "flex" }}>
                  <ChatBubble />
                </Box>

              </Box>

              <Box>
                {/* Seen at 12:46AM */}
                {/* Delivered at <strong>11:01AM </strong> <i>April 30, 2024</i>  */}
                Seen at <strong>11:01AM </strong> <i>April 30, 2024</i>
              </Box>



              {/* When User spy in chatbox the avatar will appiear and when use will type : chat bubble animation will appiar */}


            </Typography>

            <Box sx={{ display: "flex", bgcolor: `${isDark ? "#222" : "#f1f1f190"}`, m: 2, borderRadius: 3, alignItem: "center", justifyContent: "space-between", p: 3 }}>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", alignItem: "center" }}>
                  <PeopleCard avatar avatarSize={30} avatarUrl={"https://lh3.googleusercontent.com/a/ACg8ocKjcLQnbqhz1e6GuIXL1IrBSg2pG_FSAtw-vO1ejOyW890"} />
                  <Typography variant="caption">
                    Replying
                  </Typography>

                  <MdReply color="#1565C0" fontSize={20} style={{marginLeft:2}} />
                </Box>
                <Box sx={{ bgcolor: `${isDark ? "#111" : "#33333320"}`, width: "max-content", p: 1, mt: 1, ml: 2, borderRadius: 3 }}>
                  Hi are you?
                </Box>
                <Box>
                  {/* <Typography variant="caption">
                    <strong>11:01AM </strong> <i>April 30, 2024</i>

                  </Typography> */}
                  {/* Seen at 12:46AM */}
                  {/* Delivered at <strong>11:01AM </strong> <i>April 30, 2024</i>  */}
                </Box>
              </Box>

              <Box>
                <IconButton>
                  <MdClose />
                </IconButton>
              </Box>
            </Box>

            <TypeMessageBox />
          </Box>

          {/* <Box
            sx={{
              height:"100%",
              display: "flex",
              flexDirection: "column",
              overflow: "auto",
            }}
          >
            <Box px={2}>
              <ChatCard type="me" content="Hi" />
              <ChatCard content="heyhowareyouiseverythingioodifnothencallmeI'mhereasdfasdf:)" />
              <ChatCard type="me" content="I'm here forever for you what the " />
              <ChatCard type="" content="Hi, how are you is  everything good? " />
              <ChatCard type="me" content="Hi, how are everything everything good? " />
              <ChatCard type="me" content="Hi last" />
              <ChatCard_for_group title="Abdullah Al Kaisan" subTitle="Founder of Kaitoker" isVarified="1" avatarUrl="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg" />
              <ChatCard_for_group title="Jhon Doe" subTitle="Software Engineer" avatarUrl="https://lh3.googleusercontent.com/a/ACg8ocKjcLQnbqhz1e6GuIXL1IrBSg2pG_FSAtw-vO1ejOyW890" />
            </Box>
          </Box> */}

          {/* <Box>
            <Typography sx={{ margin: "6px 30px" }} variant="caption">Abdullah Al Kaisan is Typing...</Typography>
            <TypeMessageBox />
          </Box> */}


        </Box>



      </Box>


    </>
  )
}
