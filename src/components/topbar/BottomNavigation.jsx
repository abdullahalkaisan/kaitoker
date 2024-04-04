import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


import {
    UilEstate,
    UilNewspaper,
    UilPresentationMinus,
    UilUsersAlt,
    UilUser,
    UilHistory,
    UilCommentLines
    // UilPlayCircle
} from '@iconscout/react-unicons'
import { Box } from '@mui/material';


const navStyle = {
    display: "flex",
    // padding: "10px", 
    margin: 0,
    flexBasis: 1,
    minWidth: 60,
    maxWidth: 60
}


export default function LabelBottomNavigation() {
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <BottomNavigation sx={{ width: "100%", display: {md:"none",xs:"flex"}, flexDirection: "row", justifyContent: "space-evenly" }} value={value} onChange={handleChange}>
            <BottomNavigationAction
                sx={navStyle}
                label="Home"
                value="home"
                icon={<UilEstate />}
            />
            <BottomNavigationAction
                sx={navStyle}
                label="Group"
                value="group"
                icon={<UilUsersAlt />} />
            <BottomNavigationAction
                sx={navStyle}
                label="Feed"
                value="feed"
                icon={<UilNewspaper />}
            />
            <BottomNavigationAction
                sx={navStyle}
                label="Course"
                value="course"
                icon={<UilPresentationMinus />}
            />
            <BottomNavigationAction
                sx={navStyle}

                label="Friends"
                value="friends"
                icon={<UilUser />}
            />
            <BottomNavigationAction
                sx={navStyle}

                label="Logs"
                value="logs"
                icon={<UilCommentLines />}
            />
        </BottomNavigation>
    );
}
