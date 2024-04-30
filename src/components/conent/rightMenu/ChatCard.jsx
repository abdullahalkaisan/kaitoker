import { Avatar, AvatarGroup, Box, CardActionArea, IconButton, Typography } from "@mui/material";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useTheme } from "@emotion/react";
import PeopleCard from "./PeopleCard";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { MdMoreVert, MdOutlineAddReaction, MdReply } from "react-icons/md";
import { useState } from "react";

function MouseHover(event) {
  event.target.style.background = "flex";
}


export default function ChatCard(props) {

  const { type, content } = props;

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  useState()





  return (
    <>
      <Box
        display={"flex"}
        justifyContent={type === "me" ? "flex-end" : "flex-start"}
        width={"100%"}
        my={0.5}
      >




        <Box position={"relative"}>

              <Box border={"1px solid #0001"} sx={{ bgcolor: `${isDark ? "#222" : "#fff"}`, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "99px", p: 0.5, mb:1 }}>
                <IconButton size="small">
                  <img width="36" height="36" src="https://img.icons8.com/emoji/48/angry-face-emoji--v2.png" alt="angry-face-emoji--v2" />
                </IconButton>

                <IconButton size="small">
                  <img width="36" height="36" src="https://img.icons8.com/emoji/48/smiling-face.png" alt="smiling-face" />
                </IconButton>

                <IconButton size="small">
                  <img width="36" height="36" src="https://img.icons8.com/emoji/48/loudly-crying-face.png" alt="loudly-crying-face" />
                </IconButton>

                <IconButton size="small">
                  <img width="36" height="36" src="https://img.icons8.com/emoji/48/heart-suit.png" alt="heart-suit" />
                </IconButton>

                <IconButton size="small">
                  <img width="36" height="36" src="https://img.icons8.com/emoji/48/downcast-face-with-sweat.png" alt="downcast-face-with-sweat" />
                </IconButton>

                <IconButton size="small">
                  <img width="36" height="36" src="https://img.icons8.com/emoji/48/grinning-squinting-face--v2.png" alt="grinning-squinting-face--v2" />
                </IconButton>
              </Box>


          <CardActionArea style={{
            height: "max-content",
            width: "max-content",
            maxWidth: "250px",
            borderRadius: 14,
            fontSize: "medium",
            position: "relative"
          }}>



            <Box
              sx={{
                p: 1,
                borderRadius: 4,
                alignItems: "center",
                display: "flex",
                // width:"max-content",
                minWidth: "auto",
                // maxWidth: "fit-content",
                maxWidth: "250px",
                flexWrap: "wrap",
                wordWrap: "break-word",
              }}
              bgcolor={
                type === "me"
                  ? isDark
                    ? "#0288D120" : "#0288D120"
                  : isDark
                    ? "#222" : "#f1f1f1"
              }
              color={type === "me"
                ? isDark
                  ? "#fff" : "#333"
                : isDark
                  ? "#fff" : "#333"}
            >
              <span style={{ display: "flex", padding: 10, overflowWrap: "anywhere", maxWidth: "250px" }}>
                {content}
              </span>


              <Box sx={{ bgcolor: `${isDark ? "#111": "#fff"}`, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "99px 0px 99px 99px", position: "absolute", bottom: -15, right: 0, zIndex: 1 }}>
                <AvatarGroup variant="circular" spacing="medium">
                  <Avatar variant="circular" sx={{ height: 24, width: 24, bgcolor: `${isDark ? "#111" :"#fff"}` }} alt="Remy Sharp" src="https://img.icons8.com/emoji/48/angry-face-emoji--v2.png" />
                  {/* <Avatar variant="circular" sx={{ height: 24, width: 24, bgcolor: `${isDark ? "#111" :"#fff"}` }} alt="Remy Sharp" src="https://img.icons8.com/emoji/48/grinning-squinting-face--v2.png" /> */}
                  {/* <Avatar variant="circular" sx={{ height: 24, width: 24, bgcolor:`${isDark ? "#111" :"#fff"}` }} alt="Remy Sharp" src="https://img.icons8.com/emoji/48/smiling-face.png" /> */}
                </AvatarGroup>

                {/* <Box fontSize={"small"}>100</Box> */}
              </Box>




              <Box display={"flex"} alignItems={"center"}>
                {/* <DoneAllIcon
                style={
                  type === "me" ? { display: "flex" } : { display: "none" }
                }
                fontSize="small"
                color="primary"
              /> */}
                <Box>
                  {/* <Typography ml={1} variant="caption" gutterBottom>
                  3:11 AM
                </Typography> */}
                  <Typography ml={1} sx={{ opacity: "50%" }} variant="caption">
                    <i>
                      (edited)
                    </i>
                  </Typography>
                </Box>

              </Box>
            </Box>

            <Typography variant="caption" sx={{ display: "", p: 2, mb: 4, opacity: "50%" }}>
              <strong>11:01AM </strong> <i>April 30, 2024</i>
            </Typography>

          </CardActionArea>


          <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
            <Box>
              <IconButton>
                <MdOutlineAddReaction />
              </IconButton>
              <IconButton>
                <MdReply />
              </IconButton>
            </Box>
            <IconButton>
              <MdMoreVert />
            </IconButton>
          </Box>


        </Box>



      </Box>
    </>
  );
}



