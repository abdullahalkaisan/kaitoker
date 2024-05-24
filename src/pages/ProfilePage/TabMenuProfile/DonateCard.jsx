import { useTheme } from '@emotion/react'
import { Avatar, Box, Typography } from '@mui/material'

export default function DonateCard() {



    const theme = useTheme()
    const themeSelect = theme.palette.mode;


  return (
    <Box
      sx={{ cursor: "pointer", width: "max-content", borderRadius:999 }}
      my={1}
      border={`1px solid ${themeSelect === "dark" ? "#333" : "#f1f1f1"}`}
      padding={1}
      // borderRadius={999}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      bgcolor={`${themeSelect === "dark" ? "#222" :"background.default"} `}
    >
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/5.jpg"
        sx={{ width: 24, height: 24 }}
      />

      <Box display={"flex"} flexDirection={"column"} mx={1}>
        <Typography
          color={`${themeSelect === "dark" ? "yellowgreen" :"green"}`}
          fontWeight={"600"}
          variant="body2"
          component="h6"
        >
          $50K
        </Typography>
      </Box>
    </Box>
  );
}
