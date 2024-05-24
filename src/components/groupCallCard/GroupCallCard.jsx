
import {   Box, Button, Card, IconButton,  Tooltip, Typography } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TranslateIcon from '@mui/icons-material/Translate';
import { UilVideoSlash } from '@iconscout/react-unicons'
import { 
    UilMars
} from '@iconscout/react-unicons'
import { useTheme } from "@emotion/react";
import GroupAvatarBox from "./GroupAvatarBox";

export default function GroupCallCard() {


  const theme = useTheme();
  const isThemeDark = theme.palette.mode === "dark";








  return (
    <Card
      variant="outlined"
      sx={{
        width: { md: 340, xs: 1 },
        height: { md: "max-content", xs: 1 },
        borderRadius: { md: 2, xs: 0 },
        m: { md: 1, xs: 0 },
        mb: { xs: 1 },
        p: 2,
      }}
      // borderRadius={1}
      m={2}
    >
      <Box>
        <Typography mb={2} variant="body1" color="#666">
          Reading..
        </Typography>
        {/* <Chip label="Javascript"></Chip> */}
      </Box>

      <Box width={"100%"} display={"flex"} justifyContent={"center"}>
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            justifyContent: "space-evenly",
          }}
        >



        <GroupAvatarBox followers={264} avatarUrl="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg" flag="bd"/>
        <GroupAvatarBox followers={46} avatarUrl="https://pbs.twimg.com/profile_images/1377353524661604356/DIMdJND1_400x400.jpg" flag="us"/>






          <Box
            sx={{
              borderRadius: "999px",
              border: `2px dotted ${
                isThemeDark ? "skyblue" : "#1976d2"
              }`,
              width: 70,
              height: 70,
              mr: 1,
            }}
          ></Box>


          <Box
            sx={{
              borderRadius: "999px",
              border: `2px dotted ${
                isThemeDark  ? "skyblue" : "#1976d2"
              }`,
              width: 70,
              height: 70,
              mr: 1,
            }}
          ></Box>


        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 3,
          mx: 2,
        }}
      >
        <Box>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>

          <IconButton sx={{ borderRadius: 2 }} size="small">
            <TranslateIcon fontSize="14px" />
            <Box sx={{ fontSize: "medium", ml: 0.2 }}>English</Box>
          </IconButton>

          <IconButton>
            <UilVideoSlash />
          </IconButton>

          <Tooltip sx={{display:"none"}} title="Only Male">
            <IconButton color="info">
              <Box
                sx={{
                  // color: "#ff6f88",
                  display: "inline-flex",
                }}
              >
                <UilMars />
              </Box>
            </IconButton>
          </Tooltip>
        </Box>

        <Box>
          <Button variant="contained" size="small" sx={{ borderRadius: 999 }}>
            Join
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
