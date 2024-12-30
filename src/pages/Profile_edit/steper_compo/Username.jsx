import { TextField, Typography } from "@mui/material"
import { useState } from "react";



export const Username = () => {

    const [usernameInput, setUsernameInput] = useState();


  return (
    <>
    
    
    <Typography variant="h4" component="h2" sx={{color:"royalblue", my:2}}>
                        Choose a username
                    </Typography>
                    
                    <TextField fullWidth  error={!usernameInput} value={usernameInput} onChange={(e)=> setUsernameInput(e.target.value.replace(/\s+/g, '').toLowerCase())}  sx={{mb:2, mr:2}} id="outlined-basic"    />
                    <Typography sx={{color:"#999", bgcolor:"#f1f1f1",p:1, borderRadius:2.5,  mt:2, mb:1, fontWeight:"bold"}} variant="body2" component="p">
                        https://kaitalk.com/<span style={{color:"royalblue"}}>{usernameInput}</span> 
                    </Typography>

    
    
    </>
  )
}
