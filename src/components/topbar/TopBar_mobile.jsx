import { AppBar, Avatar, Badge, Box, IconButton } from "@mui/material";
import { IoMdMenu, IoMdSearch } from "react-icons/io";
import { MdNewspaper, MdOutlineGroups, MdOutlineHistory, MdOutlineHome, MdOutlineMessage, MdOutlineNotifications, MdOutlinePeopleAlt, MdOutlineSchool, MdTune } from "react-icons/md";
import { Link } from "react-router-dom";
import MunitesAndMoneyPop from "./others/MunitesAndMoneyPop";
import Logo from "./others/Logo";
// import { FaBarsStaggered } from "react-icons/fa6";
export default function TopBar_mobile() {
    return (

        <AppBar position="static" style={{ backgroundColor: "#333" }} >

            <Box sx={{ fontSize: "24px", display: "flex", justifyContent: "space-between", padding: "5px 10px" }}>

                <Box sx={{display:"flex", alignItems:"center"}}>

                    <Logo/>

                {/* <IconButton>
                    <IoMdMenu color="#fff" />
                </IconButton>
                    <IconButton>
                        <MdTune color="#fff" />
                    </IconButton> */}

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


                </Box>



                <Box>
                    {/* <IconButton>
                        <IoMdSearch color="#fff" />
                    </IconButton>
                    <IconButton>
                        <Badge badgeContent="1" color="error">
                            <MdOutlineMessage color="#fff" />
                        </Badge>
                    </IconButton>

                    <IconButton>
                        <Badge badgeContent="1" color="error">
                            <MdOutlineHistory color="#fff" />
                        </Badge>
                    </IconButton> */}



                    <MunitesAndMoneyPop />


                    <IconButton>
                        <Badge badgeContent="1" color="error">
                            <MdOutlineNotifications color="#fff" />
                        </Badge>
                    </IconButton>

                    <IconButton>
                        <Link to="/profile">

                            <Avatar
                                alt="Remy Sharp"
                                src="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"
                                sx={{ width: 24, height: 24 }}
                            />
                        </Link>

                    </IconButton>

                </Box>



            </Box>
        </AppBar>
    )
}
