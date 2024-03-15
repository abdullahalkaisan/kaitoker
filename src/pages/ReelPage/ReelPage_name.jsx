import { Box, IconButton, Typography } from "@mui/material";
import { IoMdMore } from "react-icons/io";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function ReelPage_name() {
  return (

    <Box
    display={"flex"}
    padding={"0 30px"}
    alignItems={"center"}
    justifyContent={"space-between"}
  >
    <Box
      display={"flex"}
      flexGrow={1}
      flexDirection={"column"}
    >
      <Typography
        style={{ marginTop: 25, display:"flex", alignItems:"center" }}
        // variant="h5"
        fontWeight={"bold"}
      >
        {"Abdullah Al Kaisan"}

          <RiVerifiedBadgeFill size={20} style={{margin:"0 8px"}} color="#1D9BF0"/>


      </Typography>
      <Typography
        style={{ marginBottom: 5 }}
        fontSize={"large"}
        marginTop={-1}
        color={"#777"}
        // variant="subtitle1"
      >
        {"Web developer"}
      </Typography>

    </Box>
    <Box>
      <IconButton>
      <IoMdMore />
      </IconButton>
    </Box>
  </Box>


  )
}
