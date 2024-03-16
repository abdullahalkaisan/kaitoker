import { Box, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { 
    UilVideo,
    UilCommentLines,
    UilUserPlus,
    UilFavorite,
  } from '@iconscout/react-unicons'

  
export default function ReelPage_action() {
  return (
    <Box width={1} display={"flex"} justifyContent={"center"}>
    <Box
      display={"flex"}
      bgcolor={"background.default"}
      color={"text.primary"}
      flexDirection={"row"}
      width={"100%"}
      // mb={2}
      // mx={2}
      m={2}
      alignItems={"center"}
      justifyContent={"space-evenly"}
    >
      <IconButton color="primary"  size="large">
        {
          <UilUserPlus />
        }
      </IconButton>
      <IconButton color="primary" size="large">
        <UilFavorite  />
      </IconButton>
      <IconButton color="primary" size="large">
        <UilCommentLines />
      </IconButton>
      {/* <IconButton color="primary" size="large">
        <UilVideo />
      </IconButton> */}

      <Box>
        <Link to={"/callpage"}>
          <Button
            size="small"
            sx={{ borderRadius: 2, textTransform: "none", marginLeft:2 }}
            variant="contained"
            color="primary"
          >
            {`$${"2.45"}/hr`}
          </Button>
        </Link>
      </Box>
    </Box>
  </Box>

  )
}
