import { AppBar, Avatar, Badge, Box, IconButton, Tab, Tabs } from "@mui/material";
import { IoMdMenu, IoMdSearch } from "react-icons/io";
import { MdNewspaper, MdOutlineGroups, MdOutlineGroups2, MdOutlineHistory, MdOutlineHome, MdOutlineMessage, MdOutlineNotifications, MdOutlinePeopleAlt, MdOutlineSchool, MdTune } from "react-icons/md";
import { Link } from "react-router-dom";
import MunitesAndMoneyPop from "./others/MunitesAndMoneyPop";
import { useState } from "react";
// import { FaBarsStaggered } from "react-icons/fa6";
export default function BottomNavigation() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    return (

        <AppBar position="static" style={{ backgroundColor: "#333" }} >





            <Box sx={{ fontSize: "24px", display: "flex", justifyContent: "space-between", padding: "5px 10px" }}>

    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
    >
                    <IconButton>
                        <MdOutlineHome color="#fff" />
                    </IconButton>
                    <IconButton>
                        <MdNewspaper color="#fff" />
                    </IconButton>
                    <IconButton>
                        <MdOutlineGroups color="#fff" />
                    </IconButton>
                    <IconButton>
                        <MdOutlineSchool color="#fff" />
                    </IconButton>
                    <IconButton>
                        <MdOutlinePeopleAlt color="#fff" />
                    </IconButton>
    </Tabs>

                {/* <Box>
                    <IconButton>
                        <MdOutlineHome color="#fff" />
                    </IconButton>
                    <IconButton>
                        <MdNewspaper color="#fff" />
                    </IconButton>

                    <IconButton>
                        <MdOutlineGroups color="#fff" />
                    </IconButton>



                    <IconButton>

                        <MdOutlineSchool color="#fff" />

                    </IconButton>
                    <IconButton>

                        <MdOutlinePeopleAlt color="#fff" />

                    </IconButton>

                </Box> */}



            </Box>
        </AppBar>
    )
}
