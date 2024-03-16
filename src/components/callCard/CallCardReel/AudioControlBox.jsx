import { Box, IconButton } from '@mui/material'

import AudioPlay_button from '../AudioPlay_button'
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
// import { usersDataLocal } from '../../../usersDataLocal';


export default function AudioControlBox(props) {
  return (
    <>
          <Box
            display={"flex"}
            bgcolor={"background.default"}
            color={"text.primary"}
            flexDirection={"row"}
            width={props.width}
            m={"10px 0"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >

{/* onClick={() => setCurrentUser(Math.max(0, currentUser - 1))}  */}
            <IconButton  color="primary" size="">
            <MdOutlineArrowBackIos/>
            </IconButton>

            <AudioPlay_button />
{/* onClick={() => setCurrentUser(Math.min(usersDataLocal.length - 1, currentUser + 1))}  */}
            <IconButton  variant="contained" color="primary" size="">
            <MdArrowForwardIos/>
            </IconButton>

          </Box>
    </>
  )
}
