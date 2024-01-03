// import { useTheme } from '@emotion/react';
// import { PauseRounded, PlayArrowRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

import { 
    UilPlay,
    UilPause,
  
  } from '@iconscout/react-unicons'
  

export default function AudioPlay_button() {



    // const theme = useTheme();

    const [paused, setPaused] = React.useState(true);
    // const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';



  return (
    <>
        <IconButton
        color="primary"
        aria-label={paused ? 'play' : 'pause'}
        onClick={() => setPaused(!paused)

        } 
        >
        {paused ? (
        <UilPlay
            sx={{ fontSize: '3rem' }}
            // htmlColor={mainIconColor}
        />

          


        
        ) : (
        <UilPause sx={{ fontSize: '3rem' }} 
        // htmlColor={mainIconColor} 
        />
        )}
    </IconButton>
    </>

  )
}
