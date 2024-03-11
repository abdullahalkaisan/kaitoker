import { Box, Tab, Tabs, Typography, IconButton } from "@mui/material";
import PropTypes from 'prop-types';


import { 
  UilCommentLines,
  UilSetting,
  UilMessage,
  UilApps,
  UilPresentation,
  UilPen

} from '@iconscout/react-unicons'
import React from "react";
import TypeMessageBox from "../../components/TypeMessageBox";
import PeopleCard from "../../components/conent/rightMenu/PeopleCard";
import { useTheme } from "@emotion/react";
import MessageList from "../../components/conent/rightMenu/MessageList";




function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
      style={{
        // width:"100%", 
        flexGrow:1,
        height:"100%"
      }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box   
        sx={{ 
          // p: 3, 
          display:"flex", 
          flexDirection:"column", 
          overflowY:"auto",
          width:"100%", 
          height:"100%"
          }}>
          {children}
        </Box>
      )}
    </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  















export default function CallChatNav() {
    const theme = useTheme();
    const themeUse = theme.palette.mode;

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  



  return (
    <Box
      bgcolor={"background.default"}
      color={"text.primary"}
      sx={{
        height: "100%",
        width: "370px",
        display: { md: "flex", xs: "none" },
        flexDirection: "column",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider", paddingTop: 1 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab  {...a11yProps(0)}  icon={<UilCommentLines />}/>
          <Tab  {...a11yProps(1)}  icon={<UilMessage />} />
          <Tab  {...a11yProps(2)}  icon={<UilApps />} />
          <Tab  {...a11yProps(3)}  icon={<UilSetting />} />
        </Tabs>
      </Box>

      <Box height={"100%"} width={"100%"} display={"flex"} overflow={"auto"}>
        <CustomTabPanel value={value} index={0}>
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
              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                width={"100%"}
                my={0.5}
              >
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
                    bgColor: "red",
                  }}
                  bgcolor={`${themeUse === "dark" ? "#222" : "#f1f1f1"}`}
                >
                  {/* <Avatar_small/> */}
                  <PeopleCard />
                  <Typography m={1} variant="p" gutterBottom>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus quibusdam asperiores, soluta aliquam at explicabo
                    ad perspiciatis veritatis voluptatum tenetur!
                  </Typography>
                </Box>
              </Box>

            </Box>

            <TypeMessageBox />

          </Box>
          {/* <MessageList/> */}
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
            <MessageList/>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <Box display={"flex"} flexDirection={"column"}>

            <Box>
              <IconButton>
                  <UilPresentation/>
              </IconButton>
              Share screen
            </Box>
            <Box>
              <IconButton>
                  <UilPen/>
              </IconButton>
              Drawing
            </Box>

            <Box>
              <IconButton>
              <img width="24" height="24" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play"/>
              </IconButton>
              Play Youtube
            </Box>

          </Box>

        </CustomTabPanel>

        <CustomTabPanel value={value} index={3}>
afsdfsdf
        </CustomTabPanel>


      </Box>
    </Box>
  );
}
