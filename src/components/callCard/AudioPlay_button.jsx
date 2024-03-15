// import { useTheme } from '@emotion/react';
// import { PauseRounded, PlayArrowRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";
import { 
    UilPlay,
    UilPause,
  
  } from '@iconscout/react-unicons'
  

  import AudioPlayer from 'react-audio-player';









export default function AudioPlay_button() {


  const [audioSrc, setAudioSrc] = useState('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };


    // const theme = useTheme();

    const [paused, setPaused] = React.useState(true);
    // const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';


  return (
    <>

      {/* <AudioPlayer
        src={audioSrc}
        autoPlay={false}
        controls
        loop={false}
        onPlay={handlePlayPause}
        onPause={handlePlayPause}
        onEnded={handleAudioEnded}
      /> */}

        <IconButton
        onPlay={handlePlayPause}
        color="primary"
        aria-label={paused ? 'play' : 'pause'}
        onClick={() => setPaused(!paused)} 
        >
        {paused ? (
        // <UilPlay
        //     sx={{ fontSize: '3rem' }}
        //     // htmlColor={mainIconColor}
        // />
        
<IoMdPlay size={"40px"} />
          


        
        ) : (
        // <UilPause sx={{ fontSize: '3rem' }} 
        // // htmlColor={mainIconColor} 
        // />

<IoMdPause size={"40px"} />


        )}
    </IconButton>
    </>

  )
}
