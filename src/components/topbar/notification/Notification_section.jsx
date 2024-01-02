import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { Badge, Box } from '@mui/material';
import { 
    UilBell
  } from '@iconscout/react-unicons'
import Notificatioin_message from './Notificatioin_message';

  


export default function Notification_section() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (

    // sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' , width:"max-content" }} 

    <React.Fragment>
      {/* <Box bgcolor={"red"} display={"flex"}> */}
        <Tooltip title="Notifications">
          <IconButton
            onClick={handleClick}
            // size="small"
            // sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            

            <Badge badgeContent={17} max={9} color="error">
              <UilBell />
            </Badge>


          </IconButton>
        </Tooltip>
      {/* </Box> */}


      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            maxHeight: "60%",
            minWidth:"350px",
            maxWidth:"350px",
            overflow: 'auto',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
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
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >


        <Notificatioin_message />

        <MenuItem  onClick={handleClose}>
            <Box whiteSpace={"wrap"}>
                Abdullah Al Kaisan followed you
                Abdullah Al Kaisan followed you
                Abdullah Al Kaisan followed you
                Abdullah Al Kaisan followed you
                Abdullah Al Kaisan followed you
            </Box>

        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
            Abdullah Al Kaisan followed you
        </MenuItem>
        <Divider />



      </Menu>
    </React.Fragment>
  );
}
