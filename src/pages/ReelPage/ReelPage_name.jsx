import { Avatar, Box, IconButton, Tooltip, Typography } from "@mui/material";
import { IoMdMore } from "react-icons/io";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdRoom } from "react-icons/md";
import SubDetails from "../../components/callCard/SubDetails";
export default function ReelPage_name() {
  return (

    <Box
    display={"flex"}
    // width={"100%"}
    padding={"0 30px"}
    marginTop={4}
    marginBottom={1}
    alignItems={"center"}
    justifyContent={"space-between"}
  >


    <Box sx={{display:"flex"}}>

    <Avatar style={{height:70, width:70, marginRight:15}} src="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg" />
    <Box
      display={"flex"}
      flexGrow={1}
      flexDirection={"column"}
    >
      <Typography
        style={{ 
          // marginTop: 25, 
          display:"flex", alignItems:"center" }}
        // variant="h5"
        variant="h6"
        fontWeight={"bold"}
      >
        {"Abdullah Al Kaisan"}

          <RiVerifiedBadgeFill size={20} style={{margin:"0 8px"}} color="#1D9BF0"/>


      </Typography>
      <Typography
        // style={{ marginBottom: 5 }}
        fontSize={"large"}
        marginTop={-1}
        color={"#777"}
        // fontWeight={"bold"}
        variant="subtitle1"
      >
        {"Web developer"}
      </Typography>

      <SubDetails
            user_followers={new Intl.NumberFormat("en-US", {
              useGrouping: true,
              notation: "compact",
            }).format(145)}
            user_rating={45}
            // user_language={"gigLanguage"}
            justifyContent={"flex-start"}
            user_total_call={145}
            flag={"bd"}
          />

    </Box>


    </Box>



    {/* <Box>
      <IconButton>
      <IoMdMore />
      </IconButton>
    </Box> */}
  </Box>


  )
}
