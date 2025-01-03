import { useTheme } from "@emotion/react";
import { Box, IconButton, TextField } from "@mui/material";
import { MdSearch, MdTune } from "react-icons/md";
import SearchTextArea from "./SearchTextArea";
import { useEffect, useState } from "react";
import { axiosInstance } from "../AxiosInstance";


export default function SearchMain() {



  const [getAllUserData, setGetAllUserData] = useState(null);

  useEffect(()=>{
    axiosInstance.get('/users')
    .then(res=>{
      setGetAllUserData(res.data);
    })
  },[])





    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const searchStyleType = 1;


  return (
    <Box sx={{display:{md:"flex", xs:"none"}, alignItems:"center", width:"auto"}}>

    {searchStyleType ?

<>
<TextField   
      // variant="filled" 
      type='search' 
      size='small'
      sx={{
          // minWidth:350, 
          display:"flex",
          flex:1,
          width:{md:300, lg:300,},

          // width:500, 
        // marginTop:2,
        // marginBottom:1,
          margin:1,
          marginLeft:4,
          backgroundColor:`${isDark ? "#222" : ""}`
      }} 
      // label="Search 501,246 talent" 
      placeholder={`Search ${getAllUserData?.length-1} talent`}
    />
          {/* <IconButton color="primary" sx={{ p: '10px' }} >
            <MdSearch/>
          </IconButton> */}

          <IconButton color="primary" sx={{ p: '10px' }} >
            {/* <DirectionsIcon /> */}
            <MdTune/>
          </IconButton>
</>

    : 
      <Box sx={{margin:1}}>
        <SearchTextArea/>
      </Box>
    
    }



    </Box>
  )
}
