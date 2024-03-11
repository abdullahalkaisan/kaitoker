import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Badge,  TextField} from '@mui/material';
// import PeopleList from './peopleList';

import { 
  UilUser,
  UilCommentLines,
  UilUsdCircle,
  UilHistory, 
} from '@iconscout/react-unicons'

import PeopleList from './PeopleList';
import { usersDataLocal } from '../../../usersDataLocal';
import LogsCard from '../../LogsCard';
import MessageList from './MessageList';
import ChatList from './ChatListBox';
import RightMenu_friendListTab from './RightMenu_friendListTab';

function chatOpen(clickedItem) {
  console.log(clickedItem);
}


export function CustomTabPanel(props) {
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
          // width:"100%",
          flexGrow:1, 
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

      <Box height={"100%"} width={"100%"} display={"flex"} overflow={"auto"}>
        <CustomTabPanel value={value} index={0}>

          <Box
            display={"flex"}
            height={"100%"}
            width={"100%"}
            flexDirection={"column"}
            overflow={"hidden"}
            // sx={{ flexGrow: 1 }}
            // p={3}
          >

            <RightMenu_friendListTab/>



            {/* {sortedUsers.map((item) => (
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
            ))} */}



          </Box>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <ChatList/>
          {/* <MessageList chatOpen={chatOpen()}/> */}
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Box display={"flex"} flexWrap={"wrap"} width={1} height={1} justifyContent={"center"} pt={2}>
            <LogsCard/>
            <LogsCard/>
            <LogsCard/>
            <LogsCard/>
          </Box>
        </CustomTabPanel>
      </Box>

      {/* <Box bgcolor={"gray"} display={"flex"} flex={1}>

        <CustomTabPanel value={value} index={0}>
              <PeopleList/>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>


        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>

      </Box> */}
    </Box>
  );
}
