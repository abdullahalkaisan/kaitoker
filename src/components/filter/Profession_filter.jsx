import styled from "@emotion/styled";
import { Box, Tab, Tabs, IconButton } from "@mui/material";
import * as React from 'react';

import { UilSlidersVAlt } from '@iconscout/react-unicons'

export default function Slider_filter() {

  const CustomTab = styled(Tab)({
    textTransform:"none",
    // fontSize:"medium",
    // fontWeight:"bold"
  });



    const [sliderValue, setSliderValue] = React.useState(0);




    const handleChange_slider = (event, newValue) => {
      setSliderValue(newValue);
    };








    // borderBottom:"1px solid #f1f1f1" 
  return (
    <>
        <Box 
        bgcolor={"background.default"} 
        color={"text.primary"} 
        sx={{ display:"flex", px:3, maxWidth: 1, bgcolor: 'background.paper', }}>
        
        <IconButton  sx={{display:{md:"none", xs:"flex"}}}>
          <UilSlidersVAlt/>
        </IconButton>


        
        <Tabs
            value={sliderValue}
            onChange={handleChange_slider}
            variant="scrollable"
            scrollButtons
            // allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
        >

          <CustomTab iconPosition="start" icon={<img width="24" height="24" src="https://img.icons8.com/fluency/48/000000/neurodiverse.png" />} label="All (564)" />
          <CustomTab iconPosition="start" icon={<img width="24" height="24" src="https://img.icons8.com/fluency/48/null/translation.png" />} label="Languages (64)" />
          <CustomTab iconPosition="start" icon={<img width="24" height="24" src="https://img.icons8.com/fluency/48/000000/console.png" />} label="Programmer (564)" />
          <CustomTab iconPosition="start" icon={<img width="24" height="24" src="https://img.icons8.com/fluency/48/000000/passenger-with-baggage.png" />} label="Traveler (964)" />
          <CustomTab iconPosition="start" icon={<img width="24" height="24" src="https://img.icons8.com/fluency/48/000000/design.png" />} label="Graphics designer (164)" />
          <CustomTab iconPosition="start" icon={<img width="24" height="24" src="https://img.icons8.com/fluency/48/000000/video-trimming.png" />} label="Video editor (452)" />
          <CustomTab iconPosition="start" icon={<img width="24" height="24" src="https://img.icons8.com/fluency/48/000000/brain.png" />} label="Psychologist (64)" />
          <CustomTab iconPosition="start" icon={<img width="24" height="24" src="https://img.icons8.com/fluency/48/000000/physics.png" />} label="Physicist (64)" />
          <CustomTab iconPosition="start" icon={<img width="24" height="24" src="https://img.icons8.com/fluency/48/000000/calculator.png" />} label="Mathmatics (64)" />
          <CustomTab iconPosition="start" icon={<img width="24" height="24" src="https://img.icons8.com/fluency/48/000000/light.png" />} label="Advisor (64)" />
          <CustomTab iconPosition="start" icon={<img width="24" height="24" src="https://img.icons8.com/fluency/48/000000/pray.png" />}label="Religioist (64)" />
          <CustomTab iconPosition="start" icon={<img width="24" height="24" src="https://img.icons8.com/fluency/48/000000/telescope.png" />} label="Astronomy (64)" />
          <CustomTab iconPosition="start" icon={<img width="24" height="24" src="https://img.icons8.com/fluency/48/000000/investment.png" />} label="bussiness (64)" />

        </Tabs>
        </Box>
    
    </>
  )
}
