import { Box, Typography } from "@mui/material";
import { MdOutlineDateRange, MdOutlineTranslate } from "react-icons/md";
import SubDetails from "../../components/callCard/SubDetails";

export default function ReelPage_extraDetails() {
  return (
    <Box padding={"0 40px"}>
        <SubDetails
            user_followers={new Intl.NumberFormat("en-US", {
              useGrouping: true,
              notation: "compact",
            }).format(145)}
            user_rating={45}
            // user_language={"gigLanguage"}
            justifyContent={"flex-start"}
            user_total_call={145}
            // flag={"bd"}
          />


  <Typography
    sx={{
      color: "#777",
      display: "flex",
      alignItems: "center",
      width: 1,
    }}
    variant="subtitle1"
    mt={0}
    p={0}
    gutterBottom
  >
    <MdOutlineTranslate style={{padding:"0 4px 0 0"}} sx={{ fontSize: "medium", mr:0.5 }} />

    {"Bengali, English, Hindi"}
  </Typography>

  <Typography
    sx={{
      color: "#777",
      display: "flex",
      alignItems: "center",
      width: 1,
    }}
    variant="subtitle1"
    mt={0}
    p={0}
    gutterBottom
  >
    <MdOutlineDateRange style={{padding:"0 4px 0 0"}} sx={{ fontSize: "medium", mr:0.5 }} />

    {"1 year, 4 month old"}
  </Typography>

  
    </Box>
  )
}
