import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Slider, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { CallCardContext } from '../../Providers/CallCardProvider';
import { useEffect } from 'react';








export default function AudioSlider_custom(props) {

  const {audioPlayerRef, isPaused} = useContext(CallCardContext);
  const isColor = props.color;

  
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const theme = useTheme();


  const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
  });

    const sliderStyle = {
      color: theme.palette.mode === 'dark' ? `#1565C0${isPaused?"30":""}` : `#1565C0${isPaused?"30":""}`,
      height: 4,
      '& .MuiSlider-thumb': {
          width: 8,
          height: 8,
          transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
          '&::before': {
          boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
          },
          '&:hover, &.Mui-focusVisible': {
          boxShadow: `0px 0px 0px 8px ${
              theme.palette.mode === 'dark'
              ? 'rgb(255 255 255 / 16%)'
              : 'rgb(0 0 0 / 16%)'
          }`,
          },
          '&.Mui-active': {
          width: 20,
          height: 20,
          },
      },
      '& .MuiSlider-rail': {
          opacity: 0.28,
      },}




    useEffect(()=>{

      const audioElement = audioPlayerRef.current;

      const handleLoadedMetadata = () => {
        setDuration(parseInt(audioElement.duration));
      };

      const handleTimeUpdate = () => {
        setPosition(parseInt(audioElement.currentTime));


      };

      if (audioElement) {
        audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
        audioElement.addEventListener('timeupdate', handleTimeUpdate);
      }


 // Clean up the event listener
      return () => {
        if (audioElement) {
          audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
          audioElement.removeEventListener('timeupdate', handleTimeUpdate);
        }
      };

            
      }, [duration, audioPlayerRef])


    
    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
      }


    //   rgba(0,0,0,0.87)



  return (
    <React.Fragment>
        <Slider
        aria-label="time-indicator"
        size="small"
        value={position}
        min={0}
        step={1}
        max={duration}
        // onChange={(_, value) => setPosition(value)}
        onChange={(e) => setPosition(e.target.value)}
        style={sliderStyle}


        />
        <Box
        
        sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mt: -2,
      }
      }
        >
        <TinyText>{formatDuration(position)}</TinyText>
        <TinyText>-{formatDuration(duration - position)}</TinyText>
        </Box>
    </React.Fragment>
  )
}





