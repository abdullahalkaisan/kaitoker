import { Box, IconButton, Typography } from "@mui/material";
import PeopleCard from "./PeopleCard";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TypeMessageBox from '../../TypeMessageBox';
import ChatCard from "./ChatCard";
import ChatCard_for_group from "./ChatCard_for_group";

export default function ChatList() {



  return (
    <>
        <Box
            display={"flex"}
            height={"100%"}
            // width={"100%"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            overflow={"auto"}
            sx={{ flexGrow: 1 }}
            py={3}
          >
            <Box
              px={3}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mb={2}
            >
              <IconButton>
                <ArrowBackIcon />
              </IconButton>
              <PeopleCard
                title="Abdullah Al Kaisan"
                subTitle="Web deloper"
                avatar={1}
                badge={1}
                avatarUrl={"https://lh3.googleusercontent.com/a/ACg8ocKjcLQnbqhz1e6GuIXL1IrBSg2pG_FSAtw-vO1ejOyW890"}
                flag={"ph"}
                isOnline={"online"}
              />
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </Box>

            {/* justifyContent:"flex-end",  */}
            <Box
              px={2}
              sx={{
                flexGrow: 1,
                flexDirection: "column",
                height: "100%",
                display: "flex",
                overflowY: "auto",
              }}
            >


                
              <ChatCard type="me"  content="Hi"/>
              <ChatCard content="heyhowareyouiseverythingioodifnothencallmeI'mhereasdfasdf:)" />
              <ChatCard type="me"  content="I'm here forever for you what the "/>
              <ChatCard type=""  content="Hi, how are you is  everything good? "/>
              <ChatCard type="me"  content="Hi, how are everything everything good? "/>
              <ChatCard type="me"  content="Hi last"/>
              <ChatCard_for_group title="Abdullah Al Kaisan" subTitle="Founder of Kaitoker" isVarified="1" avatarUrl="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"/>
              <ChatCard_for_group title="Jhon Doe" subTitle="Software Engineer" avatarUrl="https://lh3.googleusercontent.com/a/ACg8ocKjcLQnbqhz1e6GuIXL1IrBSg2pG_FSAtw-vO1ejOyW890"/>

              {/* <Box
                display={"flex"}
                justifyContent={"flex-end"}
                width={"100%"}
                my={0.5}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 4,
                    display: "flex",
                    minWidth: "auto",
                    maxWidth: "fit-content",
                    flexWrap: "wrap",
                    wordWrap: "break-word",
                    backgroundColor: "#333000",
                    color: "#fff",
                  }}
                >
                  <Typography m={1} variant="p" gutterBottom>
                    Lorem, ipsum dolor.
                  </Typography>
                </Box>
              </Box> */}
            </Box>
              
              <Typography sx={{margin:"6px 30px"}} variant="caption">Abdullah Al Kaisan is Typing...</Typography>

            <TypeMessageBox />
          </Box>
 

    </>
  )
}
