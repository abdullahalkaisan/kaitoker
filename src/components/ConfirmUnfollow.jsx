import { MenuItem, Menu, Button, ListItemIcon } from "@mui/material"
import { Star, UserRoundX } from "lucide-react"



export const ConfirmUnfollow = ({unfollowState, handleUnfollowClose, openUnfollow, performUnfollow, unfollowMessage}) => {

  return (
    <Menu
    anchorEl={unfollowState}
    id="account-menu"
    open={openUnfollow}
    onClose={handleUnfollowClose}
    onClick={handleUnfollowClose}
    slotProps={{
      paper: {
        elevation: 0,
        sx: {
          overflow: 'visible',
        //   filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          filter: 'drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.25))',
        //   mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      },
    }}
    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
    <MenuItem  
    // onClick={handleUnfollowClose}
    disableRipple
    // onClick={performUnfollow}
    >
          <ListItemIcon>
            <Star style={{marginRight:4, color:"royalblue"}} size={16} strokeWidth={3} />
          </ListItemIcon>
        {/* <Button color="primary" variant="contained" size="small" sx={{borderRadius:3, textTransform:"capitalize"}}> */}
            Add favorate (0/100)
        {/* </Button> */}
    </MenuItem>
    <MenuItem  
    // onClick={handleUnfollowClose}
    disableRipple
    onClick={performUnfollow}
    >
      <ListItemIcon>
            <UserRoundX style={{marginRight:4, color:"#d32f2f"}} size={16} strokeWidth={3} />
      </ListItemIcon>
        {/* <Button color="error" variant="contained" size="small" sx={{borderRadius:3, textTransform:"capitalize"}}> */}
            {unfollowMessage}
        {/* </Button> */}
    </MenuItem>
    
    </Menu>
  )
}







