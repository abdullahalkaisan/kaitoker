import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { IconButton, TextField } from '@mui/material';
import { usersDataLocal } from '../../../usersDataLocal';
import PeopleList from './PeopleList';
import TuneIcon from '@mui/icons-material/Tune';
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
        <Box sx={{ p: 3 }}>
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

export default function RightMenu_friendListTab() {

  // Custom sort function
  const sortUsers = (a, b) => {
    const statusOrder = { online: 0, busy: 1, "": 2 }; // Define order for online statuses
    // Access and compare status order values
    const orderA = statusOrder[a.isOnline];
    const orderB = statusOrder[b.isOnline];
    return orderA - orderB;
  };
  
  // Sort the users array
  const sortedUsers = usersDataLocal.sort(sortUsers);
  console.log(sortedUsers[0]);
  console.log(usersDataLocal);
  
  
  



  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width:"350px", mt:0 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable auto tabs example"
            >
          <Tab label="Fevorate (11)" {...a11yProps(0)} />
          <Tab label="Friends" {...a11yProps(1)} />
          <Tab label="Following" {...a11yProps(2)} />
          <Tab label="Followers" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>

        <Box sx={{display:"flex", alignItems:"center", mb: 3}}>
            <TextField
                    sx={{width:1 , marginRight:2}}
                    id="filled-search"
                    label="Search"
                    type="search"
                    size="small"
                    variant="outlined"
                />

            <IconButton>
                <TuneIcon/>
            </IconButton>
        </Box>



        <Box
            display={"flex"}
            height={"100%"}
            // width={"100%"}
            flexDirection={"column"}
            overflow={"auto"}
            sx={{ flexGrow: 1 }}
            // p={3}
          >
            {sortedUsers.map((item) => (
              <PeopleList
                key={item.id}
                title={item.userName}
                subTitle={item.profession}
                country={item.country}
                isVarified={item.isVarified}
                avatarUrl={item.avatar}
                isOnline={item.isOnline}
                flag={item.flag}
                avatar={1}
                badge={1}
                avatarSize={47}
              />
            ))}
        </Box>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
