import { Box, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import React from "react";
import Schedules from "../../../pages/ProfilePage/TabMenuProfile/Schedules";
import PeopleCard from "../../conent/rightMenu/PeopleCard";

export function CustomTabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 2 }}>
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



CallCardReelTap.propTypes = {
  CallCardReel_details: PropTypes.any,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};




export default function CallCardReelTap(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Details" {...a11yProps(0)} />
            <Tab label="Shidule" {...a11yProps(1)} />
            <Tab label="About" {...a11yProps(2)} />
            <Tab label="Review" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>

          {props.CallCardReel_details}

        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Schedules />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Typography my={2} mx={4} variant="body1" color="#666">
            Hey My name is Kaisan Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Distinctio, magni? Dolorem, aperiam neque pariatur
            dicta iure facilis aliquid odit ea.
          </Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>

          {/* <img width="38" height="38" src="https://img.icons8.com/color/48/sad--v1.png" alt="sad--v1"/> */}
          {/* <img width="38" height="38" src="https://img.icons8.com/color/48/cool--v1.png" alt="cool--v1"/> */}
        {/* <Badge color="error" badgeContent={"6%"} max={999}>
        </Badge>
        <Badge color="success" badgeContent={"94%"} max={999}>
        </Badge> */}
        {/* <img width="48" height="48" src="https://img.icons8.com/color/48/boring--v1.png" alt="boring--v1"/> */}
        
        {/* <img width="38" height="38" src="https://img.icons8.com/color/48/happy--v1.png" alt="happy--v1"/>
        <img width="38" height="38" src="https://img.icons8.com/color/48/angry--v1.png" alt="angry--v1"/>
        <img width="38" height="38" src="https://img.icons8.com/color/48/disgusting.png" alt="disgusting"/>
        <img width="38" height="38" src="https://img.icons8.com/color/48/smiling.png" alt="smiling"/>
         */}
        {/* <img width="48" height="48" src="https://img.icons8.com/color/48/angel--v1.png" alt="angel--v1"/> */}
          <Box 
          // bgcolor={"#f1f1f190"}
          // #f1f1f190 
          // #ED6C0210 
          bgcolor={"#00847710"}
          p={2}
          m={2}
          // borderRadius={3}
          sx={{borderRadius:3}}

          
          >
            <PeopleCard 
            title={"Abdullah Al Kaisan"} 
            subTitle={"CEO At Kaitoker"} 
            isVarified isOnline={"online"} 
            badge 
            avatar 
            time={"2 month ago"}
            avatarSize={28} 
            avatarUrl={"https://lh3.googleusercontent.com/a/ACg8ocJtYzW14Y0D7PwkgiwSPw7bDe8gJC_FoQFE7A8mP71PRiI"} />
            {`Since I've talk with luca, she's a great teacher. I'm enjoyed a lot`}
          </Box>

          <Box 
          // bgcolor={"#f1f1f190"}
          // #f1f1f190 
          // #ED6C0210 
          bgcolor={"#ED6C0210"}
           p={2} 
           m={2}
          //  borderRadius={3}
           sx={{borderRadius:3}}
           
           >
            <PeopleCard 
            title={"Abdullah Al Kaisan"} 
            subTitle={"CEO At Kaitoker"} 
            isVarified isOnline={"online"} 
            badge 
            avatar 
            time={"2 month ago"}
            avatarSize={28} 
            avatarUrl={"https://lh3.googleusercontent.com/a/ACg8ocJtYzW14Y0D7PwkgiwSPw7bDe8gJC_FoQFE7A8mP71PRiI"} />
            {`A little bit boring but good teacher.`}
          </Box>



        </CustomTabPanel>
      </Box>
    </>
  )
}
