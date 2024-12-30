import { MenuItem, Menu, Button } from "@mui/material"
import { UserRoundX } from "lucide-react"



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
    onClick={performUnfollow}
    >
        <Button color="error" variant="contained" size="small" sx={{borderRadius:3, textTransform:"capitalize"}}>
            <UserRoundX style={{marginRight:4}} size={16} strokeWidth={3} />
            {unfollowMessage}
        </Button>
    </MenuItem>
    
    </Menu>
  )
}







