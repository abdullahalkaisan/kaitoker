import { Avatar, Badge, Box, CardActionArea } from "@mui/material"
import { useContext } from "react";
import { IoMdCloseCircle } from "react-icons/io"
import { MdVerifiedUser } from "react-icons/md"
import { AuthContext } from "../../../Providers/AuthProvider";


export const ProfilePic_step = () => {

      const {user,loading} = useContext(AuthContext);

      

  if(loading && !user){
    return  <div>loading...</div>
  }






  return (
    <>
    
                <CardActionArea sx={{ height: "fit-content", width: "fit-content", borderRadius: 999 }}>
                    <Avatar 
                    src={user?.photoURL.slice(0,92)}
                    sx={{ height: 150, width: 150, outline:"4px solid royalblue", outlineOffset:"4px" }}></Avatar>
                </CardActionArea>


                <Box sx={{display:"flex", gap:4, alignItems:"flex-end", flexWrap:"wrap", my:8}}>

                <CardActionArea sx={{ height: "fit-content", width: "fit-content", borderRadius: 999 }}>
                        <Badge badgeContent={<MdVerifiedUser color="green" size={"30px"}/>} >
                            <Avatar 
                            src={"https://randomuser.me/api/portraits/men/72.jpg"}
                            sx={{ height: 50, width: 50 }}></Avatar>
                        </Badge>
                    </CardActionArea>

                    <CardActionArea sx={{ height: "fit-content", width: "fit-content", borderRadius: 999 }}>
                        <Badge badgeContent={<IoMdCloseCircle color="orangered" size={"30px"}/>} >
                            <Avatar 
                            src={"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHx8MA%3D%3D"}
                            sx={{ height: 50, width: 50 }}></Avatar>
                        </Badge>
                    </CardActionArea>
                    <CardActionArea sx={{ height: "fit-content", width: "fit-content", borderRadius: 999 }}>
                        <Badge badgeContent={<IoMdCloseCircle color="orangered" size={"30px"}/>} >
                            <Avatar 
                            src={"https://plus.unsplash.com/premium_photo-1706108824585-9469a63469db?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBwZW9wbGUlMjBncm91cHxlbnwwfHwwfHx8MA%3D%3D"}
                            sx={{ height: 50, width: 50 }}></Avatar>
                        </Badge>
                    </CardActionArea>
                    <CardActionArea sx={{ height: "fit-content", width: "fit-content", borderRadius: 999 }}>
                        <Badge badgeContent={<IoMdCloseCircle color="orangered" size={"30px"}/>} >
                            <Avatar 

                            sx={{ height: 50, width: 50 }}></Avatar>
                        </Badge>
                    </CardActionArea>
                </Box>

    </>
  )
}
