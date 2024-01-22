import { Box } from "@mui/material";


export default function Logo() {
  return (
    <Box
      color={"primary"}
      sx={{
        fontWeight: "bold",
        color: "#0ea5e9",
        // color:"#1976d2",
        cursor: "pointer",
        userSelect: "none",
        display: { md: "flex", xs: "none" },
        fontSize: "22px",
        m: "0 20px",
      }}
    >
      <Box>Kai</Box>
      <Box sx={{ 
        // color: "#f97316",
        // color:"#d32f2f",
        color:"#ed6c02",
         }}>toker</Box>
    </Box>
  );
}
