import { useTheme } from '@emotion/react'
import { Box, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export default function SideControlProfile_tab() {

  const theme = useTheme();




  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >

      <Link to={"/"}>
        <IconButton
          sx={{
            m: 2,
            bgcolor: `${theme.palette.mode === "light" ? "#f1f1f1" : "#222"
              }`,
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <IconButton sx={{ m: 2 }}>
        <MoreHorizIcon />
      </IconButton>
    </Box>
  )
}
