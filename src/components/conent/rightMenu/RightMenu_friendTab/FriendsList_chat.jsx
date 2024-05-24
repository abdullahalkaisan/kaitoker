import { Box, IconButton, TextField } from '@mui/material'
import { MdTune } from 'react-icons/md'
import PeopleList from '../PeopleList'
import { usersDataLocal } from '../../../../usersDataLocal';

export default function FriendsList_chat() {
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


    
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", overflow: "hidden" }}>
    <Box sx={{ display: "flex", justifyContent: "space-between", px: 2, pb:1, pt:1 }}>
      <TextField
        fullWidth
        id="filled-search"
        label="Search 456 friends"
        type="search"
        size="small"
        variant="outlined"
        // variant="standard"
      />
      <IconButton sx={{marginLeft:1}}>
        <MdTune />
      </IconButton>
    </Box>
    <Box sx={{ height: "100%", width: "100%", display: "flex", flexDirection:"column",  overflow: "auto" }}>
      <Box sx={{p:2}}>
        {sortedUsers.map((item) => (
          <PeopleList
            key={item.id}
            title={item.userName}
            subTitle={item.profession}
            lastSeen={"26m"}
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
    </Box>
  </Box>
  )
}
