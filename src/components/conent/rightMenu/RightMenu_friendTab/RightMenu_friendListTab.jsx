
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { IconButton, TextField } from '@mui/material';
import { usersDataLocal } from '../../../../usersDataLocal';
import PeopleList from '../PeopleList';
import TuneIcon from '@mui/icons-material/Tune';
import FriendsList_chat from './FriendsList_chat';
import SettingsIcon from '@mui/icons-material/Settings';
import { axiosInstance } from '../../../../AxiosInstance';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';




function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ height: "100%", width: "100%", }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ height: "100%", width: "100%" }}>
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





  const [myFollowingUsers, setMyFollowingUsers] = useState(null)
  const [myFriends, setMyFriends] = useState(null)
  const [myFollowers, setMyFollowers] = useState(null)
  const {loginUserData} = useContext(AuthContext);





  useEffect(() => {

    const fetchFollowing = async () => {
      try {
        const response = await axiosInstance.post('following/get-following', { following: loginUserData?.following });
        setMyFollowingUsers(response.data);
      } catch (error) {
        console.error('Error fetching following data:', error);
      }
    };


    const fetchFriends = async () => {
      try {
        const response = await axiosInstance.post('following/get-friends', { friends: loginUserData?.friends });
        setMyFriends(response.data);
      } catch (error) {
        console.error('Error fetching following data:', error);
      }
    };


    const fetchFollowers = async () => {
      try {
        const response = await axiosInstance.post('following/get-followers', { followers: loginUserData?.followers });
        console.log(response.data);
        
        setMyFollowers(response.data);
      } catch (error) {
        console.error('Error fetching following data:', error);
      }
    };


    fetchFollowing();
    fetchFriends();
    fetchFollowers();
  }, [
    loginUserData,
    loginUserData?.following, 
    loginUserData?.friends,
    loginUserData?.followers,

  ]);



  // console.log(myFollowingUsers);
  






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







  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>


      <Box sx={{ display: "flex", justifyContent: "center", borderBottom: 0, pb:0, borderColor: 'divider', width: 370 }}>
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
          <Tab label="Followers" {...a11yProps(3)} />
        </Tabs>
      </Box>




      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      >




        <Box sx={{ display: "flex", height: "100%", width: "100%" }}>
          <CustomTabPanel value={value} index={0}>



            <Box sx={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", overflow: "hidden" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", px: 2, pb:1, pt:1 }}>
                <TextField
                  fullWidth
                  id="filled-search"
                  label="Search"
                  type="search"
                  size="small"
                  variant="outlined"
                  // variant="standard"
                />
                <IconButton sx={{marginLeft:1}}>
                  <TuneIcon />
                </IconButton>
                <IconButton sx={{marginLeft:1}}>
                <SettingsIcon />
                </IconButton>
              </Box>
              <Box sx={{ height: "100%", 
                // width: "100%",
                display: "flex", flexDirection:"column",  overflow: "auto" }}>
                <Box 

                sx={
                  // {p:2}
                  {p:1}
                }
                >
                  {sortedUsers.map((item) => (
                    <PeopleList
                      key={item.id}
                      title={item.userName}
                      subTitle={item.profession}
                      lastSeen={"11m"}
                      isVarified={item.isVarified}
                      avatarUrl={item.avatar.slice(0, 92)}
                      isOnline={item.isOnline}

                      // country={item.country}
                      // flag={item.flag}
                      avatarSize={47}
                      // avatarSize={40}
                      
                      avatar={true}
                      badge={true}
                    />
                  ))}
                </Box>
              </Box>
            </Box>




            {/* 


          <Box
            display={"flex"}
            bgcolor={"yellow"}
            flexDirection={"column"}
            sx={{ height: "100%", overflow: "auto" }}
          >
            {sortedUsers.map((item) => (
              <PeopleList
                key={item.id}
                title={item.userName}
                subTitle={item.profession}
                lastSeen={"26 minutes ago"}
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
          </Box> */}
          </CustomTabPanel>


          <CustomTabPanel value={value} index={1}>


            <FriendsList_chat item={myFriends}/>


          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <FriendsList_chat item={myFollowingUsers}/>
          </CustomTabPanel>
          <CustomTabPanel value={value}  index={3}>
            <FriendsList_chat item={myFollowers}/>
          </CustomTabPanel>

        </Box>
      </Box>
    </Box>
  );
}
