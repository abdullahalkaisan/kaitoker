
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


import { 
    UilSignout,
    UilRepeat
  } from '@iconscout/react-unicons'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { Avatar } from '@mui/material';
// import { Navigate, useNavigate } from 'react-router-dom';



function Logout_dialog(props) {

  // const navigate = useNavigate();
  const { onClose, selectedValue, open } = props;

  const {signOut_google,signIn_google,user, loading} = useContext(AuthContext);
    
  const loginHandle = ()=>{
    signIn_google()
      .then((result)=> console.log(result))
      .catch((error)=> console.log(error))
  }


  const signOutHandle = ()=>{
    signOut_google()
    .then()
    .catch(error => console.log(error))
    // onClose(selectedValue);
    // navigate("/login");
  }



  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog  onClose={handleClose} open={open}>

        <Box display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}  textAlign={"center"} mt={5} mx={10}>
            <img style={{height:50, margin:"0 10px"}} src="https://pbs.twimg.com/media/GPkZgRFbkAA-Twt?format=png&name=240x240"  />
            
            {user &&
              <>
                <span style={{opacity:"50%"}}>
                  <UilRepeat/>
                </span>
                <Avatar src={user.photoURL}  sx={{height:50, width:50, margin:"0 10px", borderRadius:999}}/>
                {/* <img style={{height:50, margin:"0 10px", borderRadius:999}} src={user.photoURL}  /> */}
              </>
            }
        </Box>
      <DialogTitle textAlign={"center"}>
        {user ?
          <>Log out of Kaitoker?</>
        : <>Welcome to Kaitoker</>}
        </DialogTitle>

      <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", width:300, m:3}}>
        
        {user ?
          <Button onClick={signOutHandle} variant="contained" color="error" sx={{textTransform:"none", m:1, borderRadius:999}}>
              Log out
          </Button>
            : 

              <Button onClick={loginHandle} sx={{ display:"flex", alignItems:"center", justifyContent:'center', m:1, borderRadius:3, bgcolor:"#f1f1f1",}}  >
              <FcGoogle fontSize={30} style={{margin:"0 10px 0 0"}} />
              <Box sx={{margin:"0 10px 0 0"}}>
              Sign in With google
              </Box>
              {/* with Google */}
              </Button>


      }
        

        <Button onClick={handleListItemClick}  sx={{textTransform:"none", m:1, color:"#777"}}>
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
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value)
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
