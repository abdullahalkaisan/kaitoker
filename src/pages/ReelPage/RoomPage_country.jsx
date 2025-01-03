import { Box, Tooltip, Typography } from "@mui/material";
import { MdRoom } from "react-icons/md";


export default function RoomPage_country() {
  return (
<Typography
    sx={{
      color: "#777",
      display: "flex",
      alignItems: "center",
      width: 1,
    }}
    variant="subtitle1"
    // mt={1}
    p={0}
    gutterBottom
  >
    <MdRoom sx={{ fontSize: "medium", mr:0.5 }} />

    {`Dhaka, Bangladesh`}
    <Tooltip title={"Bangladesh"} placement="top">
      <Box sx={{ display: "flex", alignItems: "center", px: 1 }}>
        <img
          style={{
            borderRadius: 3,
            border: "1px solid #77777750",
            boxShadow: "10px 10px 10px solid black",
          }}
          src={`https://flagcdn.com/w20/${"bd"}.png`}
        />
      </Box>
    </Tooltip>
  </Typography>
  )
}
