import { Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function Logo() {
  return (
    <Link style={{textDecoration:"none"}} to={"/"}>
      <Box
        color={"primary"}
        sx={{
          fontWeight: "bold",
          // color: "#0ea5e9",
          // color:"#1976d2",
          // color:"#d32f2f",
          // color:"royalblue",
          color:"#333",
          cursor: "pointer",
          userSelect: "none",
          // display: { md: "flex", xs: "none" },
          fontSize: "22px",
          m: {md:"0 20px", xs:1},
        }}
      >
        {/* <Box>Kai</Box> */}
        <Box sx={{ 
          // color: "#f97316",
          // color:"#d32f2f",
          // color:"#ed6c02",
          color:"#fff",
          backgroundColor:"#1976d2",
          // backgroundColor:"#d32f2f",
          // backgroundColor:"royalblue",
          // backgroundColor:"#333",
          borderRadius:1,
          padding:"0 5px",
          marginLeft: 0.3,
          display:"flex"
          }}>
            {/* toker */}
              Kaitalk
            </Box>
      </Box>

    </Link>
  );
}
