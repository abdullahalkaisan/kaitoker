import styled from '@emotion/styled';
import { Avatar, Box, Stack, Typography, CardActionArea, Badge, Button, IconButton, AvatarGroup, Tooltip } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import TranslateIcon from '@mui/icons-material/Translate';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import StarIcon from '@mui/icons-material/Star';

import { 
  UilCommentLines,
  // UilRssAlt,
  UilLocationPoint,
  UilPlusCircle,

 } from '@iconscout/react-unicons'


// import { useTheme } from '@emotion/react';
import AudioSlider_custom from '../../components/callCard/AudioSlider_custom';
import AudioPlay_button from '../../components/callCard/AudioPlay_button';
import ChipsCustom from '../../components/callCard/ChipsCustom';
import DonateCard from './TabMenuProfile/DonateCard';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import LoadingWithLogo from '../../components/LoadingWithLogo';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    width:"10px",
    height:"10px",
    right: 8,
    bottom: 8,
    outline: `4px solid ${theme.palette.background.paper}`,
    padding: '0 0px',
  },
}));




export default function SideControlProfile(props) {

  const {avatar, userName, profession, skills} = props.getProfile;

  const { user, loading, signIn_google, 
    // signIn_google_redirectResult
   } = useContext(AuthContext);


   if(loading){
    return <LoadingWithLogo/>
  }










  // const theme = useTheme();

  // const useMyTheme = theme.palette.mode;

  return (
    <Box>

      {console.log("test", user.photoURL)}

      <Box display={"flex"} bgcolor={"background.default"} color={"text.primary"} width={"100%"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
      
      <StyledBadge
          color='info'
          variant="dot"
          badgeContent={1}
          overlap="circular"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >

        <CardActionArea sx={{width:"auto", borderRadius:"40px 40px 20px 40px" }}>
          
          
            <Avatar
                  alt="Remy Sharp"
                  src={user.photoURL}
                  sx={{ width: 100, height: 100, borderRadius:"40px 40px 20px 40px" }}
              />
          


        </CardActionArea>
        </StyledBadge>
 

        <Box my={2}>
          <Typography display={"flex"} alignItems={"center"} variant="h1" fontWeight={"bold"} fontSize={"24px"} bgcolor={"background.default"} color={"text.primary"}>
            {userName}
            <VerifiedIcon color='primary' fontSize='small' sx={{mx:0.5}}/>
          </Typography>
          <Typography variant="" fontSize={"16px"}
            // sx={{
            //   color: `${useMyTheme==="dark"? "#999": "#777"}`,
            // }}

          >
           {profession}
          </Typography>



            <DonateCard/>


          <Typography display={"none"} sx={{color:"#999"}} mt={1} variant="subtitle1"   p={0} gutterBottom>
            <Box display={"flex"} flexWrap={"wrap"} flexDirection={"row"} justifyContent={"center"} >
            <UilLocationPoint/>
            <Box>
              {"Bangladesh"}
            </Box>

            <Tooltip title={"Bangladesh"} placement="top">
              <Box sx={{display:"flex", alignItems:"center", px:1}}>
              {/* , border:"1px solid #ebebeb"  */}
                <img style={{borderRadius:3}} src={`https://flagcdn.com/w20/bd.png`} />
              </Box>
            </Tooltip>

            </Box>

          </Typography>



        </Box>


        <Box width={"70%"} mx={3} mb={2}>
          {/* <Slider
            size="small"
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
          /> */}

          <AudioSlider_custom/>


        </Box>










        <Box display={"flex"} flexDirection={"row"} alignItems={"center"} spacing={1}>

            <IconButton color='primary'>
              {/* <UilRssAlt/> */}
              <UilPlusCircle/>

            </IconButton>

            {/* <IconButton color='primary'>
              <UilPlay/>
            </IconButton> */}

            <AudioPlay_button/>

            <IconButton color='primary'>
              <UilCommentLines/>
            </IconButton>
            <Box>
              <Button size='small' variant='contained' sx={{borderRadius:999, textTransform:"none"}}>$2.24/hr</Button>
            </Box>

        </Box>










        <Stack  bgcolor={"background.default"} color={"text.primary"} fontSize={"medium"} mb={0.5} fontWeight={"boldd"} sx={{color:"#777"}} flexDirection={"row"} justifyContent={"center"} pl={0} pt={2} pb={1} alignItems={"center"} >
          <Box sx={{display:"flex", alignItems:"center", pr:1}}> 
            <RssFeedRoundedIcon sx={{fontSize:"medium"}}/> 
            {254}
          </Box>
          <Box sx={{display:"flex", alignItems:"center", pr:1}}>
              <StarIcon sx={{fontSize:"medium", color:"#25c600"}} />
            <Box sx={{fontWeight:"bold", pr:0.5, color:"#25C600"}}>
              78%
            </Box>
            (123.3K)
            </Box>

            <Box sx={{display:"flex", alignItems:"center", pr:1}}>
              <TranslateIcon sx={{fontSize:"medium"}}/>
              English
            </Box>

        </Stack>



        <Stack display={""} bgcolor={"background.default"} color={"text.primary"} direction="row" justifyContent={"center"} flexWrap={"wrap"} px={2}>
            {skills.map((item, index)=> <ChipsCustom key={index} size={"large"} label={item.name}/>)}
            {/* <ChipsCustom size={"large"} label={"Full-stack Web developer (MERN)"}/>
            <ChipsCustom size={"large"} label={"SEO"}/>
            <ChipsCustom size={"large"} label={"SEO"}/>
            <ChipsCustom size={"large"} label={"Photoshop"}/>
            <ChipsCustom size={"large"} label={"UX UI design"}/>
            <ChipsCustom size={"large"} label={"English"}/> */}

          </Stack>









        <Typography my={2} mx={4} variant="body1" color="#666">
          Hey My name is Kaisan Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, magni? Dolorem, aperiam neque pariatur dicta iure facilis aliquid odit ea.
        </Typography>




            <Stack direction={"row"} my={2} alignItems={"center"}>
              <AvatarGroup 
                size="small"
                total={31}
                renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
                


                >
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
                <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
              
              </AvatarGroup>

              <Box>
                <Button color='error' size='' variant='contained' sx={{borderRadius:999, textTransform:"none", mx:1}}>Get 20% off</Button>
              </Box>
  
            </Stack>


      {/* <iframe style={{border:"none", borderRadius:9}} width="auto" height="200" src="https://www.youtube.com/embed/pBzrHxm6mco?si=IwitSnSkiKX73d3o" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen /> */}

      </Box>







    </Box>
  )
}
