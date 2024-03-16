import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AudioSlider_custom from '../../components/callCard/AudioSlider_custom';
import AudioControlBox from '../../components/callCard/CallCardReel/AudioControlBox';
import ReelPage_name from './ReelPage_name';
import ReelPage_action from './ReelPage_action';
import ReelPage_audioAction from './ReelPage_audioAction';
import { Avatar, Tooltip } from '@mui/material';
import { MdRoom } from 'react-icons/md';
import SubDetails from '../../components/callCard/SubDetails';
import ChipsCustom from '../../components/callCard/ChipsCustom';
import { usersDataLocal } from '../../usersDataLocal';
import AboutList from '../ProfilePage/TabMenuProfile/AboutList';
import ReelPage_details from './ReelPage_details';

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
        <Box sx={{ p: 0 }}>
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

export default function ReelPage_tab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height:"100%", display:"flex", flexDirection:"column", }}>
      <Box sx={{ display:"flex", justifyContent:"center", borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Details" {...a11yProps(0)} />
          <Tab label="Skills" {...a11yProps(1)} />
          <Tab label="Shidule" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>

        {/* <Typography
          sx={{ color: "#777", display: "flex", alignItems: "center" }}
          // textAlign={"center"}
          variant="subtitle1"
          mt={-0.5}
          p={0}
          gutterBottom
        >
          <MdRoom sx={{ fontSize: "medium" }} />

          {"Bangladesh"}

          <Tooltip title={"Bangladesh"} placement="top">
            <Box sx={{ display: "flex", alignItems: "center", px: 1 }}>
              <img
                style={{
                  borderRadius: 3,
                  border: "1px solid #77777750",
                  boxShadow: "10px 10px 10px solid black",
                }}
                src={`https://flagcdn.com/w20/${"bd"}.png`}
              />
            </Box>
          </Tooltip>
        </Typography> */}


          {/* <AboutList/> */}

          <ReelPage_details/>


      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {usersDataLocal.map((item)=><ChipsCustom item={item} key={item.id}/>)}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
