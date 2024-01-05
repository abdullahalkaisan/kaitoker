import { Box, IconButton, TextField } from '@mui/material'
import { 
    UilMessage
  } from '@iconscout/react-unicons'
export default function TypeMessageBox() {
  return (
    <Box
      px={3}
      display={"flex"}
      mt={2}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <TextField
        id="outlined-multiline-flexible"
        label="Type a message"
        multiline
        maxRows={4}
        sx={{ flexGrow: 1 }}
      />
      <Box ml={1}>
        <IconButton aria-label="delete">
          <UilMessage />
        </IconButton>
      </Box>
    </Box>
  );
}
