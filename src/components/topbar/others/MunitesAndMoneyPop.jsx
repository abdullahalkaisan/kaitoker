import { Box, Button } from "@mui/material";

export default function MunitesAndMoneyPop() {

 

  return (
    <Button color="info" sx={{fontSize:{md:"15px", xs:"medium"}, fontWeight:"bold", border:{md:"0px solid #f1f1f1", xs:"none"}, borderRadius:"999px", m:"0 10px"}}>
        <Box sx={{marginLeft:"5px"}}>
          234
        </Box>
        <Box sx={{marginLeft:{md:"5px", xs:"5px"},marginRight:{md:"5px"}, color:"#4D9762"}}>
          {`$34.35`}
        </Box>
    </Button>
  )
}





