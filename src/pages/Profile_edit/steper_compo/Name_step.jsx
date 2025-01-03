import { Box, Chip, TextField, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io"
import { MdVerifiedUser } from "react-icons/md"
import { AuthContext } from "../../../Providers/AuthProvider";


export const Name_step = () => {

  const {user,loading, createAccount_mongo, setCreateAccount_mongo} = useContext(AuthContext);
    const [nameInput, setNameInput] = useState();






  
  
  useEffect(() => {
    setNameInput(user?.displayName);

    // setUsernameInput(user?.uid);
  },[user?.displayName])
    

  
  useEffect(() => {
    setCreateAccount_mongo({...createAccount_mongo, fullName:nameInput});
    
    // setUsernameInput(user?.uid);
  },[nameInput])


  console.log(createAccount_mongo);
    

  if(loading && !user){
    return  <div>loading...</div>
  }

  return (
    <>
    
        <Typography variant="h5" component="h2" sx={{ my:2}}>
        What is your full name?
        </Typography>
        <TextField fullWidth value={nameInput} onChange={(e)=>setNameInput(e.target.value)} autoFocus sx={{mb:2, mr:2}} id="outlined-basic" variant="outlined" />
        
        <Typography sx={{color:"#777", mt:2, mb:1}} variant="body2" component="p">
        Use authentic name
        </Typography>
        <Box sx={{display:"flex", flexWrap:"wrap", mb:6, width:{md:1, xs:1}}}>
          <Chip icon={<MdVerifiedUser color="green" size={"20px"}/>} sx={{m:0.5, borderRadius:3,bgcolor:"#f1f1f1", color:"#333", cursor:"pointer"}}  label="Abdullah Al Kaisan" />
          <Chip icon={<IoMdCloseCircle color="orangered" size={"20px"}/>} sx={{m:0.5, borderRadius:3,bgcolor:"#f1f1f1", color:"#333", cursor:"pointer"}}  label="Cat" />
          <Chip icon={<IoMdCloseCircle color="orangered" size={"20px"}/>} sx={{m:0.5, borderRadius:3,bgcolor:"#f1f1f1", color:"#333", cursor:"pointer"}}  label="asdf" />
          <Chip icon={<IoMdCloseCircle color="orangered" size={"20px"}/>} sx={{m:0.5, borderRadius:3,bgcolor:"#f1f1f1", color:"#333", cursor:"pointer"}}  label="Hello everyone" />
        </Box>
    </>
  )
}
