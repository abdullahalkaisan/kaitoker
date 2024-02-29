import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu } from '@mui/material'
import SubDetails from '../callCard/SubDetails'
import PeopleCard from '../conent/rightMenu/PeopleCard'
import MoreVertIcon from '@mui/icons-material/MoreVert';


import { 
    UilLocationPoint, 
    UilCalender,
    UilLetterJapaneseA,
} from '@iconscout/react-unicons'


export default function MenuAvatarClick({anchorEl, handleClose, id}) {

    // const [anchorEl, setAnchorEl] = useState(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //   setAnchorEl(null);
    // };




  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      // onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            left: 30,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "left", vertical: "top" }}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
    >
      <Box p={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <PeopleCard
              avatar={false}
              badge={true}
              title={"Abdullah Al Kaisan"}
              subTitle={"CEO at Kaitoker"}
              accountType={"verified"}
            />
          </Box>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>

        <SubDetails
          user_followers={134}
          user_rating={50}
          user_language={"English"}
          user_total_call={124}
          flag={"bd"}
        />

        <Divider sx={{ mt: 2, display: "none" }} />

        <nav style={{ display: "" }} aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <UilLocationPoint />
                </ListItemIcon>
                <ListItemText size="small" primary="Bangladesh" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <UilLetterJapaneseA />
                </ListItemIcon>
                <Box>
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
          </List>
        </nav>
      </Box>
    </Menu>
  );
}
