import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Schedule from './TabMenuProfile/Schedule';
import AboutList from './TabMenuProfile/AboutList';
import PostCardWrapper from './TabMenuProfile/PostCardWrapper';
import CallCardLite from '../../components/callCard/CallCardLite';
// import { UilLock } from '@iconscout/react-unicons'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';





function CustomTabPanel(props) {
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
        // sx={{ p:0}} 
        <Box >
          <Typography>{children}</Typography>
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

export default function TabMenuProfile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box 
      display={"flex"} 
      flexDirection={"column"} 
      height={"100vh"} 
      overflow={"hidden"}
    >

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          <Tab label="Posts" {...a11yProps(0)} />
          <Tab label="Schedule" {...a11yProps(1)} />
          <Tab label="About" {...a11yProps(2)} />
          <Tab  iconPosition='end'  label="Friends" {...a11yProps(3)}
          // icon={<LockOutlinedIcon fontSize='small'/>} 
          />
          <Tab  iconPosition='end' label={`analytics`}{...a11yProps(4)} 
            // icon={<LockOutlinedIcon fontSize='small'/>}
          />
        </Tabs>
      </Box>


      <Box overflow={"auto"}>

        <CustomTabPanel value={value} index={0}>
          <PostCardWrapper/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Schedule/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <AboutList/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>

          <Box display={"flex"} sx={{flexGrow:1}} height={"100%"} flexWrap={"wrap"} justifyContent={"center"} p={3}   bgcolor={"#f1f1f1"}>
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
          </Box>





        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <AboutList/>
        </CustomTabPanel>
      </Box>




    </Box>
  );
}
