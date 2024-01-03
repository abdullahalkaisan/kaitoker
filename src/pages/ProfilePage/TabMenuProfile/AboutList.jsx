
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { 
    UilLocationPoint, 
    UilEye, 
    UilCalender,
    UilSun,
    UilUser,
    UilMoneyWithdraw,
    UilLetterJapaneseA
} from '@iconscout/react-unicons'
// import { Divider, IconButton, Stack } from '@mui/material';

export default function AboutList() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <UilUser />
              </ListItemIcon>
              <ListItemText primary="546523" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <UilLocationPoint />
              </ListItemIcon>
              <ListItemText primary="Bangladesh" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <UilSun  />
              </ListItemIcon>
              <ListItemText primary="3:05 PM" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <UilMoneyWithdraw  />
              </ListItemIcon>
              <Box sx={{color:"green"}}>
                <ListItemText primary="$2,466" />
              </Box>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <UilLetterJapaneseA  />
              </ListItemIcon>
              <Box >
                <ListItemText primary="Bengali, Hindi, English" />
              </Box>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <UilCalender />
              </ListItemIcon>
              <ListItemText primary="21 Dec 2022 (1y 4m)" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <UilEye />
              </ListItemIcon>
              <ListItemText primary="2,467,361" />
            </ListItemButton>
          </ListItem>

        </List>
      </nav>

      {/* <Divider/>


    <Stack display={"flex"} flexDirection={"row"} width={"max-content"} borderRadius={999} py={0.5} px={1} m={2} bgcolor={"#f1f1f1"}>
      <IconButton>
        <img style={{height:"18px"}} src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"  />
      </IconButton>

      <IconButton>
        <img style={{height:"18px"}} src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"  />
      </IconButton>

      <IconButton>
        <img style={{height:"18px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"  />
      </IconButton>
    </Stack> */}




    </Box>
  );
}
