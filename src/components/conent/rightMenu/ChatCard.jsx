import { Box, CardActionArea, IconButton, Typography } from "@mui/material";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useTheme } from "@emotion/react";
import PeopleCard from "./PeopleCard";
import DoneAllIcon from '@mui/icons-material/DoneAll';

function MouseHover(event) {
  event.target.style.background = "flex";
}


export default function ChatCard(props) {

  const { type, content } = props;

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";





  return (
    <>
      <Box
        display={"flex"}
        justifyContent={type === "me" ? "flex-end" : "flex-start"}
        width={"100%"}
        my={0.5}
      >
        <CardActionArea style={{ 
        height:"max-content", 
        width: "max-content",
        maxWidth:"250px",
        borderRadius: 14,
        fontSize:"medium" }}>
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
          <span style={{ display: "flex", padding:10, overflowWrap: "anywhere", maxWidth: "250px" }}>
              {content}
          </span>


          <Box display={"flex"} alignItems={"center"}>
            <DoneAllIcon
              style={
                type === "me" ? { display: "flex" } : { display: "none" }
              }
              fontSize="small"
              color="primary"
            />
            <Box>
              <Typography ml={1} variant="caption" gutterBottom>
                3:11 AM
              </Typography>
              <Typography ml={1} variant="caption" gutterBottom>
                (edited)
              </Typography>
            </Box>

          </Box>
        </Box>




        </CardActionArea>
      </Box>
    </>
  );
}



