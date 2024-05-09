import { Box, CardActionArea, IconButton, Typography } from "@mui/material";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useTheme } from "@emotion/react";
import PeopleCard from "./PeopleCard";

export default function ChatCard_for_group(props) {

    const {avatarUrl, isVarified, title, subTitle} = props;

    const theme = useTheme();
    const isDark = theme.palette.mode === "";
    
    



  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        width={"100%"}
        my={0.5}
      >

        <CardActionArea sx={{borderRadius:4, maxWidth:"fit-content", minWidth:"auto"}}>

        <Box
          sx={{
            p: 1,
            borderRadius: 4,
            display: "flex",
            // width:"max-content"
            minWidth: "auto",
            maxWidth: "fit-content",
            flexWrap: "wrap",
            wordWrap: "break-word",
            transition:"all",
            transitionTimingFunction:"ease",
            transitionDuration:"2s",
            cursor:"pointer",
            // border:"1px solid #99999920",
            // bgcolor:"#f1f1f190",
            "&:hover":{bgcolor:"#f1f1f1", transition:"easy 3s"}
          }}
          bgcolor={`${isDark ? "#222" : "#f1f1f100"}`}
        >
          {/* <Avatar_small/> */}
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={1}
          >
              <PeopleCard
                title={title}
                alignItems="start"
                varified={1}
                subTitle={subTitle}
                subTitleSize={16}
                avatar={true}
                // flag={"ph"}
                avatarSize={24}
                time={"12:34 AM (edited)"}
                avatarUrl={avatarUrl}
                isVarified={isVarified}
              />

            {/* <IconButton>
              <MoreHorizIcon />
            </IconButton> */}
          </Box>

          {/* <Typography m={1} variant="p" gutterBottom>
            hi
          </Typography> */}

          {/* <Box width={1} textAlign={"end"}>
                    <Typography mx={1} variant="caption" gutterBottom>
                      3:11 AM - 1/2/2024
                    </Typography>
                  </Box> */}
        </Box>



        </CardActionArea>



        
      </Box>
    </>
  );
}
