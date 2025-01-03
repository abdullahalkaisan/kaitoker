import { Badge, Box, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
// import { TiTicket } from "react-icons/ti";

export default function MunitesAndMoneyPop() {

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      // backgroundColor:"#333",
      color:"#fff",
      // border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (

    <Button
      color="info"
      sx={{
        fontSize: { md: "15px", xs: "medium" },
        backgroundColor: { 
          md:"hsla(197, 71%, 73%, 0.080)", 
          xs: "transparent" },
        fontWeight: "bold",
        border: { md: "0px solid #f1f1f1", xs: "none" },
        borderRadius: "999px",
        m: "0 10px",
        display:"flex",
        alignItems:"center"
      }}
    >



      <Box sx={{ marginLeft: "5px" }}>234</Box>
      {/* <Box sx={{ marginLeft: "5px", color:"#ED6C02" }}>2</Box> */}
      <Box
        sx={{
          marginLeft: { md: "5px", xs: "5px" },
          marginRight: { md: "5px" },
          color: "#4D9762",
        }}
      >
        {`$304.35`}
      </Box>

      {/* <Box >
        <Box >
          <StyledBadge badgeContent={4} color="warning" ></StyledBadge>
        </Box>
        <Box >
          <StyledBadge badgeContent={"$34.64"} color="success" ></StyledBadge>
        </Box>

        <Box>
          <StyledBadge badgeContent={234} max={999} color="primary" ></StyledBadge>
        </Box>

      </Box> */}



    </Button>
  );
}





