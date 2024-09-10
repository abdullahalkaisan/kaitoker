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
import { useTheme } from '@emotion/react';


const navStyle = {
    display: "flex",
    // padding: "10px", 
    margin: 0,
    flexBasis: 1,
    minWidth: 60,
    maxWidth: 60,
    borderRadius:999
}




export default function LabelBottomNavigation() {

    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";


    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <BottomNavigation sx={{ width: "100%", display: {md:"none",xs:"flex"}, flexDirection: "row", justifyContent: "space-evenly", 
        // position:"fixed", bottom:0, zIndex:999, 
        paddingY:1, backgroundColor:`${isDark ? "#222" :"#fff"}` }} value={value} onChange={handleChange}>
            <BottomNavigationAction
                sx={navStyle}
                label="Home"
                value="home"
                icon={<UilEstate />}
            />


            {/* <BottomNavigationAction
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
            /> */}


            <BottomNavigationAction
                sx={navStyle}
                label="Friends"
                value="friends"
                icon={<UilUser />}
            />
            <BottomNavigationAction
                sx={navStyle}

                label="Chat"
                value="chat"
                icon={<UilCommentLines />}
            />

            <BottomNavigationAction
                sx={navStyle}

                label="Logs"
                value="logs"
                icon={<UilHistory />}
            />


        </BottomNavigation>
    );
}
