import { Box, Button } from '@mui/material'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

export default function SignInWithGoogle_Btn() {
  return (
    <Button onClick={loginHandle} sx={{ display:"flex", alignItems:"center", justifyContent:'center', m:1, borderRadius:3, bgcolor:"#1976D210",}}  >
    <FcGoogle fontSize={24} style={{margin:"0 10px 0 0"}} />
    <Box sx={{margin:"0 10px 0 0"}}>
        Sign in With google
    </Box>
    {/* with Google */}
  </Button>
  )
}
