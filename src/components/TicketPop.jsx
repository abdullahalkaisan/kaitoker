import { useTheme } from "@emotion/react";
import { CardActionArea } from "@mui/material";
import { IoTicketOutline } from "react-icons/io5";

export default function TicketPop() {

  const theme = useTheme()
  const isDark = theme.palette.mode === "dark";


  return (
    <CardActionArea  sx={{
      backgroundColor:`${isDark?"#222":"#f1f1f1"}`, 
      color:`${isDark?"#f1f1f1":"#333"}`,
      borderRadius:999, 
      p:1, 
      display:"flex", 
      alignItems:"center",
      fontWeight:"bold"
      }}>

    {/* <Box  sx={{
      backgroundColor:`${isDark?"#222":"#f1f1f1"}`, 
      color:`${isDark?"#f1f1f1":"#333"}`,
      borderRadius:999, 
      p:1, 
      display:"flex", 
      alignItems:"center"
      }}> */}
      <IoTicketOutline style={{fontWeight:"bolder", fontSize:"large"}}/>
      <span style={{margin:"0 5px", fontSize:"15px"}}>
        3
      </span>
    {/* </Box> */}
    </CardActionArea>

  )
}
