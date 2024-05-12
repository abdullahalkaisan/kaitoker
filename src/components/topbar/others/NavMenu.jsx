import { Box, Tab, Tabs, Tooltip } from '@mui/material'
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




export default function NavMenu() {



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

        <Box sx={{display:{md:"flex", xs:"none"}}} flex={1} m={"0 50px"}>
          <Tabs value={value_mainMenu} onChange={handleChange_mainMenu} aria-label="icon tabs example">
            

            <Tooltip title="Home" enterDelay={1000} placement="bottom-end">
                <Tab to="/" component={Link} sx={{minWidth:70}} icon={<UilEstate />} aria-label="phone" />
            </Tooltip>
            <Tooltip title="Hire" enterDelay={1000} placement="bottom-end">
                <Tab to="/hire" component={Link} sx={{minWidth:70}} icon={<UilBill />} aria-label="phone" />
            </Tooltip>
            <Tooltip title="Group" enterDelay={1000} placement="bottom-end">
                <Tab to="/group" component={Link} sx={{minWidth:70}} icon={<UilMicrophone />} aria-label="person"/>
            </Tooltip>
            <Tooltip title="News" enterDelay={1000} placement="bottom-end">
                <Tab to="/news" component={Link} sx={{minWidth:70}} icon={<UilNewspaper />} aria-label="favorite" />
            </Tooltip>
            <Tooltip title="Class" enterDelay={1000} placement="bottom-end">
                <Tab to="/class" component={Link} sx={{minWidth:70}} icon={<UilPresentationMinus />} aria-label="person" />
            </Tooltip>
            {/* <Tooltip title="Class" enterDelay={1000} placement="bottom-end">
                <Tab sx={{minWidth:70}} icon={<UilPlayCircle />} aria-label="person" />
            </Tooltip> */}
          </Tabs>
        </Box>
  )
}
