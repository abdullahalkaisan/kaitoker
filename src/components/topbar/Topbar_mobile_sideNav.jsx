import { Avatar, Box,  Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";

import { 
    UilSetting,
    UilSun,
    UilAnalysis,
    UilSignout ,
    UilInfoCircle,
    UilShieldCheck,
    UilUsdCircle
 } from '@iconscout/react-unicons'


import PeopleCard from "../conent/rightMenu/PeopleCard";
import { Link } from "react-router-dom";

export default function Topbar_mobile_sideNav() {


    const sideItems = [
        {
            icon: <UilUsdCircle />,
            text: "Adsense"
        },{
            icon: <UilAnalysis />,
            text: "Analitics"
        },{
            icon: <UilSun />,
            text: "Theme: Light"
        },{
            icon: <UilShieldCheck />,
            text: "Get Primium"
        },{
            icon: <UilInfoCircle />,
            text: "About Kaitoker"
        },{
            icon: <UilSetting />,
            text: "Settings"
        },{
            icon: <UilSignout />,
            text: "Log out"
        }
    ]



    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem >
                    <ListItemButton sx={{borderRadius:3,}}>
                        <PeopleCard
                            title={"Abdullah Al Kaisan"}
                            subTitle={"CEO at kaitoker"}
                            avatar
                            avatarUrl={"https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"}
                            />
                    </ListItemButton>

                </ListItem>
            </List>
            <Divider />
            <List sx={{padding:2}}>

                {sideItems.map((item, index)=> 
                // disablePadding 
                <ListItem  key={index} disablePadding>
                    <ListItemButton sx={{borderRadius:3}}>
                        <ListItemIcon>
                            <span 
                            // style={{color:"#0288d1"}}
                            >
                                {item.icon}
                            </span>
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                </ListItem>
                )}







            </List>
        </Box>
    );







    return (



        <React.Fragment>

            {/* <Button onClick={toggleDrawer("right", true)}></Button> */}

            {/* <Link to="/profile"> */}



            <IconButton onClick={toggleDrawer("right", true)} sx={{ m: "0 10px", display: { md: "none", xs: "flex" } }}>
                <Avatar
                    alt="Remy Sharp"
                    src="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"
                    sx={{ width: 32, height: 32 }}
                />
            </IconButton>
            {/* </Link> */}


            {
                (
                    <Drawer
                        anchor={"right"}
                        open={state["right"]}
                        onClose={toggleDrawer("right", false)}
                    >
                        {list("right")}
                    </Drawer>

                )

            }

        </React.Fragment>

    )
}






