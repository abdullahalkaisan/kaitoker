import { Box, Chip, TextField, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { BriefcaseBusiness, Copy, Layers2, Link } from "lucide-react";

export const Profession_step = () => {

  const [professionInput, setProfessionInput] = useState();
  const {user,loading, createAccount_mongo, setCreateAccount_mongo} = useContext(AuthContext);

  const suggestedProfessions = ["English Teacher", "Web developer", "Graphic designer", "Video editor", "Phychologist", "Software Engineer", "Math tutor"];

    useEffect(() => {
      setCreateAccount_mongo({...createAccount_mongo, profession:professionInput});
    },[professionInput])

    
  return (

  <>
    {loading && !user && <div>loading...</div>}
    <Typography variant="h5" component="h2" sx={{ my:2}}>
    What is your profession?
  </Typography>

  <TextField fullWidth autoFocus error={!professionInput} value={professionInput} onChange={(e)=> setProfessionInput(e.target.value)}  sx={{mb:2, mr:2}} id="outlined-basic"    />
  <Typography sx={{color:"#777", mt:2, mb:1}} variant="body2" component="p">
    Choose common profession ex. 
  </Typography>
  <Box sx={{display:"flex", flexWrap:"wrap", width:{md:1, xs:1}}}>


    {suggestedProfessions.map((suggestedProfession, index) => {
      return(
        <Chip 
          key={index} 
          icon={<Copy 
            size={18} 
            style={{marginLeft:10}}/>} 
            onClick={()=> setProfessionInput(suggestedProfession)}
            sx={{m:0.5, borderRadius:3, cursor:"pointer"}}  
            label={suggestedProfession} 
          />
      )
    })}

  </Box>
  </>
  )
}
