import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
// import { IoMdArrowRoundBack } from "react-icons/io";
export default function Error_page() {

  return (

    <Box sx={{height:"100vh", width:"100vw", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <Typography variant="h1" gutterBottom>
          404
      </Typography>
      <Typography sx={{fontWeight:"bold"}} variant="h4" gutterBottom>
          {`Something's misssing`}
      </Typography>
      <Typography sx={{opacity:"50%"}} variant="h5" gutterBottom>
          {`The page you are looking for doesn't seem to exist`}
      </Typography>

      <Link to={"/"}>
        <Button sx={{borderRadius:99, my:5}} variant='contained'>
        {/* <IoMdArrowRoundBack /> */}
          Go Back
          </Button>
      </Link>
      
    </Box>
  )
}
