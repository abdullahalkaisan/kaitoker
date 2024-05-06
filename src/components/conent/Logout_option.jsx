import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


import { 
    UilSignout,
  } from '@iconscout/react-unicons'


const emails = ['username@gmail.com', 'user02@gmail.com'];

function Logout_dialog(props) {

    

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog  onClose={handleClose} open={open}>

        <Box textAlign={"center"} mt={5}>
            <img style={{height:50, margin:"0 10px"}} src="https://web.opendrive.com/api/v1/download/file.json/MjdfMTY5NjUyNjRfc2l2Zlk?inline=1&preview=1"  />
            <img style={{height:50, margin:"0 10px"}} src="https://web.opendrive.com/api/v1/download/file.json/MjdfMTY5NjUyNjRfc2l2Zlk?inline=1&preview=1"  />
        </Box>
      <DialogTitle textAlign={"center"}>Log out of Kaitoker?</DialogTitle>

      <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", width:300, m:3}}>
        <Button variant="contained" color="error" sx={{textTransform:"none", m:1, borderRadius:999}}>
            Log out
        </Button>
        <Button  sx={{textTransform:"none", m:1, color:"#777"}}>
            Cancel
        </Button>
      </Box>

    </Dialog>
  );
}

Logout_dialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function Logout_option() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>

      <Tooltip sx={{ m: 1 }} title="Log out" placement="right">
        <IconButton onClick={handleClickOpen} >
          <UilSignout />
        </IconButton>
      </Tooltip>



      <Logout_dialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
