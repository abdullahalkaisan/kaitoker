import { Box, Tab, Tabs, Tooltip } from '@mui/material'
import React from 'react'

  import { 
    UilEstate,
    UilNewspaper,
    UilPresentationMinus, 
    UilUsersAlt,
    // UilPlayCircle
} from '@iconscout/react-unicons'




export default function NavMenu() {

    const [value_mainMenu, setValue_mainMenu] = React.useState(0);

    const handleChange_mainMenu = (event, newValue) => {
      setValue_mainMenu(newValue);
    };
  

  return (

        <Box sx={{display:{md:"flex", xs:"none"}}} flex={1} m={"0 50px"}>
          <Tabs value={value_mainMenu} onChange={handleChange_mainMenu} aria-label="icon tabs example">
            <Tooltip title="Home" enterDelay={1000} placement="bottom-end">
                <Tab sx={{minWidth:70}} icon={<UilEstate />} aria-label="phone" />
            </Tooltip>
            <Tooltip title="Group" enterDelay={1000} placement="bottom-end">
                <Tab sx={{minWidth:70}} icon={<UilUsersAlt />} aria-label="person" />
            </Tooltip>
            <Tooltip title="Feed" enterDelay={1000} placement="bottom-end">
                <Tab sx={{minWidth:70}} icon={<UilNewspaper />} aria-label="favorite" />
            </Tooltip>
            <Tooltip title="Class" enterDelay={1000} placement="bottom-end">
                <Tab sx={{minWidth:70}} icon={<UilPresentationMinus />} aria-label="person" />
            </Tooltip>
            {/* <Tooltip title="Class" enterDelay={1000} placement="bottom-end">
                <Tab sx={{minWidth:70}} icon={<UilPlayCircle />} aria-label="person" />
            </Tooltip> */}
          </Tabs>
        </Box>
  )
}
