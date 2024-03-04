import { Box, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import React from "react";
import Schedules from "../../../pages/ProfilePage/TabMenuProfile/Schedules";

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
          <Box sx={{pt:2}}>
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
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>

        {props.CallCardReel_details}

      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Schedules/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Typography my={2} mx={4} variant="body1" color="#666">
            Hey My name is Kaisan Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Distinctio, magni? Dolorem, aperiam neque pariatur
            dicta iure facilis aliquid odit ea.
          </Typography>
      </CustomTabPanel>
    </Box>
    </>
  )
}
