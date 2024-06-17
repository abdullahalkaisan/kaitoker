import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Badge } from '@mui/material';
// import PeopleList from './peopleList';

import {
  UilUser,
  UilCommentLines,
  UilUsdCircle,
  UilHistory,
} from '@iconscout/react-unicons'


import LogsCard from '../../LogsCard';
// import MessageList from './MessageList';
import ChatList from './ChatListBox';
import RightMenu_friendListTab from './RightMenu_friendTab/RightMenu_friendListTab';
import MessageList from './MessageList';



export function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;


  return (

    <div
      style={{height:"100%", width:"100%"}}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            height: "100%",
            width: "100%",
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



export default function RightMenu_container() {


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      bgcolor={"background.default"}
      color={"text.primary"}
      sx={{
        display: { md: "flex", xs: "none" },
        height: "100%",
        width: "370px",
        flexDirection: "column",
      }}
    >


      <Box
        sx={{
          borderBottom: 1,
          // paddingTop: 1,
          borderColor: "divider",
          display:"flex"
        }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab icon={<UilUser />} {...a11yProps(0)} />

          <Tab
            icon={
              <Badge badgeContent={10} color="error" max={9}>
                <UilCommentLines />
              </Badge>
            }
            {...a11yProps(1)}
          />
          <Tab
            icon={
              <Badge color="error" badgeContent={2} max={9}>
                <UilUsdCircle />
              </Badge>
            }
            {...a11yProps(4)}
          />
          <Tab
            icon={
              <Badge color="error" badgeContent={1} max={9}>
                <UilHistory />
              </Badge>
            }
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>

      <Box sx={{
          display:"flex",
          height:"100%",
          width:"100%",
          overflow: "hidden"
        }}>


          <CustomTabPanel value={value} index={0}>
              <RightMenu_friendListTab/>
          </CustomTabPanel>


        <CustomTabPanel value={value} index={1}>
          {/* <ChatList /> */}
          <MessageList/>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <Box sx={{height:"100%", width:"100%", overflow:"auto"}}>
              asdfasdfsdf
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Box display={"flex"} flexWrap={"wrap"} width={1} height={1} justifyContent={"center"} pt={2}>
            <LogsCard />
            <LogsCard />
            <LogsCard />
            <LogsCard />
          </Box>
        </CustomTabPanel>


      </Box>

    </Box>
  );
}
