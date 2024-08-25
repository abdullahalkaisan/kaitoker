import { Avatar, Box, CardActionArea } from "@mui/material";
import { MdChair } from "react-icons/md";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";



export default function CallCard_slot() {

  // const theme = useTheme()
  // const isDark = theme.palette.mode = "dark";



  return (
    
                <Box sx={{
                  display:"flex", 
                  // width:"max-content", 
                  width:"87%",
                  justifyContent:"space-between",
                  // backgroundColor:`${isDark ? "#222" : "#f1f1f1"}`, 
                  // border:"1px solid #00000020",
                  p:1,
                  borderRadius:4444, 
                //   margin: "10px 0 10px 40px"
                  }}>
                {/* <AvatarGroup sx={{marginRight:"10px"}} max={4}>
                    <Avatar src="https://pbs.twimg.com/profile_images/1775154865804558336/FjuCGPli_400x400.jpg" >
                      <MdChair />
                    </Avatar>
                    <Avatar src="https://lh3.googleusercontent.com/a/ACg8ocKjcLQnbqhz1e6GuIXL1IrBSg2pG_FSAtw-vO1ejOyW890" >
                      <MdChair />
                    </Avatar>
                </AvatarGroup> */}


                <Box sx={{display:"flex"}}>


                <CardActionArea sx={{width:"auto", height:"auto",  margin:"0 5px", borderRadius:999}}>
                    <Avatar 
                      src="https://pbs.twimg.com/profile_images/1771256075418775552/Qh982rGL_400x400.jpg" 
                      sx={{height:30, width:30, }} 
                      >
                      <MdChair 
                      // color={isDark ? "#000" : "#999"} 
                      // size={30} 
                      />
                    </Avatar>
                  </CardActionArea>


                  
                  <CardActionArea sx={{width:"auto", height:"auto",  margin:"0 5px", borderRadius:999}}>
                    <Avatar 
                    sx={{height:30, width:30, }} 
                    >
                      <MdChair 
                      // color={isDark ? "#000" : "#999"}
                      />
                    </Avatar>
                  </CardActionArea>


                  <CardActionArea sx={{width:"auto", height:"auto",  margin:"0 5px", borderRadius:999}}>
                    <Avatar 
                    sx={{height:30, width:30, 
                      // background:"transparent"
                      }} 
                      >
                      <MdChair 
                      // color={isDark ? "#000" : "#999"}
                      />
                    </Avatar>
                  </CardActionArea>


                  </Box>




                  <Button size="small" sx={{borderRadius:333}} variant="contained" >Join</Button>
                  {/* <Button size="small" sx={{borderRadius:3}} color="error" variant="contained" >Appointment</Button> */}
              </Box>
  )
}
