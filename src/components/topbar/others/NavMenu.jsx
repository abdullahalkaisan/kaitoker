import { Box, IconButton, Tab, Tabs, TextField, Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'

  import { 
    UilEstate,
    UilNewspaper,
    UilPresentationMinus, 
    UilUsersAlt,
    UilBill,
    UilMicrophone
    // UilPlayCircle
} from '@iconscout/react-unicons'
import { Link, useLocation } from 'react-router-dom';
import { Home01Icon } from '@hugeicons/react-pro';
import SearchTextArea from '../../SearchTextArea';
import { MdTune } from 'react-icons/md';
import { useTheme } from '@emotion/react';




export default function NavMenu() {


  const theme = useTheme();

  const isDark = theme.palette.mode === "dark";


    const [value_mainMenu, setValue_mainMenu] = useState(0);


    const location = useLocation();
    const location_pathName = location.pathname;
  
    useEffect(()=>{
      if(location.pathname === "/news"){
        setValue_mainMenu(3)
      }else if (location_pathName === "/group"){
        setValue_mainMenu(2)
      }else if (location_pathName === "/class"){
        setValue_mainMenu(4)
      }else if (location_pathName === "/hire"){
        setValue_mainMenu(1)
      }else if (location_pathName === "/home"){
        setValue_mainMenu(0)
      }
    },[location])


    
    const handleChange_mainMenu = (event, newValue) => {
      setValue_mainMenu(newValue);
    };
  

  return (

        <Box sx={{display:{md:"flex", xs:"none"}, alignItems:"center"}} flex={1} m={"0 50px"}>

          <Tabs value={value_mainMenu} onChange={handleChange_mainMenu} aria-label="icon tabs example">
            

            <Tooltip title="Home" enterDelay={1000} placement="bottom-end">
                <Tab to="/" component={Link} sx={{minWidth:70}} icon={<UilEstate/>} aria-label="phone" />
            </Tooltip>

            

            <Tooltip title="Hire" enterDelay={1000} placement="bottom-end">
                <Tab to="/hire" component={Link} sx={{minWidth:70}} icon={<UilBill />} aria-label="phone" />
            </Tooltip>
            <Tooltip title="Group" enterDelay={1000} placement="bottom-end">
                <Tab to="/group" component={Link} sx={{minWidth:70}} icon={<UilMicrophone />} aria-label="person"/>
            </Tooltip>
            {/* <Tooltip title="News" enterDelay={1000} placement="bottom-end">
                <Tab to="/news" component={Link} sx={{minWidth:70}} icon={<UilNewspaper />} aria-label="favorite" />
            </Tooltip>
            <Tooltip title="Class" enterDelay={1000} placement="bottom-end">
                <Tab to="/class" component={Link} sx={{minWidth:70}} icon={<UilPresentationMinus />} aria-label="person" />
            </Tooltip> */}

            {/* <Tooltip title="Class" enterDelay={1000} placement="bottom-end">
                <Tab sx={{minWidth:70}} icon={<UilPlayCircle />} aria-label="person" />
            </Tooltip> */}
          </Tabs>

          {/* <Box sx={{width:500}}>
            <TextField sx={{margin:1, marginLeft:10}} size='small' fullWidth label="Search 501,246 Users, Profession, Id, Skills" />
          </Box> */}

          <TextField   
            // variant="filled" 
            type='search' 
            size='small'
            sx={{
              width:350, 
              // marginTop:2,
              // marginBottom:1,
              margin:1,
              marginLeft:4,
              backgroundColor:`${isDark ? "#222" : ""}`
            }} 
            // label="Search 501,246 talent" 
            placeholder='Search 501,246 talent'
          />
                <IconButton color="primary" sx={{ p: '10px' }} >
        {/* <DirectionsIcon /> */}
        <MdTune/>
      </IconButton>


    {/* <Box sx={{margin:1}}>
      <SearchTextArea/>
    </Box> */}





        </Box>
  )
}
